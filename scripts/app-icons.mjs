import { chromium } from '@playwright/test';
import { readFileSync } from 'node:fs';

/*
  Renders the PNG app icons declared in public/site.webmanifest.

  Source of truth is public/favicon.svg, rendered in a dark colour scheme so its
  own media query supplies the light glyph and teal accent. That is what makes
  these match public/apple-touch-icon.png, which uses the same ink (#f8fafc),
  accent (#2DD4BF) and ground (#020617).

  "any" icons fill the tile the way the apple-touch icon does. The maskable icon
  keeps the glyph inside the safe zone, since a platform may crop it to a circle
  as small as 80% of the tile.

  Usage: node scripts/app-icons.mjs
*/

const GROUND = '#020617';

// Fraction of the tile the <svg> box spans. The mark sits inside its own viewBox
// padding, so a full-bleed box renders a glyph 92% of the tile wide, matching
// apple-touch-icon.png. 0.65 keeps the whole mark inside the maskable safe zone.
const ICONS = [
  { file: 'icon-192.png', size: 192, glyph: 1 },
  { file: 'icon-512.png', size: 512, glyph: 1 },
  { file: 'icon-maskable-512.png', size: 512, glyph: 0.65 },
];

const svg = readFileSync('public/favicon.svg', 'utf8').replace(/<\?xml.*?\?>\s*/s, '');

const markup = (size, glyph) => `
<style>
  html, body { margin: 0; padding: 0; }
  .tile {
    width: ${size}px; height: ${size}px; background: ${GROUND};
    display: flex; align-items: center; justify-content: center;
  }
  .tile svg { width: ${Math.round(size * glyph)}px; height: ${Math.round(size * glyph)}px; display: block; }
</style>
<div class="tile">${svg}</div>`;

const browser = await chromium.launch();
const page = await browser.newPage({ colorScheme: 'dark' });

for (const { file, size, glyph } of ICONS) {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(markup(size, glyph));
  await page.screenshot({ path: `public/${file}`, clip: { x: 0, y: 0, width: size, height: size } });
  console.log(`public/${file}`);
}

await browser.close();
