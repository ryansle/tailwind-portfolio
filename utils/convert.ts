// Types
import type { ContentfulImage } from '@/lib/types';

const convertImageUrl = (object: ContentfulImage) => {
  const url = object.fields.file.url;

  // Contentful returns protocol-relative asset URLs (`//images.ctfassets.net/...`)
  return url.startsWith('//') ? `https:${url}` : url;
};

export {
  convertImageUrl
};
