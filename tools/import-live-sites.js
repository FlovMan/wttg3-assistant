/**
 * Import live site HTML/CSS/assets from wttgiii.peterrock.dev into assets/sites-live/
 * Usage: node tools/import-live-sites.js
 */
const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "assets", "sites-live");
const ASSETS_DIR = path.join(OUT, "website-assets");
const BASE = "https://wttgiii.peterrock.dev";
const PATCH = "1.0.5";
const CONCURRENCY = 8;

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    const req = lib.get(url, { headers: { "User-Agent": "wttg3-assistant-import/1.0" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        res.resume();
        fetchBuffer(new URL(res.headers.location, url).href).then(resolve, reject);
        return;
      }
      if (res.statusCode !== 200) {
        res.resume();
        reject(new Error(`${url} → ${res.statusCode}`));
        return;
      }
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks)));
    });
    req.on("error", reject);
  });
}

async function fetchJson(url) {
  const buf = await fetchBuffer(url);
  return JSON.parse(buf.toString("utf8"));
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function pageIdFromFilename(filename) {
  return String(filename || "index.html")
    .replace(/\.html?$/i, "")
    .replace(/[^\w.-]+/g, "-")
    .toLowerCase() || "index";
}

function collectAssetPaths(text) {
  const set = new Set();
  if (!text) return set;
  const re = /\/website-assets\/[A-Za-z0-9._-]+/g;
  let m;
  while ((m = re.exec(text))) set.add(m[0]);
  return set;
}

function rewriteAssetPaths(html) {
  // Hotlink game assets from the reverse-wiki CDN (avoid shipping ~250MB binaries).
  // Only rewrite root-relative /website-assets/ paths — never touch absolute URLs.
  return String(html || "").replace(/(^|["'(=\s])\/website-assets\//g, `$1https://wttgiii.peterrock.dev/website-assets/`);
}



function buildPageHtml(site, page) {
  const css = [site.css || "", page.css || ""].filter(Boolean).join("\n\n");
  const body = rewriteAssetPaths(page.rawHtml || "");
  const cssRewritten = rewriteAssetPaths(css);
  const markerCss = `
.PTAG,.CPTAG,.CFTAG{cursor:default!important}
.wttg-marker-inline{display:inline!important}
.wttg-marker-host{outline:3px solid var(--wttg-marker-color)!important;outline-offset:2px!important}
.wttg-marker-ptag{--wttg-marker-color:#25d366}
.wttg-marker-cptag{--wttg-marker-color:#ffb347}
.wttg-marker-cftag{--wttg-marker-color:#ff4f70}
.wttg-marker-ptag:empty{display:inline-block!important;min-width:64px!important;min-height:22px!important;background:rgba(37,211,102,.14)!important}
`;
  const markerJs = `(function(){function mark(){["PTAG","CPTAG","CFTAG"].forEach(function(tag){document.querySelectorAll("."+tag).forEach(function(el){var host=[].slice.call(el.querySelectorAll("*")).find(function(n){return [].slice.call(n.childNodes).some(function(c){return c.nodeType===Node.TEXT_NODE&&c.textContent.trim();});})||el.firstElementChild||el;if(host===el){var wrap=document.createElement("span");wrap.className="wttg-marker-inline";while(el.firstChild)wrap.appendChild(el.firstChild);el.appendChild(wrap);host=wrap;}host.classList.add("wttg-marker-host","wttg-marker-"+tag.toLowerCase());});});}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",mark);else mark();})();`;
  return `<!DOCTYPE html>
<html lang="en" data-wttg-domain="${escapeHtml(site.domain || "")}">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${escapeHtml(page.title || site.website || site.domain)}</title>
<style>
${cssRewritten}
${markerCss}
</style>
</head>
<body>
${body}
<!-- wttg-key-markers -->
<script>${markerJs}</script>
<!-- /wttg-key-markers -->
</body>
</html>
`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function mapPool(items, limit, fn) {
  const results = new Array(items.length);
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await fn(items[idx], idx);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => worker()));
  return results;
}

async function main() {
  console.log(`Fetching ${PATCH} website data…`);
  const sites = await fetchJson(`${BASE}/website-data/${encodeURIComponent(PATCH)}.json`);
  if (!Array.isArray(sites)) throw new Error("Unexpected website-data shape");

  ensureDir(OUT);

  // Collect asset refs for logging only — assets stay on CDN.
  const assetPaths = new Set();
  for (const site of sites) {
    for (const p of collectAssetPaths(site.css)) assetPaths.add(p);
    for (const page of site.pages || []) {
      for (const p of collectAssetPaths(page.rawHtml)) assetPaths.add(p);
      for (const p of collectAssetPaths(page.css)) assetPaths.add(p);
    }
  }
  console.log(`Found ${assetPaths.size} unique assets (CDN hotlink, not downloaded)`);

  // Load old screenshot notes if present
  let oldManifest = {};
  try {
    oldManifest = JSON.parse(fs.readFileSync(path.join(ROOT, "assets", "sites", "manifest.json"), "utf8"));
  } catch {
    /* optional */
  }

  const manifest = {};
  for (const site of sites) {
    const domain = site.domain;
    const siteDir = path.join(OUT, domain);
    ensureDir(siteDir);

    const pagesMeta = [];
    for (const page of site.pages || []) {
      const id = pageIdFromFilename(page.filename);
      const htmlName = `${id}.html`;
      const htmlPath = path.join(siteDir, htmlName);
      fs.writeFileSync(htmlPath, buildPageHtml(site, page), "utf8");

      const rel = `assets/sites-live/${domain}/${htmlName}`.replace(/\\/g, "/");
      const oldPages = (oldManifest[site.website] || {}).pages || [];
      const oldNote =
        oldPages.find((p) => p.id === id)?.note ||
        oldPages.find((p) => normalize(p.id) === normalize(id))?.note ||
        null;

      pagesMeta.push({
        id,
        title: page.title || id,
        html: rel,
        note: oldNote || undefined,
      });
    }

    const siteNote = (oldManifest[site.website] || {}).note || undefined;
    const meta = {
      name: site.website,
      domain,
      availability: site.availability || null,
      source: `${BASE}/website-visualizer/`,
      patch: PATCH,
      pages: pagesMeta.map((p) => ({ id: p.id, title: p.title, file: `${p.id}.html` })),
    };
    fs.writeFileSync(path.join(siteDir, "_meta.json"), JSON.stringify(meta, null, 2) + "\n", "utf8");

    manifest[site.website] = {
      slug: domain,
      mode: "live",
      note: siteNote,
      pages: pagesMeta.map(({ id, title, html, note }) => ({
        id,
        title,
        html,
        ...(note ? { note } : {}),
      })),
    };
  }

  fs.writeFileSync(path.join(OUT, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n", "utf8");
  fs.writeFileSync(
    path.join(OUT, "README.md"),
    `# Live site HTML (preview)

Imported from [${BASE}/website-visualizer/](${BASE}/website-visualizer/) (patch **${PATCH}**).

Structure:

\`\`\`
assets/sites-live/manifest.json
assets/sites-live/<domain>/<page>.html
assets/sites-live/<domain>/_meta.json
\`\`\`

Game images are hotlinked from \`${BASE}/website-assets/\` (not vendored — keeps the repo small).

Toggle gallery mode in the app: **Screenshots** (default) vs **Live HTML**.
Force live: \`?gallery=live\`
`,
    "utf8"
  );

  console.log(`Wrote ${Object.keys(manifest).length} sites → ${OUT}`);
}

function normalize(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
