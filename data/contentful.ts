import 'server-only';

import * as contentful from 'contentful';

/** Initialize only in live mode; fixture builds never need CMS credentials. */
export const getContentfulClient = () => {
  const space = process.env.CONTENTFUL_SPACE_ID?.trim();
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN?.trim();

  if (!space || !accessToken) {
    const missing = [!space && 'CONTENTFUL_SPACE_ID', !accessToken && 'CONTENTFUL_ACCESS_TOKEN'].filter(Boolean);
    throw new Error(`Missing Contentful configuration: ${missing.join(', ')}. Set these server-only variables in .env.local or your deployment environment, then restart or rebuild. Use a Content Delivery API token. NEXT_PUBLIC_CONTENTFUL_* names are no longer read. For the account-free demo, explicitly set NEXT_PUBLIC_FIXTURE_MODE=true.`);
  }

  return contentful.createClient({ space, accessToken });
};
