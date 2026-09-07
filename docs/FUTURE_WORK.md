# Future work

Remaining work, checked against the current code on 2026-09-07.

Maintenance note:
- When an item is done, delete it. This file should always describe remaining
  work, not history.
- Every item says who it is waiting on. Nothing here is waiting on Claude alone;
  if it were, it would already be done.

---

## Waiting on you

### 1. Paste the Search Console token

**Blocks: all SEO measurement.**

`lib/seo.ts` already reads `NEXT_PUBLIC_GSC_TOKEN` and omits the verification
meta tag entirely when it is unset, so the code side is finished. Put the value
in `.env.local` and the tag appears.

Until this is connected there is no impressions, position, or click data, which
means none of the other SEO work on this site can be measured. This is the
cheapest item here and it gates the usefulness of everything else.

### 2. Add a `slug` field in Contentful

**Blocks: item 4 below.**

Add `slug` (Short text, unique) to the `projects` content type and populate it
for each project. The API token in this repo is read-only, so Claude cannot add
the field or backfill the values.

Deriving slugs from `title` instead was considered and rejected: renaming a
project would silently change its URL and drop whatever ranking it had.

### 3. Decide whether social cards should carry text

**Nothing is broken; this is a design call.**

All seven cards in `public/seo/` are blank gradients - no title, no name, no
URL. A link to any page in Slack, LinkedIn or iMessage renders a dark rectangle
that says nothing about what is being shared. That is a deliberate look, and it
is consistent, so this is only worth changing if you want previews to carry
information.

If you do want text, `scripts/og-card.mjs` already renders the whole set from
markup, so it is a matter of adding a title layer and re-running it, not new
tooling.

---

## Waiting on you first, then Claude

### 4. Give CMS content its own URLs

**Largest remaining opportunity. Needs item 2 first.**

The registry in `lib/pages.ts` has seven indexable URLs. Contentful holds every
project and role - unique long-tail content (project names, tech stacks,
summaries, companies) - compressed onto two list pages where it competes with
itself for one ranking. Someone searching a specific project name has nothing to
land on.

Once the `slug` field exists, the build is:

- Add `slug` to `Project` in `lib/types.ts` and to the normalizer in
  `data/normalize.ts`, with a test for entries that are missing it.
- `generateStaticParams` + `generateMetadata` in `app/projects/[slug]/page.tsx`.
- `CreativeWork` schema per detail page; `ItemList` on the list page.
- Extend `app/sitemap.ts` to fold these in beside the static registry entries.
- Add `BreadcrumbList` to `lib/schema.ts`, deliberately skipped until now
  because the site is flat and every trail would read "Home > Page".

---

## Waiting on upstream

### 5. ESLint 10 and TypeScript 7

**Neither of us can move this yet. Re-checked 2026-09-07; both still blocked.**

Both majors were tried and reverted (see commit `99abc2d`), and the blockers are
unchanged:

- `eslint-plugin-react` is still 7.37.5, and its peer range still stops at
  `eslint ^9.7`. ESLint 10 removed `context.getFilename()`, which the plugin
  still calls, so linting fails outright.
- `typescript-eslint` is still on a `typescript <6.1.0` peer range.
  TypeScript 7 works for `tsc` and `next build` - it cuts the build's type check
  from ~1.8s to ~0.4s - but typescript-eslint will not load against the TS 7 API.

Recheck with `npm view eslint-plugin-react peerDependencies` and
`npm view typescript-eslint peerDependencies`. When the ranges open up, the
upgrade is Claude's to do.

---

## Notes for whoever touches images next

Two things worth knowing before the next asset pass, carried over from the
September 2026 resize of `athens.png`, `athens-longer.png`, and
`ryanroundup.png`:

- Resize from the original in Git history, not from the already-reduced file.
  Resampling a resample compounds the loss.
- Source-file sizes are not browser transfer savings. Next serves optimized
  derivatives, so establishing real transfer cost takes a browser network trace
  at the relevant viewport and device pixel ratio.
