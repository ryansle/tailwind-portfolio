'use client';

// Components
import NextLink from 'next/link';

// Types
import type { Route } from '@/lib/types';

// Utilities
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type HeaderLinksProps = {
  routes: Route[];
};

const renderStyles = (path: string, href: string) => {
  const styles = 'rounded-full px-4 py-2 text-sm font-semibold tracking-wide';

  return clsx([
    styles,
    path === href && 'bg-teal-400/12 text-teal-300 ring-1 ring-teal-400/20',
    path !== href && 'text-slate-200 hover:bg-white/5 hover:text-white'
  ]);
};

const HeaderLinks = (props: HeaderLinksProps) => {
  const { routes } = props;

  const path = usePathname();

  return (
    <div className='flex items-center space-x-4'>
      <div className='hidden items-center space-x-2 xl:flex'>
        {routes.map((route: Route) => (
          <NextLink
            className={renderStyles(path, route.href)}
            href={route.href}
            key={route.text}
          >
            <span className='flex items-center gap-x-2'>
              {route.icon}
              {route.text}
            </span>
          </NextLink>
        ))}
      </div>
    </div>
  );
};

export { HeaderLinks };
