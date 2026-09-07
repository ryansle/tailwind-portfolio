'use client';

import clsx from 'clsx';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { routes } from '@/lib/pages';
import { navigationLinkState } from './linkStyles';

import type { Route } from '@/lib/pages';

const HeaderLinks = () => {
  const path = usePathname();

  return (
    <div className='flex items-center space-x-4'>
      <div className='hidden items-center space-x-2 xl:flex'>
        {routes.map((route: Route) => (
          <Link
            aria-current={path === route.href ? 'page' : undefined}
            className={clsx('interactive-link rounded-full px-4 py-2 text-sm font-semibold tracking-wide', navigationLinkState(path === route.href))}
            href={route.href}
            key={route.text}
          >
            <span className='flex items-center gap-x-2'>
              <route.icon />
              {route.text}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { HeaderLinks };
