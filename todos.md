# Portfolio Improvement TODOs

This file tracks the next set of meaningful UI, UX, and content improvements based on the app's current state.

Maintenance note:
- When a task is completed, remove it or rewrite it so this file always reflects the remaining work rather than project history.

## Highest Priority

### 1. Finish Unifying Page Intros

Current state:
- `about`, `experience`, `skills`, and `projects` are closer than before, but section intro widths and follow-on spacing still vary.

Next improvements:
- Standardize page intro composition across all top-level routes:
  - eyebrow
  - title
  - subtitle
  - optional supporting module
- Decide on one default intro width for:
  - page-level intros
  - section-level intros
- Audit the spacing between intro blocks and first content sections on every main route.

Why it matters:
- The app is visually stronger when pages feel like they belong to the same editorial system, not just the same color palette.

### 2. Refine Header and Footer Framing

Current state:
- Header and footer widths are more aligned now, but the chrome still needs a final polish pass against the page body.

Next improvements:
- Verify header/footer width balance against the page container at all breakpoints.
- Check whether the fixed header height and page top padding feel equally good on:
  - desktop
  - tablet
  - mobile
- Tighten navigation spacing so the header feels deliberate rather than just wide.
- Consider whether the footer needs a slightly clearer internal hierarchy now that it frames the site more strongly.

Why it matters:
- The outer chrome is now a bigger part of the experience, so small misalignments are more noticeable.

## Page-Level Work

### 3. Home Page Needs a More Intentional Story Arc

Current state:
- The homepage looks better than earlier versions, but it still reads more like a set of sections than a persuasive narrative.

Next improvements:
- Re-sequence the homepage so it feels like:
  - introduction
  - proof
  - selected work
  - references
  - contact
- Pull one stronger proof module closer to the top.
- Tighten the hero so the first screen communicates:
  - role
  - specialty
  - credibility
  - next action

Why it matters:
- This is still the highest-leverage page in the portfolio.

### 4. About Page Could Use Stronger Visual Proof

Current state:
- The about page has solid writing and structure, but some of the strongest credibility signals are still embedded in paragraphs.

Next improvements:
- Turn key biography proof points into more visual modules.
- Consider one compact stats/proof strip for:
  - years in front-end work
  - notable companies
  - Ryan Meetup scale
  - early Terraria contribution
- Review whether the portrait section and “notable career moments” block feel equally weighted.

Why it matters:
- The page is strong on personality and values; it can still do more with proof.

### 5. Experience Page Should Read More Like a Career Narrative

Current state:
- The timeline is cleaner, and the group separation is better, but the page could still do more to frame progression.

Next improvements:
- Improve the scannability of each experience entry:
  - title
  - company
  - time period
  - one-line professional framing
- Revisit whether the collapsible grouping is the right final interaction model.
- Consider surfacing 1 to 2 top proof signals above the timeline:
  - current role
  - major companies
  - strongest throughline

Why it matters:
- The page is informative, but it can feel like a record rather than a narrative.

### 6. Skills Page Still Needs a Better “Capability” Layer

Current state:
- The page structure is stronger, but it still leans heavily on tables.

Next improvements:
- Make the top capability cards do more explanatory work.
- Decide whether the skill tables should remain the primary UI or become supporting detail under stronger capability sections.
- Consider adding compact “best at” or “often used for” modules above the tables.
- Review table density on tablet and mobile.

Why it matters:
- Tables communicate inventory well, but not always judgment or differentiation.

### 7. Projects Page Needs Final Interaction Polish

Current state:
- Featured projects are much stronger, and the lower project area now has filters and variable-height cards.

Next improvements:
- Review the masonry/filter section for:
  - animation quality
  - filter discoverability
  - card density
  - image consistency
- Consider adding a small amount of metadata to project cards:
  - year
  - role
  - platform
- Verify the featured project cards feel equally strong when image height and content length vary.

Why it matters:
- This page is close, but it is now one of the most complex interaction surfaces in the portfolio.

### 8. Ryan Meetup Content Should Be Reduced to a Clean Supporting Role

Current state:
- Ryan Meetup is better positioned as supporting proof instead of a parallel sub-site, but some remnants of the older approach still exist.

Next improvements:
- Remove or archive any unused Ryan Meetup route/component code that no longer serves the portfolio.
- Decide which Ryan Meetup moments belong:
  - on `about`
  - on `skills`
  - on `experience`
- Keep the professional framing sharp:
  - product
  - growth
  - operations
  - creative direction

Why it matters:
- Ryan Meetup is valuable proof, but it should support the portfolio rather than dominate it.

## Shared UI System Work

### 9. Standardize Section Patterns

Current state:
- Several pages now use similar sections, but the implementations are still page-specific.

Next improvements:
- Create reusable section conventions for:
  - intro blocks
  - section headers
  - content panels
  - proof modules
  - media cards
- Audit whether `section-panel`, `subtle-panel`, and `ui-card` are being used consistently or redundantly.

Why it matters:
- Shared patterns make the UI feel more composed and make future edits much cheaper.

### 10. Tighten Responsive Behavior

Current state:
- The site works responsively, but several denser pages still need breakpoint-level review.

Next improvements:
- Audit tablet layouts in particular for:
  - projects
  - skills tables
  - experience timeline
  - about page split sections
- Check where text blocks become too wide or too narrow.
- Look for places where controls wrap awkwardly:
  - filter chips
  - badges
  - card actions

Why it matters:
- Most remaining polish issues are now responsive rhythm issues rather than raw layout problems.

## Content and Positioning

### 11. Tighten Professional Copy Across the Site

Current state:
- The design direction is stronger than some of the copy.

Next improvements:
- Reduce repeated phrases across pages.
- Make value propositions more specific around:
  - front-end systems
  - implementation quality
  - product UI
  - creative operations
- Cut lines that explain too much without adding proof.

Why it matters:
- Stronger copy will make the portfolio feel more senior without requiring more sections.

### 12. Surface More Concrete Proof

Current state:
- A lot of strong proof exists, but it is still spread out and sometimes buried.

Next improvements:
- Add more visible proof where appropriate:
  - company names
  - shipped product surfaces
  - project outcomes
  - event scale
  - notable references
- Prefer compact proof modules over long explanatory text.

Why it matters:
- The portfolio is already visually polished enough that the next big gain comes from stronger credibility signals.

## Suggested Execution Order

1. Finish unifying page intros and section widths.
2. Refine header/footer framing and responsive spacing.
3. Improve homepage story flow.
4. Tighten projects interaction polish.
5. Rework the skills page to emphasize capabilities over inventory.
6. Strengthen proof modules across about and experience.
7. Remove or simplify leftover Ryan Meetup-specific portfolio code.
