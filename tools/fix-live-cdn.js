/**
 * Fix doubled CDN prefixes and normalize asset URLs in live HTML.
 */
const fs = require("fs");
const path = require("path");

const OUT = path.resolve(__dirname, "..", "assets", "sites-live");
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
    // undo accidental double CDN
    .replace(/https:\/\/wttgiii\.peterrock\.devhttps:\/\/wttgiii\.peterrock\.dev\/website-assets\//g, CDN)
    // relative paths from first import
    .replace(/\.\.\/website-assets\//g, CDN)
    // root-relative not already behind peterrock host
    .replace(/(?<!wttgiii\.peterrock\.dev)\/website-assets\//g, CDN);
  if (next !== html) {
    fs.writeFileSync(file, next, "utf8");
    n++;
  }
}
console.log(`Fixed ${n}/${files.length} files`);
const sample = fs.readFileSync(path.join(OUT, "blackhatpost", "index.html"), "utf8");
const bad = (sample.match(/peterrock\.devhttps/g) || []).length;
const good = (sample.match(/https:\/\/wttgiii\.peterrock\.dev\/website-assets\//g) || []).length;
console.log({ badDoubles: bad, goodCdnRefs: good });
