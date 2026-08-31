'use client';

// Components
import { Menu, Transition } from '@headlessui/react';
import NextLink from 'next/link';
import { GiHamburgerMenu as Hamburger } from 'react-icons/gi';

// Utilities
import { routes } from '@/lib/routes';

const MobileMenu = () => {
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
                enter='transition ease-out duration-200'
                enterFrom='transform opacity-0 -translate-y-2'
                enterTo='transform opacity-100 translate-y-0'
                leave='transition ease-in duration-150'
                leaveFrom='transform opacity-100 translate-y-0'
                leaveTo='transform opacity-0 -translate-y-2'
              >
                <Menu.Items
                  static
                  className='ui-card absolute right-0 mt-2 w-56 origin-top-right overflow-hidden outline-none'
                >
                  <div className='p-1'>
                    {routes.map((row) => (
                      <Menu.Item key={row.text}>
                        {({ active }) => (
                          <NextLink
                            className={`${active
                              ? 'bg-white/5 text-white'
                              : 'text-slate-300'
                              } interactive-link flex w-full items-center gap-x-4 px-3 py-2 text-left text-sm leading-5`}
                            href={row.href}
                          >
                            <row.icon />
                            {row.text}
                          </NextLink>
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
