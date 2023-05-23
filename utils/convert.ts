
// Types
import type { ContentfulImage } from '@/lib/types';

const convertImageUrl = (object: ContentfulImage) => {
  const url = object.fields.file.url;

  return `https://${url.replace('//', '')}`;
};

export {
  convertImageUrl
};