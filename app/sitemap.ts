import type { MetadataRoute } from 'next';

import { siteUrl } from '@/lib/seo';

const routes = [
  '',
  '/about',
  '/experience',
  '/skills',
  '/projects',
  '/contact',
];

const sitemap = (): MetadataRoute.Sitemap =>
  routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

export default sitemap;
