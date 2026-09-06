import type { MetadataRoute } from 'next';

import { pages } from '@/lib/pages';
import { absoluteUrl } from '@/lib/seo';

/**
 * Derived entirely from the page registry, so a new route reaches the sitemap
 * the moment it reaches the nav. `absoluteUrl` is the same helper the canonical
 * tags use - the two can no longer advertise different URLs for one page.
 */
const sitemap = (): MetadataRoute.Sitemap =>
  Object.entries(pages).map(([href, page]) => ({
    url: absoluteUrl(href),
    lastModified: new Date(page.updated),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

export default sitemap;
