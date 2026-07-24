/**
 * Rewrite local live HTML to hotlink assets from peterrock CDN (keeps repo small).
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "assets", "sites-live");
const CDN = "https://wttgiii.peterrock.dev/website-assets/";

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (ent.name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

const files = walk(OUT);
let n = 0;
for (const file of files) {
  let html = fs.readFileSync(file, "utf8");
  const next = html
    .replace(/\.\.\/website-assets\//g, CDN)
    .replace(/\/website-assets\//g, CDN);
  if (next !== html) {
    fs.writeFileSync(file, next, "utf8");
    n++;
  }
}
console.log(`Rewrote ${n}/${files.length} HTML files to CDN assets`);

// Remove bulky local assets if present
const assetsDir = path.join(OUT, "website-assets");
if (fs.existsSync(assetsDir)) {
  fs.rmSync(assetsDir, { recursive: true, force: true });
  console.log("Removed local website-assets/");
}

const readme = path.join(OUT, "README.md");
if (fs.existsSync(readme)) {
  let r = fs.readFileSync(readme, "utf8");
  r = r.replace(
    /assets\/sites-live\/website-assets\/\*   # shared game assets\n/,
    `Assets hotlinked from ${CDN}\n`
  );
  fs.writeFileSync(readme, r, "utf8");
}
