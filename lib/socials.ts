// Components
import {
  FaLinkedin as LinkedIn,
  FaGithub as GitHub,
} from 'react-icons/fa6';

// Types
import type { IconType } from 'react-icons';

type SocialPlatform = 'LinkedIn' | 'GitHub';

type Social = {
  platform: SocialPlatform;
  url: string;
}

/**
 * The canonical social links. The icons can only live in code, so the list lives
 * here too rather than half in Contentful.
 */
const socials: Social[] = [
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/ryansle/' },
  { platform: 'GitHub', url: 'https://github.com/ryansle' },
];

const socialIcons: Record<SocialPlatform, IconType> = {
  LinkedIn,
  GitHub,
};

export { socials, socialIcons };
export type { Social, SocialPlatform };
