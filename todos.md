# UI Modernization TODOs

## Recommended Direction

Modernize the app by moving away from one-off styling and toward a more cohesive visual system:

- stronger typography and brand voice
- layered surfaces instead of a single flat dark gradient
- clearer spacing, hierarchy, and content rhythm
- more premium motion and interaction states
- more intentional reuse of visual patterns across pages

## Highest-Priority Improvements

### 2. Upgrade Typography

Current issue:
- The app uses Inter globally in [app/layout.tsx](app/layout.tsx), which is clean but generic.
- Cooper exists in the project but is mostly underused as a signature brand element.

Suggestions:
- Pair a sharper UI sans with more deliberate use of Cooper for editorial emphasis.
- Tighten heading scale, line height, and max text widths for better rhythm.
- Define typography roles such as hero title, section title, eyebrow, body, caption, and metadata.
- Reduce overuse of `tracking-wider` when it weakens readability.

Why it matters:
- Typography is the fastest way to make the portfolio feel more current and less template-like.

### 3. Replace the Flat Background With Layered Surfaces

Current issue:
- The main shell in [components/navigation/Layout.tsx](components/navigation/Layout.tsx) uses a simple dark gradient that makes all sections sit on the same plane.

Suggestions:
- Add a more intentional page atmosphere with radial glows, subtle texture, or a light grid/noise layer.
- Introduce elevated surfaces for cards, forms, featured modules, and callouts.
- Differentiate page chrome from content areas with soft contrast shifts rather than pure borders everywhere.
- Use a restrained lighting model: soft shadows, faint inner borders, and low-contrast highlights.

Why it matters:
- This creates depth and gives the site a more modern editorial/product feel.

## Shared UI System Opportunities

### 4. Create Reusable Section Patterns

Suggestions:
- Standardize a section intro pattern with eyebrow, title, supporting copy, and optional action.
- Standardize dividers so they feel intentional rather than purely mechanical.
- Create a small set of reusable card variants:
  - media card
  - project card
  - profile/info card
  - form card
  - testimonial card

### 6. Improve Responsive Rhythm

Suggestions:
- Review section spacing on tablet and large desktop breakpoints.
- Reduce dependence on very large custom horizontal padding jumps.
- Use more consistent max-width containers for text-heavy sections.
- Make dense content blocks breathe more on mobile.

## Page-Specific Suggestions

### Home Page

#### 7. Redesign the Hero

Current issue:
- The hero in [components/home/Hero.tsx](components/home/Hero.tsx) has a solid layout, but the visual language still leans on emoji, plain stacked copy, and a straightforward circular portrait.

Suggestions:
- Rewrite the opening into a tighter, more confident value proposition.
- Turn the personal bullet list into compact profile stats or branded mini-cards.
- Frame the portrait with a more intentional composition:
  - soft glow
  - layered backdrop
  - subtle shape treatment
  - less reliance on the decorative dots image
- Convert the skill icons row into a curated “current stack” module with stronger grouping and labels.
- Add one primary CTA and one secondary CTA with distinct treatments.

#### 8. Increase Home Page Narrative Flow

Suggestions:
- Make the homepage feel like a story:
  - hero
  - proof/experience snapshot
  - selected work
  - testimonials
  - contact CTA
- Consider pulling one featured project or experience block onto the homepage to create more momentum.

### Navigation

#### 9. Modernize the Header

Current issue:
- The header in [components/navigation/Header.tsx](components/navigation/Header.tsx) is functional but visually rigid: solid black, border-heavy, and icon-heavy on desktop.

Suggestions:
- Move to a translucent sticky header with backdrop blur.
- Reduce icon reliance on desktop nav and emphasize cleaner labels.
- Improve active states with pills, underline bars, or subtle background chips.
- Refine the logo lockup so it feels more like a brand signature.
- Add scroll-state changes such as compacting or increasing background opacity after scrolling.

### Projects

#### 10. Upgrade Project Cards

