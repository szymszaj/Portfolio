/**
 * npm run images - warianty zdjęcia profilowego do public/profile/.
 * Nazwy bez hasha, żeby ten sam URL działał w prerenderze i w kliencie.
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SOURCE = path.join(ROOT, "src", "assets", "profile.jpg");
const OUT_DIR = path.join(ROOT, "public", "profile");

// 144 px (mobile) i 192 px (>=md) w layoucie, czyli do 3x na gęstych ekranach.
const WIDTHS = [192, 288, 384, 576];
const ASPECT = 5 / 4; // wysokość = szerokość * ASPECT

const FORMATS = [
  { ext: "avif", encode: (pipe) => pipe.avif({ quality: 52, effort: 6 }) },
  { ext: "webp", encode: (pipe) => pipe.webp({ quality: 72, effort: 5 }) },
  { ext: "jpg", encode: (pipe) => pipe.jpeg({ quality: 78, mozjpeg: true }) },
];

await fs.mkdir(OUT_DIR, { recursive: true });

const source = await fs.readFile(SOURCE);
const rows = [];

for (const width of WIDTHS) {
  const height = Math.round(width * ASPECT);

  for (const { ext, encode } of FORMATS) {
    const file = path.join(OUT_DIR, `profile-${width}.${ext}`);
    const data = await encode(
      sharp(source).resize(width, height, {
        fit: "cover",
        position: "centre",
      }),
    ).toBuffer();

    await fs.writeFile(file, data);
    rows.push(
      `profile-${width}.${ext}`.padEnd(22) +
        `${width}x${height}`.padEnd(10) +
        `${(data.length / 1024).toFixed(1)} kB`,
    );
  }
}

const original = (source.length / 1024).toFixed(1);
console.log(rows.join("\n"));
console.log(`\nźródło: profile.jpg ${original} kB`);
