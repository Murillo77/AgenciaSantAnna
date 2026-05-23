import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";
import { writeFile } from "fs/promises";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "img", "favicon.png");

await sharp(src).resize(32, 32).png({ compressionLevel: 9 }).toFile(path.join(root, "img", "favicon-32.png"));
await sharp(src).resize(48, 48).png({ compressionLevel: 9 }).toFile(path.join(root, "img", "favicon-48.png"));
await sharp(src).resize(192, 192).png({ compressionLevel: 9 }).toFile(path.join(root, "img", "favicon-192.png"));
await sharp(src).resize(180, 180).png({ compressionLevel: 9 }).toFile(path.join(root, "img", "apple-touch-icon.png"));

const ico32 = await sharp(src).resize(32, 32).png().toBuffer();
await writeFile(path.join(root, "favicon.ico"), ico32);
await writeFile(path.join(root, "img", "favicon.ico"), ico32);

console.log("Favicons gerados a partir de img/favicon.png");
