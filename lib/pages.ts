import { AiFillHome as Home } from 'react-icons/ai';
import { IoPerson as Person } from 'react-icons/io5';
import { HiAtSymbol as Contact } from 'react-icons/hi';
import {
  MdWork as Work,
  MdCode as Code,
  MdLaptopMac as Mac,
  MdOutlineRocketLaunch as Initiative,
} from 'react-icons/md';

import type { IconType } from 'react-icons';
import type { MetadataRoute } from 'next';

type Page = {
  /** Nav link text. */
  text: string;
  icon: IconType;
  /**
   * The complete <title>, exactly as it appears in a search result. Written out
   * in full rather than composed from a template so the whole SERP line is
   * visible here. Keep it under 60 characters or Google truncates it.
   */
  title: string;
  /** The meta description. Aim for 140-160 characters. */
  description: string;
  /** 1200x630 social card, relative to /public. */
  ogImage: string;
  /** What the card actually depicts - not a restatement of the title. */
  ogImageAlt: string;
  /**
   * Bump this when the page's content genuinely changes. It feeds the sitemap's
   * lastmod, which is worthless if it always reports "just now" - crawlers stop
   * trusting the signal and it no longer earns you a faster recrawl.
   */
  updated: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
};

/**
 * The single source of truth for every indexable page. Metadata, the sitemap and
 * the header nav all derive from this object, so a page cannot end up in the nav
 * but missing from the sitemap, or carry a canonical that disagrees with the URL
 * the sitemap advertises.
 *
 * Insertion order is nav order.
 *
 * Icons are the components themselves rather than rendered elements: that keeps
 * this module free of JSX so the sitemap can import it, and lets each consumer
 * size and style the icon for its own context.
 */
const pages = {
  '/': {
    text: 'Home',
    icon: Home,
    title: 'Ryan Le | UI Engineer, Organizer, and Builder',
    description: 'Ryan Le is a Brooklyn-based UI engineer and organizer building thoughtful digital products, live experiences, and communities people return to.',
    ogImage: '/seo/home.png',
    ogImageAlt: 'Ryan Le, Web Engineer and Community Builder, Brooklyn NY',
    updated: '2026-09-05',
    priority: 1,
    changeFrequency: 'weekly',
  },
  '/about': {
    text: 'About',
    icon: Person,
    title: 'About | Ryan Le',
    description: 'Meet Ryan Le, a Brooklyn-based UI engineer, organizer, and Ryan Meetup co-founder working across software, events, creative operations, and community.',
    ogImage: '/seo/about.png',
    ogImageAlt: 'About Ryan Le - background, education, and community work',
    updated: '2026-09-05',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  '/experience': {
    text: 'Experience',
    icon: Work,
    title: 'Experience | Ryan Le',
    description: 'Explore Ryan Le’s experience across product engineering, community initiatives, creative operations, and events at CrowdStrike, Ryan Meetup, and beyond.',
    ogImage: '/seo/experience.png',
    ogImageAlt: 'Ryan Le’s work history across CrowdStrike, American Express, and agency teams',
    updated: '2026-09-05',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  '/skills': {
    text: 'Skills',
    icon: Code,
    title: 'Skills | Ryan Le',
    description: 'See how Ryan Le combines agent-assisted development with front-end expertise, product UI systems, React, Next.js, TypeScript, Tailwind, and creative operations.',
    ogImage: '/seo/skills.png',
    ogImageAlt: 'Ryan Le’s agent-assisted development, front-end engineering, and creative capabilities',
    updated: '2026-09-05',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  '/initiatives': {
    text: 'Initiatives',
    icon: Initiative,
    title: 'Initiatives | Ryan Le',
    description: 'See how Ryan Le helps bring ideas to life through Ryan Meetup, CrowdNeighborhoods, event programming, creative operations, storytelling, and software.',
    ogImage: '/seo/initiatives.png',
    ogImageAlt: 'Ryan Le’s community initiatives, events, and creative operating work',
    updated: '2026-09-05',
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  '/projects': {
    text: 'Projects',
    icon: Mac,
    title: 'Projects | Ryan Le',
    description: 'Browse projects by Ryan Le across product UI, front-end implementation, engineering delivery, and creative work, with the stack and role behind each one.',
    ogImage: '/seo/projects.png',
    ogImageAlt: 'Selected product, engineering, and creative projects by Ryan Le',
    updated: '2026-08-31',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  '/contact': {
    text: 'Contact',
    icon: Contact,
    title: 'Contact | Ryan Le',
    description: 'Contact Ryan Le about product engineering, community initiatives, event programming, creative collaborations, freelance work, or full-time opportunities.',
    ogImage: '/seo/contact.png',
    ogImageAlt: 'Get in touch with Ryan Le about freelance or full-time work',
    updated: '2026-09-05',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
} satisfies Record<string, Page>;

/** Every valid route. `metadataFor('/abuot')` is a compile error, not a 404. */
type PageKey = keyof typeof pages;

type Route = {
  text: string;
  href: PageKey;
  icon: IconType;
};

/** The nav's view of the registry. */
const routes: Route[] = (Object.keys(pages) as PageKey[]).map((href) => ({
  href,
  text: pages[href].text,
  icon: pages[href].icon,
}));

export { pages, routes };
export type { Page, PageKey, Route };
