'use client';

import clsx from 'clsx';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { GiHamburgerMenu as Hamburger } from 'react-icons/gi';

import { routes } from '@/lib/pages';
import { usePathname } from 'next/navigation';
import { navigationLinkState } from './linkStyles';

const MobileMenu = () => {
  const path = usePathname();

  return (
    <div className='flex items-center justify-center'>
      <div className='relative inline-block text-left z-10'>
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button className='interactive-link ui-surface p-2 text-slate-100 hover:text-white' aria-label='Menu'>
                <Hamburger />
              </Menu.Button>

              <Transition
                show={open}
                enter='transition ease-out duration-(--duration-fast)'
                enterFrom='transform opacity-0 -translate-y-2'
                enterTo='transform opacity-100 translate-y-0'
                leave='transition ease-in duration-150'
                leaveFrom='transform opacity-100 translate-y-0'
                leaveTo='transform opacity-0 -translate-y-2'
              >
                <Menu.Items
                  static
                  className='ui-card absolute right-0 mt-2 w-56 origin-top-right overflow-hidden outline-hidden'
                >
                  <div className='p-1'>
                    {routes.map((row) => (
                      <Menu.Item key={row.text}>
                        {({ active }) => (
                          <Link
                            aria-current={path === row.href ? 'page' : undefined}
                            className={clsx(navigationLinkState(path === row.href, active), 'interactive-link flex w-full items-center gap-x-4 rounded-field px-3 py-2 text-left text-sm leading-5')}
                            href={row.href}
                          >
                            <row.icon />
                            {row.text}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
};

export { MobileMenu };
