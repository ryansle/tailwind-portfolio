# UI Modernization TODOs

This file tracks the remaining UI work after the recent design-system, typography, surface, motion, accessibility, contact-page, and layout-utility passes.

Maintenance note:
- Whenever we complete work that was previously logged here, update this file in the same pass so completed items are removed, renumbered, or rewritten to reflect the new remaining scope.

## Remaining Priorities

### 1. Create Reusable Section Patterns

Suggestions:
- Standardize a section intro pattern with eyebrow, title, supporting copy, and optional action.
- Standardize dividers so they feel intentional rather than purely mechanical.
- Create a small set of reusable card variants:
  - media card
  - project card
  - profile/info card
  - testimonial card

Why it matters:
- The visual language is stronger now, but section composition still varies page to page.

### 2. Improve Responsive Rhythm

Suggestions:
- Review section spacing on tablet and large desktop breakpoints.
- Use more consistent max-widths for text-heavy sections.
- Make dense content blocks breathe more on mobile.
- Check sticky and split-layout pages for awkward breakpoint transitions.

Why it matters:
- The shared layout utilities are better, but some pages still feel denser or looser than others depending on breakpoint.

## Page-Level Work

### 3. Redesign the Home Hero

Current issue:
- The hero is improved, but it still leans on older content structure and could feel more intentional as the main first impression.

Suggestions:
- Tighten the content hierarchy so the intro, headline, supporting copy, and actions feel more editorial.
- Turn the personal bullet list into compact profile stats or mini-cards.
- Rework the portrait treatment with a more deliberate frame/composition.
- Convert the skill icons row into a more curated “current stack” module with stronger grouping and labels.

Why it matters:
- The homepage hero is still the highest-leverage single section in the app.

### 4. Increase Home Page Narrative Flow

Suggestions:
- Make the homepage feel more like a sequence:
  - hero
  - proof / experience snapshot
  - selected work
  - references
  - contact CTA
- Consider pulling one featured project or experience block onto the homepage.

Why it matters:
- Right now the homepage is stronger visually than before, but the story flow could still be more persuasive.

### 5. Improve Project Browsing

Suggestions:
- Add filtering by type, stack, or role if the project volume supports it.
- Consider segmented controls or chips instead of a plain list flow.
- Add short metadata like year, role, and platform.
- Decide whether to emphasize `FeaturedProject` again or simplify toward one unified card system.

Why it matters:
- Project cards are better, but browsing is still mostly linear.

### 6. Make About / Experience / Skills More Editorial

Suggestions:
- Introduce better section headers and transitions between biography, education, work history, and skills.
- Use more deliberate timeline / milestone treatment in experience where appropriate.
- Add highlight modules such as:
  - principles I care about
  - selected outcomes
  - notable career moments
- Reframe skills as grouped capabilities, not just inventory.

Why it matters:
- These pages contain strong content, but the structure still reads closer to “portfolio resume” than “designed narrative.”

## Content and Voice

### 7. Reduce Casual UI Copy Where It Weakens Positioning

Suggestions:
- Remove or reduce emoji-heavy copy in core professional sections.
- Tighten headlines to sound more confident and specific.
- Replace generic recruiting language with sharper positioning around product UI, front-end systems, and implementation craft.

Why it matters:
- The design has become more premium; some copy still sounds more casual than the interface.

### 8. Strengthen Proof Elements

Suggestions:
- Add more concrete credibility signals:
  - selected companies
  - outcomes
  - years of experience
  - notable project metrics
  - references with stronger visual emphasis
- Turn these into visual proof modules instead of leaving them embedded in body copy.

Why it matters:
- Better proof will make the portfolio more persuasive without requiring more pages.

## Remaining Polish

### 9. Review Decorative Assets

Suggestions:
- Audit assets like `/dots.svg` and decide whether they still fit the direction.
- Replace decorative motifs that feel dated with subtler graphic devices where needed.
- Ensure portrait and project imagery follow a more consistent presentation style.

Why it matters:
- A few older decorative choices still stand out against the newer surface system.

## Suggested Execution Order

1. Redesign the home hero.
2. Improve homepage narrative flow.
3. Improve project browsing and metadata.
4. Make About / Experience / Skills more editorial.
5. Tighten content voice and proof modules.
6. Review and refine decorative assets.
