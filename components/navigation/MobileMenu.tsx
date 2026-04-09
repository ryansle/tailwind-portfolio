'use client';

// Components
import { Menu, Transition } from '@headlessui/react';
import NextLink from 'next/link';
import { GiHamburgerMenu as Hamburger } from 'react-icons/gi';

// Types
import type { Route } from '@/lib/types';

type MobileMenuProps = {
  content: Route[];
};

const MobileMenu = (props: MobileMenuProps) => {
  const { content } = props;

  return (
    <div className='flex items-center justify-center'>
      <div className='relative inline-block text-left z-10'>
        <Menu>
          {({ open }) => (
            <>
              <span className='rounded-md shadow-sm'>
                <Menu.Button className='interactive-link rounded-md border border-gray-700 bg-white p-2 text-black transition duration-150 ease-in-out focus-visible:shadow-[0_0_0_4px_rgba(45,212,191,0.28)]' aria-label='Menu'>
                  <Hamburger />
                </Menu.Button>
              </span>

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
                  className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md border border-gray-200 bg-white shadow-lg outline-none'
                >
                  <div className='py-1'>
                    {content.map((row) => (
                      <Menu.Item key={row.text}>
                        {({ active }) => (
                          <NextLink
                            className={`${active
                              ? 'bg-gray-100'
                              : 'text-black'
                              } interactive-link flex w-full items-center gap-x-4 px-4 py-2 text-left text-sm leading-5 focus-visible:bg-gray-100`}
                            href={row.href}
                          >
                            {row.icon}
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
