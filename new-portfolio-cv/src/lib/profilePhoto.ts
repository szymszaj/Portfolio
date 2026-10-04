import fs from "fs";
import path from "path";

const CANDIDATE_FILENAMES = [
  "profile.jpg",
  "profile.jpeg",
  "profile.png",
  "profile.webp",
];

export function getProfilePhotoSrc(): string | null {
  for (const filename of CANDIDATE_FILENAMES) {
    const absolutePath = path.join(process.cwd(), "public", filename);
    if (fs.existsSync(absolutePath)) {
      return `/${filename}`;
    }
  }
  return null;
}
