# Content fetching and recovery

## Configuration

Live CMS reads require `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` (a Content Delivery API token). Set them in `.env.local` for development and in the deployment environment for builds and runtime. Rename the former `NEXT_PUBLIC_CONTENTFUL_SPACE_ID` and `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN` variables; there is no public-name fallback. Restart development or rebuild after changing configuration. Never commit credential values.

Both CMS modules import `server-only`, so Next.js rejects imports from Client Components. Configuration is validated when a live read starts, with missing variable names and setup instructions. Explicit fixture mode continues to work without credentials; live failures never switch to fixtures.

## Freshness

Home, skills, projects, and experience explicitly retain the 30-second ISR interval so published portfolio edits can appear promptly without rebuilding. Local-content routes no longer inherit a root interval and update on deployment. Route configuration uses literals because Next.js statically analyzes it.

Revalidation is request-driven, not a timer polling Contentful. After 30 seconds, an incoming request can trigger regeneration. A failed background regeneration can retain the last successful output; this interval is not a guarantee that content is at most 30 seconds old. See [Next.js ISR behavior](https://nextjs.org/docs/app/guides/incremental-static-regeneration).

## Failure and navigation

Independent home reads start together. CMS request failures and incomplete pagination throw; they never become an empty portfolio. Errors identify the content type and available HTTP status without retaining SDK request headers that may contain credentials.

Initial build failures still fail the build. On a request without usable cached output, `app/error.tsx` offers a server refresh and boundary reset, contact, and a resume download while retaining site navigation. `app/loading.tsx` supplies an accessible, reduced-motion-aware placeholder while route content streams; cached navigation may finish without showing it. Neither boundary forces routes to become dynamic.

Successful empty lists have explicit copy, including empty skill categories, toolkit highlights, testimonials, experience, featured projects, and project filters.

## Pagination

Live reads request 100 entries at a time and follow `total` using `skip`. Ordering preserves newest edits first and adds the entry ID as a tie-breaker. All pages must succeed before normalization and rendering. An unexpected empty page before `total` fails rather than silently truncating the list or looping forever.

Contentful offset pagination is not a snapshot: simultaneous publishing can shift entries between pages. This is appropriate for the current small, infrequently edited portfolio. Reconsider the strategy if bulk publishing becomes common; no extra repository or cache layer is needed for the four reads.
