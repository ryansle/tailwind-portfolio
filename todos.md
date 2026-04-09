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
