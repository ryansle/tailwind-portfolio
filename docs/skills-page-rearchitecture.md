# Skills page: full re-architecture (parked option)

Status: **not implemented.** Parked on 2026-09-01 while shipping the lighter
option — a rewritten intro, reframed capability trio, and a new
"How I Actually Build Now" operating-model section above the existing tables.

Keep this if the incremental version starts to feel like the AI-orchestration
story is bolted onto a page that was organized around a tool inventory.

## The idea

Reorganize the page around three top-level capabilities instead of around two
Contentful-backed tables. The tables become supporting evidence inside a
section rather than the thing the page is structured by.

```
PageIntro

┌─ 1. AI-Orchestrated Delivery ────────────┐
│  Operating model (direction → agents →   │
│  review), proof stats, systems run       │
└──────────────────────────────────────────┘

┌─ 2. Front-End Craft ─────────────────────┐
│  Prose + web SkillsTable                 │
└──────────────────────────────────────────┘

┌─ 3. Community Operations ────────────────┐
│  Prose + creative SkillsTable            │
│  Ryan Meetup CTA                         │
└──────────────────────────────────────────┘
```

## Why it might be worth doing

- The current page still leads with a table of tools, which is the exact framing
  the new copy argues against. A reader who only skims sees a stack list.
- Section 1 could carry hard proof — repositories run, systems shipped, scale of
  the monorepo — instead of describing the approach in prose only.
- It would let the capability trio at the top disappear entirely, since each
  card becomes a real section with room to argue its case.

## Why it was not done now

- The two `SkillsTable` sections are load-bearing and Contentful-backed. A
  re-architecture means deciding what the tables are *for* once they are no
  longer the page's spine, and that is a content decision, not a layout one.
- More surface area to retune later. The incremental version reaches the same
  narrative with strings that are easy to edit in place.

## If picked up later

1. The step cards in the operating-model section ([app/skills/page.tsx](../app/skills/page.tsx),
   `operatingModel`) already work as section-1 content — they lift out as-is.
2. Section 1 needs proof to justify its size. Candidates already true and
   sourceable from the `ryanmeetup-v3` repo: multi-app monorepo, shared
   `ui` / `brand` / `utils` packages, Playwright end-to-end coverage, Supabase
   migrations applied across two isolated deployment instances.
3. Consider whether the web `SkillsTable` still earns a full section, or becomes
   a compact chip row under section 2. The confidence-star column is the part
   most at odds with the "capability over inventory" argument.
4. Contentful is the only place skill rows can be added. The delivery API used
   here is read-only, so any new row (an "agent orchestration" entry, say) has
   to be authored in the Contentful UI first.
