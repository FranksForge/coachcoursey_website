// optimize-images.mjs
// Usage: node scripts/optimize-images.mjs
import fs from 'fs';
import path from 'path';
import url from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const pub = path.join(root, 'public');

const targets = [
  'before.png',
  'after.png',
  'coach-coursey.png',
  'logo.jpg',
  'home_og.png'
];

async function generateWebp(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const base = inputPath.slice(0, -ext.length);
  const output = `${base}.webp`;
  const exists = fs.existsSync(output);
  if (exists) return; // skip existing
  await sharp(inputPath).webp({ quality: 80 }).toFile(output);
  console.log(`webp: ${path.basename(output)}`);
}

async function run() {
  for (const rel of targets) {
    const p = path.join(pub, rel);
    if (!fs.existsSync(p)) {
      console.warn(`skip missing: ${rel}`);
      continue;
    }
    try {
      await generateWebp(p);
    } catch (e) {
      console.error(`fail ${rel}:`, e.message);
    }
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
