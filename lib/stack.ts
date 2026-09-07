import {
  SiNextdotjs as NextJs,
  SiReact as ReactLogo,
  SiTypescript as TypeScript,
  SiTailwindcss as Tailwind,
  SiFramer as FramerMotion,
  SiContentful as Contentful,
  SiVercel as Vercel,
} from 'react-icons/si';

import type { IconType } from 'react-icons';

type Technology = {
  name: string;
  icon: IconType;
  url: string;
  /**
   * The brand mark's color. Several of these are lightened from the official
   * hex, which is tuned for white pages - Framer's #0055FF and Contentful's
   * #2478CC both disappear into a dark footer at this size.
   */
  color: string;
};

/**
 * What this site actually runs on, for the footer colophon.
 *
 * Deliberately version-free. The dependencies move often enough that a hardcoded
 * "Next.js 14" would go stale between upgrades, and a wrong number reads worse
 * than no number. The icons can only live in code, so the list does too.
 */
const stack: Technology[] = [
  { name: 'Next.js', icon: NextJs, url: 'https://nextjs.org/', color: '#ffffff' },
  { name: 'React', icon: ReactLogo, url: 'https://react.dev/', color: '#61dafb' },
  { name: 'TypeScript', icon: TypeScript, url: 'https://www.typescriptlang.org/', color: '#4b93e7' },
  { name: 'Tailwind CSS', icon: Tailwind, url: 'https://tailwindcss.com/', color: '#38bdf8' },
  { name: 'Framer Motion', icon: FramerMotion, url: 'https://www.framer.com/motion/', color: '#7b95ff' },
  { name: 'Contentful', icon: Contentful, url: 'https://www.contentful.com/', color: '#4aa3e8' },
  { name: 'Vercel', icon: Vercel, url: 'https://vercel.com/', color: '#ffffff' },
];

/** This site's own source, linked from the colophon. */
const repository = 'https://github.com/ryansle/tailwind-portfolio';

export { stack, repository };
export type { Technology };
