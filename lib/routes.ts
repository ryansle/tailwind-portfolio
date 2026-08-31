// Components
import { AiFillHome as Home } from 'react-icons/ai';
import { IoPerson as Person } from 'react-icons/io5';
import { HiAtSymbol as Contact } from 'react-icons/hi';
import {
  MdWork as Work,
  MdCode as Code,
  MdLaptopMac as Mac,
} from 'react-icons/md';

// Types
import type { IconType } from 'react-icons';

type Route = {
  text: string;
  href: string;
  icon: IconType;
}

/**
 * The canonical list of pages. The header and the sitemap both read from here,
 * so adding a page is a one-line change rather than an edit in two files that
 * quietly drift apart.
 *
 * `icon` is the component itself rather than a rendered element: that keeps this
 * module free of JSX so the sitemap can import it, and lets each consumer size
 * and style the icon for its own context.
 */
const routes: Route[] = [
  { text: 'Home', href: '/', icon: Home },
  { text: 'About', href: '/about', icon: Person },
  { text: 'Experience', href: '/experience', icon: Work },
  { text: 'Skills', href: '/skills', icon: Code },
  { text: 'Projects', href: '/projects', icon: Mac },
  { text: 'Contact', href: '/contact', icon: Contact },
];

export { routes };
export type { Route };
