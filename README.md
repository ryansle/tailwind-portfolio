# Ryan Le’s portfolio

[Live site: ryanle.dev](https://ryanle.dev) · [Source](https://github.com/ryansle/tailwind-portfolio)

A portfolio for my front-end engineering, selected projects, and community work. It gives prospective teammates and collaborators a way to explore my work and get in touch.

## Run an account-free demo

Use Node **22.14.0** (`nvm use` reads `.nvmrc`) and npm. The supported Node range is declared in `package.json`.

```sh
git clone https://github.com/ryansle/tailwind-portfolio.git
cd tailwind-portfolio
nvm use
npm ci
npm run dev:fixture
```

Open [localhost:3000](http://localhost:3000). No environment file or accounts are required. Alternatively, copy `.env.example` to `.env.local` and run `npm run dev`; the example explicitly enables fixture mode.

Fixture mode uses small, fictional CMS entries and local images from `data/fixtures.ts` and `public/fixtures/`. A banner identifies the demo. The contact form validates input and reports **“No email was sent or saved.”** It retains the input in the form without transmitting or persisting it. Site biography, community media, and other content committed to the repository remain visible. External links still lead to their normal destinations; analytics is disabled in fixture mode.

For a production demo:

```sh
npm run build:fixture
npm run start:fixture
```

`NEXT_PUBLIC_FIXTURE_MODE=true` is an explicit build-time switch shared by the server and browser. Rebuild when changing modes. The fixture commands override existing local environment settings; live CMS failures never silently switch to demo content.

## Commands and verification

| Command | Purpose |
| --- | --- |
| `npm ci` | Install the exact locked dependencies |
| `npm run dev` | Start development using `.env.local` |
| `npm run dev:fixture` | Start the account-free demo |
| `npm run build` / `npm start` | Build and serve the configured production site |
| `npm run lint` | Next.js and TypeScript ESLint rules; warnings fail |
| `npm run typecheck` | Generate Next route types and run strict TypeScript, including unused declarations |
| `npm test` | Focused component, data, and library behavior tests |
| `npm run test:browser` | Chromium tests against an existing fixture production build; starts its own server on port 3100 |
| `npm run verify` | Lint, typecheck, unit tests, fixture production build, then browser tests |

Install the browser once before verification:

```sh
npx playwright install chromium
npm run verify
```

On Linux, use `npx playwright install --with-deps chromium`. GitHub Actions runs `npm ci`, installs Chromium and its OS dependencies, then runs the same verification command without account credentials. Failure traces are uploaded as artifacts. Keep port 3100 free for the test server.

Tests protect prop/ref forwarding and field accessibility, CMS normalization and unresolved links, skill visibility/selection, and mocked EmailJS success/failure. The browser suite checks desktop/mobile navigation, filtering, screenshot dialog keyboard behavior and focus restoration, and demo submission. It does not send real email or depend on presentation snapshots.

## Live services

Copy `.env.example` to `.env.local`, set `NEXT_PUBLIC_FIXTURE_MODE=false`, and fill in:

| Variable | Use |
| --- | --- |
| `CONTENTFUL_SPACE_ID` | Contentful space containing the published content models |
| `CONTENTFUL_ACCESS_TOKEN` | Content Delivery API token; server-only, never a Management API token |
| `NEXT_PUBLIC_SERVICE_ID` | EmailJS service ID |
| `NEXT_PUBLIC_TEMPLATE_ID` | EmailJS template ID |
| `NEXT_PUBLIC_USER_ID` | EmailJS **public key** (the existing variable name is retained) |
| `NEXT_PUBLIC_GSC_TOKEN` | Optional Search Console HTML verification token |

Create and publish the models and entries described in [the CMS model reference](docs/CONTENTFUL_MODEL.md). The client uses Contentful’s default `master` environment and the space’s default locale. Migrate existing deployments from `NEXT_PUBLIC_CONTENTFUL_SPACE_ID` and `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN` to the server-only names above; the old public names are no longer read.

Configure the EmailJS template with `firstName`, `lastName`, `email`, `subject`, and `message`; set its recipient to your own mailbox and reply-to to `{{email}}`. Configure the service and allowed origins in your EmailJS account. The browser identifiers/public key are intentionally public; do not substitute a private key. Missing configuration or provider errors keep the draft and display failure feedback.

Set production environment variables in your hosting provider before building. Keep actual values out of commits: `.env*` files are ignored except for the blank `.env.example`.

## Architecture and choices

- **Next.js 16 App Router, React 19, TypeScript 6:** server components fetch content; small client components own forms, filtering, menus, and dialogs. CMS-backed pages revalidate every 30 seconds.
- **Contentful:** editable portfolio content flows through `data/fetch.ts` and the runtime normalization boundary in `data/normalize.ts`. Optional/unresolved assets are omitted, invalid records are dropped, and absent collections become empty arrays. Fixtures exercise the same boundary.
- **Tailwind CSS 4 and shared primitives:** common controls keep styling, native prop forwarding, and accessibility consistent. Headless UI supplies keyboard/focus behavior; Framer Motion handles selected transitions.
- **EmailJS:** a browser integration suits this small contact form without a custom mail server. Demo mode bypasses the provider entirely.
- **Local Inter font and image assets:** the production build does not fetch fonts from Google. Next Image handles responsive media; CMS images use the configured Contentful hosts.
- **Vercel:** hosts the live site, with analytics enabled for live mode. SEO metadata and structured data are maintained in `lib/seo.ts`, `lib/pages.ts`, and `lib/schema.ts`.
