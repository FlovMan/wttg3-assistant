/**
 * Inject WTTG key-location markers (PTAG/CPTAG/CFTAG outlines) into live HTML pages.
 * Mirrors https://wttgiii.peterrock.dev/website-visualizer/ highlighting.
 *
 * Usage: node tools/inject-key-markers.js
 */
const fs = require("fs");
const path = require("path");

const OUT = path.resolve(__dirname, "..", "assets", "sites-live");

const MARKER_CSS = `
/* WTTG3 key-location markers (from reverse-wiki visualizer) */
.PTAG,.CPTAG,.CFTAG{cursor:default!important}
.wttg-marker-inline{display:inline!important}
.wttg-marker-host{outline:3px solid var(--wttg-marker-color)!important;outline-offset:2px!important}
.wttg-marker-ptag{--wttg-marker-color:#25d366}
.wttg-marker-cptag{--wttg-marker-color:#ffb347}
.wttg-marker-cftag{--wttg-marker-color:#ff4f70}
.wttg-marker-ptag:empty{display:inline-block!important;min-width:64px!important;min-height:22px!important;background:rgba(37,211,102,.14)!important}
`;

const MARKER_JS = `(function(){function mark(){["PTAG","CPTAG","CFTAG"].forEach(function(tag){document.querySelectorAll("."+tag).forEach(function(el){var host=[].slice.call(el.querySelectorAll("*")).find(function(n){return [].slice.call(n.childNodes).some(function(c){return c.nodeType===Node.TEXT_NODE&&c.textContent.trim();});})||el.firstElementChild||el;if(host===el){var wrap=document.createElement("span");wrap.className="wttg-marker-inline";while(el.firstChild)wrap.appendChild(el.firstChild);el.appendChild(wrap);host=wrap;}host.classList.add("wttg-marker-host","wttg-marker-"+tag.toLowerCase());});});}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",mark);else mark();})();`;

const MARKER_START = "<!-- wttg-key-markers -->";
const MARKER_END = "<!-- /wttg-key-markers -->";

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (ent.name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

function stripOld(html) {
  return html
    .replace(/<!-- wttg-key-markers -->[\s\S]*?<!-- \/wttg-key-markers -->/g, "")
    .replace(/\n\/\* WTTG3 key-location markers[\s\S]*?\.wttg-marker-ptag:empty\{[^}]+\}\n?/g, "")
    .replace(/<script>\(function\(\)\{function mark\(\)\{[\s\S]*?\}\)\(\);<\/script>\n?/g, "");
}

function inject(html) {
  let out = stripOld(html);
  const block = `${MARKER_START}
<style>${MARKER_CSS}</style>
<script>${MARKER_JS}</script>
${MARKER_END}`;

  if (out.includes("</body>")) {
    out = out.replace(/<\/body>/i, `${block}\n</body>`);
  } else if (out.includes("</html>")) {
    out = out.replace(/<\/html>/i, `${block}\n</html>`);
  } else {
    out += `\n${block}`;
  }
  return out;
}

const files = walk(OUT);
let n = 0;
for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const next = inject(html);
  if (next !== html) {
    fs.writeFileSync(file, next, "utf8");
    n++;
  }
}
console.log(`Injected markers into ${n}/${files.length} pages`);
