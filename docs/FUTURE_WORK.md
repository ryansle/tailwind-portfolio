# Future work: SEO

Open items left over from the SEO audit of 2026-09-05. Everything here is a
deliberate hand-back, not an oversight — each one needs an asset, a copy
decision, or a CMS change that could not be made from the code alone.

Maintenance note:
- When an item is done, delete it. This file should always describe remaining
  work, not history.

## 1. `/initiatives` has no social card

**Status: needs an asset.**

`/initiatives` currently points at `/seo/projects.png`, so it and `/projects`
share one Open Graph image. Anything linking to either page in Slack, LinkedIn
or iMessage renders the same preview.

The dev-time registry audit in `lib/seo.ts` flags this on every `next dev` boot:

```
[seo] registry warning(s) in lib/pages.ts:
  /initiatives - ogImage /seo/projects.png is also used by /projects
  /projects    - ogImage /seo/projects.png is also used by /initiatives
```

**To fix:** produce a 1200×630 card at `public/seo/initiatives.png` matching the
other six, then update the one line in `lib/pages.ts`:

```ts
'/initiatives': {
  ogImage: '/seo/initiatives.png',   // currently '/seo/projects.png'
  ogImageAlt: '...',                 // describe the card, not the page title
}
```

The warning disappears on its own once both routes have distinct images.

Worth considering instead: delete all seven static PNGs and generate the cards
with `next/og` (`app/<route>/opengraph-image.tsx`). That makes a missing card
structurally impossible and keeps the image in sync with the title — but it is a
bigger change than dropping one file in `public/`.

## 2. `/projects` description is too short

**Status: needs copy.**

112 characters against a 140–160 target, so the search snippet is leaving space
unused. Every other route is in range. The audit warns about it on `next dev`.

## 3. `/about` downloads three portraits

**Status: needs an art-direction decision.**

`components/about/Biography.tsx` renders `athens.png`, `athens-longer.png`, and
`athens.png` again, switching between them with `block sm:hidden` /
`hidden sm:block xl:hidden` / `hidden xl:block`. All three are in the DOM on
every viewport, and Chrome still requests images hidden with `display: none` —
so a phone pulls the 17 MB variant it will never show.

Correct `sizes` values are already in place, so each downloads at its real
rendered width rather than ~3840px. The redundant *fetches* remain.

Two ways out, and the choice is a design call:

- **Collapse to one `NextImage`** — simplest, but loses the per-breakpoint crops.
- **Use a real `<picture>` with `<source media>`** — keeps the crops and genuinely
  prevents the unused fetch, but gives up `next/image` optimization.

Either way, downsample the source PNGs first: 17 MB and 8.9 MB for a slot never
wider than ~680px.

## 4. Decide what `/resume.pdf` is for

**Status: needs a decision.**

`public/resume.pdf` is crawlable (robots allows `/`) but absent from the sitemap.
PDFs do rank, so it can surface as a result with no navigation, no canonical
relationship to the site, and a stale copy of the work history.

Pick one:
- **Index it** — add it to the sitemap and serve an `X-Robots-Tag` with a
  canonical pointing at `/experience`.
- **Hide it** — `noindex` via a header in `next.config.js`.

## 5. Meta `keywords` is dead weight

**Status: needs a call from you.**

`lib/seo.ts` ships 16 keywords site-wide. Google has ignored the tag since 2009;
Bing has treated it as a spam signal. It is not hurting rankings, but it reads as
templated SEO.

The terms that matter are already expressed as `knowsAbout` on the Person schema
in `lib/schema.ts`, which is a field search engines actually consume. Deleting
`keywords` costs nothing.

## 6. Connect Search Console

**Status: needs a token.**

The plumbing is done — `lib/seo.ts` reads `NEXT_PUBLIC_GSC_TOKEN` and omits the
tag entirely when unset. Paste the value into `.env.local` and the verification
meta tag appears.

Until this is connected there is no impressions, position, or click data, which
means none of the audit's other fixes can be measured.

## 7. Manifest icons

**Status: needs assets.**

`public/site.webmanifest` declares a single 48×48 `favicon.ico`. Lighthouse flags
the missing 192×192 and 512×512 PNGs, and there is no `apple-touch-icon` or
`maskable` variant. Add `icon-192.png`, `icon-512.png`, `apple-icon.png` to
`public/`, then list them in both the manifest and `metadata.icons`.

## 8. Give CMS content its own URLs

**Status: needs a Contentful field. Largest remaining opportunity.**

The site has eight indexable URLs. Contentful holds every project and role —
unique long-tail content (project names, tech stacks, summaries, companies) —
compressed onto two list pages where it competes with itself for one ranking.
Someone searching a specific project name has nothing to land on.

`/projects/[slug]` would multiply the indexable surface using copy that already
exists.

Prerequisites:
- Add a `slug` field to the `projects` content type in Contentful, and to
  `Project` in `lib/types.ts`.
- `generateStaticParams` + `generateMetadata` in `app/projects/[slug]/page.tsx`.
- `CreativeWork` schema per detail page; `ItemList` on the list page.
- Extend `app/sitemap.ts` to fold these in beside the static registry entries.

Once detail pages exist, add `BreadcrumbList` to `lib/schema.ts` — deliberately
skipped today because the site is flat and every trail would read
"Home > Page".
