import type { Metadata } from 'next';

const siteName = 'Ryan Le';
const siteUrl = 'https://ryanle.dev';
const defaultTitle = 'UI Engineer building front-end systems and product UI';
const defaultDescription = 'Ryan Le is a UI Engineer based in New York, building front-end systems, product UI, and audience-facing experiences at CrowdStrike and beyond.';
const defaultOgImage = '/seo/home.png';
const defaultResolvedTitle = `${siteName} | ${defaultTitle}`;

type CreateMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
};

const defaultKeywords = [
  'Ryan Le',
  'UI Engineer',
  'front-end engineer',
  'front-end systems',
  'product UI',
  'React developer',
  'Next.js developer',
  'TypeScript developer',
  'design systems',
  'CrowdStrike',
  'Ryan Meetup',
];

const absoluteUrl = (path = '/') => new URL(path, siteUrl).toString();

const createPageMetadata = (options: CreateMetadataOptions = {}): Metadata => {
  const {
    title,
    description = defaultDescription,
    path = '/',
    image = defaultOgImage,
    keywords = [],
  } = options;

  const resolvedTitle = title ? `${title} | ${siteName}` : defaultResolvedTitle;
  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(image);

  return {
    title: title ?? undefined,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      url: canonical,
      title: resolvedTitle,
      description,
      siteName,
      locale: 'en_US',
      images: [
        {
          url: ogImage,
          width: 2056,
          height: 1160,
          alt: resolvedTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description,
      creator: '@ryansle',
      images: [ogImage],
    },
  };
};

const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultResolvedTitle,
    template: `%s | ${siteName}`,
  },
  applicationName: siteName,
  description: defaultDescription,
  authors: [{ name: 'Ryan Le', url: siteUrl }],
  creator: 'Ryan Le',
  publisher: 'Ryan Le',
  category: 'technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
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
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: defaultResolvedTitle,
    description: defaultDescription,
    siteName,
    locale: 'en_US',
    images: [
      {
        url: absoluteUrl(defaultOgImage),
        width: 2340,
        height: 1120,
        alt: `${siteName} portfolio homepage`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultResolvedTitle,
    description: defaultDescription,
    creator: '@ryansle',
    images: [absoluteUrl(defaultOgImage)],
  },
};

export {
  createPageMetadata,
  siteMetadata,
  siteName,
  siteUrl,
};
