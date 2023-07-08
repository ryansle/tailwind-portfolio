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
  const styles = 'font-semibold tracking-wide p-2 transition ease-in-out duration-300 hover:bg-gray-900 hover:scale-105';

  return clsx([
    styles,
    path === href && 'border-b-2 border-teal-500 text-teal-500 rounded-t',
    path !== href && 'text-white rounded'
  ]);
};

const HeaderLinks = (props: HeaderLinksProps) => {
  const { routes } = props;

  const path = usePathname();

  return (
    <div className='space-x-4 flex items-center'>
      <div className='hidden xl:block space-x-4 flex items-center'>
        {routes.map((route: Route) => (
          <button
            className={renderStyles(path, route.href)}
            key={route.text}
          >
            <NextLink
              className='flex items-center gap-x-2'
              href={route.href}
            >
              {route.icon}
              {route.text}
            </NextLink>
          </button>
        ))}
      </div>
    </div>
  );
};

export { HeaderLinks };
