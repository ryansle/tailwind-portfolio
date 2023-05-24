'use client';

// Components
import NextLink from 'next/link';

// Types
import type { ReactNode } from 'react';

// Utilities
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type Route = {
  text: string;
  href: string;
  icon: ReactNode;
};

type HeaderLinksProps = {
  routes: Route[];
};

const renderStyles = (path: string, href: string) => {
  const styles = 'font-semibold tracking-wide hover:bg-gray-900 p-2';

  return clsx([
    styles,
    path === href && 'border-b-2 border-teal-500 text-teal-500 rounded-t',
    path !== href && 'text-white rounded'
  ]);
};

const HeaderLinks = (props: HeaderLinksProps) => {
  const { routes } = props;

  const path = usePathname();
  console.log(path);

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