Current issue:
- The cards in [components/projects/ProjectCard.tsx](components/projects/ProjectCard.tsx) are clean but generic and mostly rely on border plus scale-on-hover.

Suggestions:
- Use stronger image treatments with gradient overlays and better crop consistency.
- Improve hierarchy between title, subtitle, stack, and summary.
- Treat external links as intentional CTAs rather than just icons.
- Add hover states based on depth, lighting, and media movement rather than only scale.
- Create a featured-card variant that breaks the grid rhythm.

#### 11. Improve Project Browsing

Suggestions:
- Add filtering by type, stack, or role if the project volume supports it.
- Consider a segmented control or pill filters instead of a plain list layout.
- Add short project metadata such as year, role, and platform.

### About / Experience / Skills

#### 12. Make Informational Pages More Editorial

Suggestions:
- Introduce better section headers and visual transitions between biography, education, work history, and skills.
- Use timeline or milestone layouts for experience instead of simple stacked sections where appropriate.
- Add pull quotes, highlights, or “principles I care about” blocks to break up text.
- Reframe skills as grouped capabilities rather than just a technical inventory.

### Contact

#### 13. Refresh the Contact Experience

Current issue:
- The contact page and form feel older than the rest of the app visually.

Suggestions:
- Place the form in a dedicated elevated card or split layout.
- Add a companion panel with email, response expectations, availability, or social links.
- Improve input focus states, surface contrast, and button emphasis.
- Make validation messaging quieter and more integrated into the field system.
- Ensure loading, success, and disabled states feel consistent with the rest of the app.

## Content and Voice Improvements

### 14. Reduce Casual UI Copy Where It Weakens Positioning

Suggestions:
- Remove or reduce emoji-heavy copy in core professional sections.
- Tighten headlines to sound more confident and specific.
- Replace generic recruiting language with sharper positioning around product, UI engineering, systems thinking, and front-end craft.

### 15. Strengthen Proof Elements

Suggestions:
- Add more concrete signals of credibility:
  - selected companies
  - outcomes
  - years of experience
  - notable project metrics
  - testimonials with stronger visual emphasis
- Use these as visual modules, not just text paragraphs.

## Accessibility and Interaction Quality

### 16. Improve Focus and Contrast States

Suggestions:
- Standardize visible focus rings across links, buttons, and form inputs.
- Verify muted text still meets contrast expectations on dark surfaces.
- Ensure hover-only affordances also work for keyboard and touch users.

### 17. Make Interactive Elements Feel More Intentional

Suggestions:
- Standardize button hierarchy:
  - primary
  - secondary
  - ghost
  - icon-only
- Standardize chips/tags/badges used across skills, tech stacks, and metadata.
- Make clickable cards clearly interactive with pointer, focus, and hover behavior.

## Technical Cleanup That Supports Better UI

### 18. Consolidate Common Layout Utilities

Suggestions:
- Reduce repeated container padding classes across header, footer, and page sections.
- Centralize container width logic and section spacing rules.
- Add helper classes for page titles, section shells, and content widths.

### 19. Review Decorative Assets

Suggestions:
- Audit assets like `/dots.svg` and decide whether they still fit the intended visual direction.
- Replace decorative motifs that feel dated with more subtle graphic devices.
- Ensure portrait and project imagery have a more consistent presentation style.

## Suggested Execution Order

1. Introduce design tokens and shared surface/button/card styles.
2. Update typography and global layout rhythm.
3. Redesign header and page shell.
4. Redesign the home hero and homepage flow.
5. Upgrade project cards and project listing layout.
6. Refresh the contact page and form surfaces.
7. Improve about, experience, and skills with stronger editorial structure.
8. Polish motion, focus states, and responsive consistency.

## Best First Pass If We Want Immediate Visual Impact

If only one pass is implemented first, focus on:

- global tokens in `globals.css`
- typography in `layout.tsx`
- page shell and header
- homepage hero
- project cards

That sequence will produce the biggest perceived quality jump with the least wasted effort.
