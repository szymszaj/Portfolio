import fs from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");

const css = await fs.readFile(path.join(ROOT, "src", "fonts.css"), "utf8");
const html = await fs.readFile(path.join(ROOT, "dist", "index.html"), "utf8");

const covered = new Set();
for (const rangeList of css.matchAll(/unicode-range:\s*([^;]+);/g)) {
  for (const token of rangeList[1].split(",")) {
    const value = token.trim().replace(/^U\+/i, "");
    if (!value) continue;
    const [from, to] = value.split("-");
    const start = parseInt(from, 16);
    const end = to ? parseInt(to, 16) : start;
    for (let cp = start; cp <= end; cp += 1) covered.add(cp);
  }
}

const rootStart = html.indexOf('<div id="root">');
const rootEnd = html.indexOf("window.__CMS_CONTENT__");
const body = html.slice(rootStart, rootEnd > rootStart ? rootEnd : undefined);

const text = body
  .replace(/<[^>]+>/g, " ")
  .replace(/&quot;/g, '"')
  .replace(/&#x27;/g, "'")
  .replace(/&amp;/g, "&")
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">")
  .replace(/&nbsp;/g, " ");

const missing = new Map();
for (const char of text) {
  const cp = char.codePointAt(0);
  if (cp <= 0x20) continue;
  if (!covered.has(cp)) missing.set(char, (missing.get(char) ?? 0) + 1);
}

if (missing.size === 0) {
  console.log(`[fonts] subset pokrywa cały tekst (${covered.size} code pointów)`);
} else {
  console.warn("[fonts] znaki spoza subsetu:");
  for (const [char, count] of [...missing].sort((a, b) => b[1] - a[1])) {
    console.warn(
      `  U+${char.codePointAt(0).toString(16).toUpperCase().padStart(4, "0")} ${JSON.stringify(char)} x${count}`,
    );
  }
  process.exitCode = 1;
}
