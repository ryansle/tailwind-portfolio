import { chromium } from '@playwright/test';

/*
  Renders the 1200x630 Open Graph cards in public/seo/.

  The original cards came from a design tool whose source is not in this
  repository, so this markup was reverse-engineered from the shipped PNGs by
  sampling them pixel by pixel: a 55px inset panel with a 2px hairline border
  and a 40px radius, a 72px grid lattice aligned to the page rather than the
  panel, and two radial glows centred just off opposite corners.

  The six original cards use three hues in all six ordered pairs, which is why
  /initiatives had no card of its own - the permutations were used up. Violet is
  a fourth hue added for it.

  Cards carry no text by design; a route is identified only by its hue pair.

  Usage: node scripts/og-card.mjs [route...]   (default: every route below)
*/

// Solved back out of the shipped PNGs: observed = alpha * hue + (1 - alpha) * #050816.
const TEAL = '32, 148, 139';
const BLUE = '42, 131, 179';
const ROSE = '175, 81, 99';
const VIOLET = '124, 92, 200';

// The two glows are not mirror images: the bottom-right one is wider, weaker per pixel,
// and centred further from its corner. Both sets of numbers were fitted to the originals.
const TOP_ALPHA = 0.36;
const BOTTOM_ALPHA = 0.47;

const HUES = {
  home: { tl: TEAL, br: BLUE },
  about: { tl: BLUE, br: ROSE },
  experience: { tl: TEAL, br: ROSE },
  skills: { tl: BLUE, br: TEAL },
  projects: { tl: ROSE, br: TEAL },
  contact: { tl: ROSE, br: BLUE },
  initiatives: { tl: VIOLET, br: TEAL },
};

const markup = ({ tl, br }) => `
<style>
  html, body { margin: 0; padding: 0; background: #050816; }
  .card { position: relative; width: 1200px; height: 630px; background: #050816; overflow: hidden; }
  /* Both glows sit behind the panel, so only the part outside it is ever seen. */
  .glow { position: absolute; border-radius: 50%; }
  /* Centre 150,50, radius 290. */
  .tl {
    left: -140px; top: -240px; width: 580px; height: 580px;
    background: radial-gradient(circle closest-side, rgba(${tl}, ${TOP_ALPHA}) 0%, rgba(5, 8, 22, 0) 100%);
  }
  /* Centre 985,480, radius 365. */
  .br {
    right: -150px; bottom: -215px; width: 730px; height: 730px;
    background: radial-gradient(circle closest-side, rgba(${br}, ${BOTTOM_ALPHA}) 0%, rgba(5, 8, 22, 0) 100%);
  }
  .panel {
    position: absolute; left: 55px; top: 55px; width: 1090px; height: 520px;
    box-sizing: border-box; overflow: hidden; border-radius: 40px;
    background: linear-gradient(135deg, #0a1120 0%, #05091a 100%);
    /* Clipped to the padding box so the glow shows through the hairline border. */
    background-clip: padding-box;
    border: 2px solid rgba(148, 163, 184, 0.08);
  }
  /* Offset by the inset plus the border so the lattice lands on page multiples of 72. */
  .grid {
    position: absolute; left: -57px; top: -57px; width: 1200px; height: 630px;
    background-size: 72px 72px;
    background-image:
      linear-gradient(to right, rgba(148, 163, 184, 0.034) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(148, 163, 184, 0.034) 1px, transparent 1px);
  }
</style>
<div class="card">
  <div class="glow tl"></div>
  <div class="glow br"></div>
  <div class="panel"><div class="grid"></div></div>
</div>`;

const render = async (routes, directory) => {
  const unknown = routes.filter((route) => !(route in HUES));
  if (unknown.length) throw new Error(`No hue pair defined for: ${unknown.join(', ')}`);

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });

  for (const route of routes) {
    await page.setContent(markup(HUES[route]));
    await page.screenshot({ path: `${directory}/${route}.png`, clip: { x: 0, y: 0, width: 1200, height: 630 } });
    console.log(`${directory}/${route}.png`);
  }

  await browser.close();
};

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  const routes = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(HUES);
  await render(routes, 'public/seo');
}

export { HUES, markup, render };
