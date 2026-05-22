import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "img", "logo2.png");
const out = path.join(root, "img", "og-image.jpg");

const meta = await sharp(src).metadata();
const side = meta.height;
const left = Math.max(0, Math.floor((meta.width - side) / 2));

await sharp(src)
  .extract({ left, top: 0, width: side, height: side })
  .resize(1200, 630, { fit: "contain", background: { r: 6, g: 6, b: 7, alpha: 1 } })
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(out);

console.log("OG image:", out, "(1200x630)");
