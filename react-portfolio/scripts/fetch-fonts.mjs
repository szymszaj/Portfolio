/**
 * npm run fonts - self-hostowane woff2 zawężone do znaków z CHARSET
 * (~75 kB zamiast ~201 kB pełnych subsetów) + generowany src/fonts.css.
 * Znak spoza CHARSET renderuje się fontem systemowym - sprawdza to
 * npm run check:fonts.
 */
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const FONT_DIR = path.join(ROOT, "public", "fonts");
const CSS_FILE = path.join(ROOT, "src", "fonts.css");

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

const range = (from, to) =>
  Array.from({ length: to - from + 1 }, (_, i) => String.fromCodePoint(from + i)).join("");

const CHARSET = [
  range(0x20, 0x7e), // ASCII drukowalne
  range(0xc0, 0xff), // Latin-1: À-ÿ (ü, é, ñ, ö... w nazwiskach)
  "ąćęłńóśźżĄĆĘŁŃÓŚŹŻ", // polskie diakrytyki spoza Latin-1
  "čďěňřšťůžČĎĚŇŘŠŤŮŽ", // czeskie/słowackie
  "£§©«®°·»€™",
  "–—…„”“‘’‹›•†‡",
  "↑↓→←×≈",
].join("");

const FAMILIES = [
  { family: "Inter", file: "inter-subset.woff2" },
  { family: "Archivo", file: "archivo-subset.woff2" },
];

const fetchText = async (url) => {
  const response = await fetch(url, { headers: { "User-Agent": UA } });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.text();
};

await fs.mkdir(FONT_DIR, { recursive: true });

const faces = [];

for (const { family, file } of FAMILIES) {
  const cssUrl =
    `https://fonts.googleapis.com/css2?family=${family}:wght@300..700` +
    `&text=${encodeURIComponent(CHARSET)}&display=swap`;

  const css = await fetchText(cssUrl);
  const fontUrl = css.match(/url\((https:[^)]+)\)/)?.[1];
  const unicodeRange = css.match(/unicode-range:\s*([^;]+);/)?.[1];

  if (!fontUrl || !unicodeRange) {
    throw new Error(`nieoczekiwana odpowiedź Google Fonts dla ${family}`);
  }

  const response = await fetch(fontUrl, { headers: { "User-Agent": UA } });
  if (!response.ok) throw new Error(`${response.status} ${fontUrl}`);
  const buffer = Buffer.from(await response.arrayBuffer());

  await fs.writeFile(path.join(FONT_DIR, file), buffer);
  console.log(`${file.padEnd(24)} ${(buffer.length / 1024).toFixed(1)} kB`);

  faces.push(
    `@font-face {\n` +
      `  font-family: "${family}";\n` +
      `  font-style: normal;\n` +
      `  font-weight: 300 700;\n` +
      `  font-display: swap;\n` +
      `  src: url("/fonts/${file}") format("woff2");\n` +
      `  unicode-range: ${unicodeRange.replace(/\s+/g, " ").trim()};\n` +
      `}`,
  );
}

await fs.writeFile(
  CSS_FILE,
  `/* Wygenerowane przez scripts/fetch-fonts.mjs - nie edytuj ręcznie. */\n\n` +
    `${faces.join("\n\n")}\n`,
  "utf8",
);

console.log(`\nzapisano ${path.relative(ROOT, CSS_FILE)}`);
