import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { pages } from '@/lib/pages';

import type { Metadata, Viewport } from 'next';
import type { PageKey } from '@/lib/pages';

const siteName = 'Ryan Le';
const siteUrl = 'https://ryanle.dev';
const twitterHandle = '@ryansle';

/**
 * The home entry doubles as the site-wide default, so there is exactly one place
 * the tagline and description are written.
 */
const home = pages['/'];

const absoluteUrl = (path = '/') => new URL(path, siteUrl).toString();

/**
 * Builds a page's metadata from its registry entry. Pages pass their own route
 * and nothing else, so a title, canonical and social card can never drift apart
 * or point at a URL the page does not actually live at.
 */
const metadataFor = (route: PageKey): Metadata => {
  const page = pages[route];
  const canonical = absoluteUrl(route);
  const ogImage = absoluteUrl(page.ogImage);

  return {
    // `absolute` opts out of the layout's `%s | Ryan Le` template: registry
    // titles are already complete.
    title: { absolute: page.title },
    description: page.description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      url: canonical,
      title: page.title,
      description: page.description,
      siteName,
      locale: 'en_US',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: page.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      creator: twitterHandle,
      images: [
        {
          url: ogImage,
          alt: page.ogImageAlt,
        },
      ],
    },
  };
};

/**
 * Root layout metadata. Everything here is inherited by pages that do not set
 * the field themselves, so site-wide values (icons, robots, authorship) are
 * declared once rather than repeated per route.
 */
const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: home.title,
    // Applies only to routes outside the registry, which set a bare string.
    template: `%s | ${siteName}`,
  },
  description: home.description,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: 'technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    // The SVG is theme-adaptive and wins wherever it is supported; the .ico is
    // the fallback for browsers that do not take SVG favicons.
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  // Set NEXT_PUBLIC_GSC_TOKEN to the value Search Console gives you. Until then
  // this stays undefined and Next omits the tag entirely.
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_TOKEN,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // Fallback social card for any route that does not build its own. Registry
  // pages overwrite all of this with `metadataFor`.
  openGraph: {
    type: 'website',
    url: absoluteUrl('/'),
    title: home.title,
    description: home.description,
    siteName,
    locale: 'en_US',
    images: [
      {
        url: absoluteUrl(home.ogImage),
        width: 1200,
        height: 630,
        alt: home.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: home.title,
    description: home.description,
    creator: twitterHandle,
    images: [
      {
        url: absoluteUrl(home.ogImage),
        alt: home.ogImageAlt,
      },
    ],
  },
};

/**
 * `theme-color` previously lived only in site.webmanifest, so browsers never saw
 * it on a normal page load. Next requires it in a separate `viewport` export.
 */
const siteViewport: Viewport = {
  themeColor: '#050816',
  colorScheme: 'dark',
};

const TITLE_MAX = 60;
const DESCRIPTION_MIN = 140;
const DESCRIPTION_MAX = 160;

/**
 * Length limits are only useful if something checks them. This runs in `next
 * dev` only - the build forks a worker per page and would print the same list
 * five times - and warns rather than throws, since an over-long description is
 * a copy problem, not a reason to fail a deploy.
 */
if (process.env.NODE_ENV === 'development') {
  const entries = Object.entries(pages);

  // A card reused across routes is almost always an oversight rather than a
  // choice, so count them up front and flag every route sharing one.
  const ogImageUsage = entries.reduce<Record<string, string[]>>((usage, [route, page]) => {
    usage[page.ogImage] = [...(usage[page.ogImage] ?? []), route];

    return usage;
  }, {});

  const warnings = entries.flatMap(([route, page]) => {
    const issues: string[] = [];

    if (page.title.length > TITLE_MAX) {
      issues.push(`title is ${page.title.length} chars (max ${TITLE_MAX}) - Google will truncate it`);
    }

    if (page.description.length < DESCRIPTION_MIN) {
      issues.push(`description is ${page.description.length} chars (aim for ${DESCRIPTION_MIN}-${DESCRIPTION_MAX}) - wasting snippet space`);
    }

    if (page.description.length > DESCRIPTION_MAX) {
      issues.push(`description is ${page.description.length} chars (aim for ${DESCRIPTION_MIN}-${DESCRIPTION_MAX}) - will be cut off`);
    }

    if (!existsSync(join(process.cwd(), 'public', page.ogImage))) {
      issues.push(`ogImage ${page.ogImage} does not exist in public/ - the card will 404`);
    }

    const sharedWith = (ogImageUsage[page.ogImage] ?? []).filter((other) => other !== route);

    if (sharedWith.length > 0) {
      issues.push(`ogImage ${page.ogImage} is also used by ${sharedWith.join(', ')}`);
    }

    return issues.map((issue) => `  ${route} - ${issue}`);
  });

  if (warnings.length > 0) {
    console.warn(`\n[seo] ${warnings.length} registry warning(s) in lib/pages.ts:\n${warnings.join('\n')}\n`);
  }
}

export {
  metadataFor,
  siteMetadata,
  siteViewport,
  absoluteUrl,
  siteName,
  siteUrl,
};
