import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "img", "logo2.png");

const meta = await sharp(src).metadata();
const side = meta.height;
const left = Math.max(0, Math.floor((meta.width - side) / 2));

const square = sharp(src).extract({
  left,
  top: 0,
  width: side,
  height: side,
});

await square.clone().resize(32, 32).png().toFile(path.join(root, "img", "favicon-32.png"));
await square.clone().resize(180, 180).png().toFile(path.join(root, "img", "apple-touch-icon.png"));
await square.clone().resize(192, 192).png().toFile(path.join(root, "img", "favicon-192.png"));

console.log("Favicons gerados (crop quadrado central):", side + "px");
