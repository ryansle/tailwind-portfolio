// Types
import type { ContentfulImage, Experience, Skill } from '@/lib/types';

/**
 * Unpublishing or deleting an asset leaves its link unresolved, so an image
 * reference can arrive stripped of `fields` or missing altogether. Callers get
 * `null` back and skip the image rather than crash on a half-resolved link.
 */
const convertImageUrl = (object?: ContentfulImage) => {
  const url = object?.fields?.file?.url;

  if (!url) return null;

  // Contentful returns protocol-relative asset URLs (`//images.ctfassets.net/...`)
  return url.startsWith('//') ? `https:${url}` : url;
};

/**
 * Unpublishing or deleting a linked skill leaves the reference in place but
 * strips its `fields`, so every tech-stack render has to drop the holes rather
 * than trust the link resolved.
 */
const convertTechStack = (techStack?: Experience['techStack']): Skill[] =>
  (techStack ?? []).map((item) => item?.fields).filter((fields): fields is Skill => Boolean(fields));

const MONTHS = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december'
];

/**
 * Contentful only stores employment dates as the display string we render
 * ("September 2022 - Now"), so ordering the timeline means reading the start
 * month back out of it. Anything we can't parse returns 0 so it settles at the
 * bottom instead of jumping the queue.
 */
const convertStartDate = (datesEmployed?: string): number => {
  const [start = ''] = (datesEmployed ?? '').split(/[-\u2013\u2014]/);
  const match = /([a-z]+)?\s*(\d{4})/i.exec(start);

  if (!match) return 0;

  const [, month, year] = match;
  const monthIndex = month ? MONTHS.findIndex((name) => name.startsWith(month.toLowerCase())) : 0;

  return Date.UTC(Number(year), monthIndex === -1 ? 0 : monthIndex);
};

export {
  convertImageUrl,
  convertTechStack,
  convertStartDate
};
