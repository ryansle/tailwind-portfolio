import type { MetadataRoute } from 'next';

import { siteUrl } from '@/lib/seo';
import { routes } from '@/lib/routes';

const sitemap = (): MetadataRoute.Sitemap =>
  routes.map(({ href }) => {
    const isHome = href === '/';

    return {
      url: isHome ? siteUrl : `${siteUrl}${href}`,
      lastModified: new Date(),
      changeFrequency: isHome ? 'weekly' : 'monthly',
      priority: isHome ? 1 : 0.8,
    };
  });

export default sitemap;
