// Utilities
import { pages } from '@/lib/pages';
import { absoluteUrl, siteName, siteUrl } from '@/lib/seo';
import { socials } from '@/lib/socials';
import { contactEmail } from '@/lib/constants';

// Types
import type { PageKey } from '@/lib/pages';

/**
 * JSON-LD describing who this site is about. Titles and descriptions tell Google
 * what a page says; this tells it who the page is *about*, which is what lets
 * "Ryan Le" resolve to a person rather than a string that happens to match.
 *
 * Copy is pulled from the page registry so the schema cannot drift from the
 * metadata built out of the same entries.
 */

/**
 * Stable @id values let nodes reference each other instead of repeating
 * themselves: the Person declared once in the root layout is the same entity
 * that /about and /contact point back at.
 */
const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;

const person = {
  '@type': 'Person',
  '@id': personId,
  name: siteName,
  alternateName: 'Ryan S. Le',
  url: siteUrl,
  image: absoluteUrl('/profile.png'),
  jobTitle: 'UI Engineer',
  email: `mailto:${contactEmail}`,
  worksFor: {
    '@type': 'Organization',
    name: 'CrowdStrike',
    url: 'https://www.crowdstrike.com/',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Nebraska-Lincoln',
    url: 'https://www.unl.edu/',
  },
  homeLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Brooklyn',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
  },
  knowsAbout: [
    'Front-end engineering',
    'Product UI',
    'Design systems',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Community building',
    'Event production',
  ],
  /**
   * The corroborating profiles. This is the single strongest input Google has
   * for tying the site to the same person it already knows from elsewhere, so it
   * reads from the same list the footer and contact page link to.
   */
  sameAs: socials.map((social) => social.url),
};

const website = {
  '@type': 'WebSite',
  '@id': websiteId,
  url: siteUrl,
  name: siteName,
  description: pages['/'].description,
  publisher: { '@id': personId },
  inLanguage: 'en-US',
};

/** Rendered once in the root layout, so every route carries it. */
const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [person, website],
};

type PageSchemaType = 'ProfilePage' | 'ContactPage';

/**
 * A typed node for the routes where the type says something a generic WebPage
 * does not. Both hang off the shared Person and WebSite by @id rather than
 * restating them.
 *
 * Breadcrumbs are deliberately absent: the site is flat, so every trail would be
 * "Home > Page". They start earning their keep once project detail pages exist.
 */
const pageSchema = (route: PageKey, type: PageSchemaType) => {
  const page = pages[route];
  const url = absoluteUrl(route);

  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#${type.toLowerCase()}`,
    url,
    name: page.title,
    description: page.description,
    isPartOf: { '@id': websiteId },
    inLanguage: 'en-US',
    // ProfilePage's subject is the person; a ContactPage is merely about them.
    ...(type === 'ProfilePage'
      ? { mainEntity: { '@id': personId } }
      : { about: { '@id': personId } }),
  };
};

export { siteSchema, pageSchema };
