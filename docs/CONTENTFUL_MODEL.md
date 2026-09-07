# Contentful model reference

This is the field contract consumed by the portfolio, not a private content export. Fixture mode requires none of this setup. For live mode, create the following content types with these exact IDs in the `master` environment, add entries in the default locale, and publish entries and linked assets. Use a Content Delivery API key for that space.

`Short text` means Symbol, `Long text` means Text (plain text, not Rich Text), `List of text` means Array of Symbol, and `Asset` means a single Media link. Fields are not localized by the app. The CMS may localize them, but requests use its default locale.

| Content type ID | Required fields | Optional fields |
| --- | --- | --- |
| `skills` | `technology` (Short text); `type` (Short text, enum `web`, `creative`) | `icon` (Asset); `confidence` (Integer); `radii`, `visibility`, `primary` (Boolean); `uses` (Long text); `experiences` (List of text) |
| `projects` | `title` (Short text); `category` (Short text, enum `Professional`, `Personal`, `Freelance`) | `subtitle` (Short text); `summary` (Long text); `image` (Asset); `github`, `url` (Short text URL); `techStack` (many Entry references restricted to `skills`); `featured` (Boolean) |
| `experience` | `company`, `title` (Short text) | `datesEmployed` (Short text); `summary`, `header` (Long text); `image` (Asset); `responsibilities` (List of text); `techStack` (many Entry references restricted to `skills`); `companyUrl` (Short text URL) |
| `testimonies` | `name` (Short text); `testimony` (Long text) | `jobTitle` (Short text); `avatar` (Asset); `linkedinUrl`, `email` (Short text) |

Set `visibility=true` to publish a skill on the home/skills pages. `primary=true` selects the home hero subset but does not override visibility. Published skills sort primary first, then alphabetically. A skill with no resolved icon remains available to text layouts.

Use `Month YYYY - Month YYYY` or `Month YYYY - Now` for `datesEmployed` (for example, `January 2023 - Now`). The timeline sorts by the parsed start date descending; unparseable dates sort last. Projects marked `featured` remain above the category filter; the filter applies to additional projects.

Normalization drops records lacking the required fields above, ignores unresolved linked skills/assets, defaults missing text to empty strings and collections to empty arrays, and treats missing booleans as false. A Contentful request/configuration error is surfaced; it never substitutes fixtures. See `data/normalize.ts` and `tests/unit/cms.test.ts` for executable examples.

Images should use Contentful’s image CDN. Publish linked skills and assets as well as parent entries so the Delivery API can resolve them. The fetch layer paginates in batches of 100 and rejects incomplete responses rather than publishing partial content.
