import { currentRole, ryanMeetup } from '@/lib/profile';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRightLong as ArrowRight } from 'react-icons/fa6';

import { socials, socialIcons } from '@/lib/socials';
import { stack, repository } from '@/lib/stack';
import { pages } from '@/lib/pages';

import type { PageKey } from '@/lib/pages';

/**
 * The footer's own running order, which is not the nav's: the community work
 * leads, and Home is dropped since the logo above already goes there. Text and
 * icons still come from the page registry so this cannot drift out of sync.
 */
const exploreLinks: PageKey[] = [
  '/initiatives',
  '/projects',
  '/experience',
  '/about',
  '/skills',
  '/contact',
];

const Footer = () => {
  const iconStyle = 'w-5 h-5 fill-gray-400 transition ease-in-out duration-(--duration-base) hover:fill-teal-500';
  const navLinkStyle = 'group flex items-center gap-2.5 hover:text-white';
  const navIconStyle = 'h-4 w-4 shrink-0 text-slate-500 transition-colors duration-(--duration-base) group-hover:text-teal-300';

  return (
    <footer className='pb-10 pt-8'>
      <div className='header-container'>
        <div className='surface-shell px-6 py-8 sm:px-8'>
          <div className='grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] xl:gap-20'>
            <div>
              <div className='block lg:flex lg:items-center'>
                <Link href='/'>
                  <Image
                    className='mb-3 rounded-full ring-1 ring-white/10 lg:mb-0 lg:mr-4'
                    height={40}
                    width={40}
                    src='/profile.png'
                    alt='Ryan Le Headshot'
                  />
                </Link>
                <div className='space-y-0.5'>
                  <p className='text-xl font-medium tracking-wider'>RYAN S. LE</p>
                  <p className='font-semibold tracking-wide text-soft'>
                    <span className='text-teal-300'>
                      {currentRole.title}
                    </span> @{' '}
                    <Link className='hover:text-white hover:underline' href={currentRole.url}>
                      {currentRole.employer}
                    </Link>
                  </p>
                  <p className='font-semibold tracking-wide text-soft'>
                    <span className='text-teal-300'>
                      Co-founder
                    </span> @{' '}
                    <Link className='hover:text-white hover:underline' href={ryanMeetup.urls.home}>
                      Ryan Meetup
                    </Link>
                  </p>
                </div>
              </div>
              <div className='mt-5 space-y-1 font-cooper tracking-widest text-soft'>
                <p>Is your name Ryan?</p>
                <p>Wanna meet other Ryans?</p>
                <p>
                  JOIN THE <Link className='text-teal-300 hover:text-teal-200 hover:underline' href={ryanMeetup.urls.home}>RYAN MEETUP</Link>!
                </p>
              </div>
            </div>

            <hr className='ui-divider lg:hidden' />

            <nav aria-label='Footer' className='grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 xl:grid-cols-3 xl:gap-14'>
              <div>
                <p className='mb-4 type-meta text-soft'>Follow Me</p>
                <ul className='space-y-3 font-medium text-muted'>
                  {socials.map((social) => {
                    const Icon = socialIcons[social.platform];

                    return (
                      <li key={social.platform}>
                        <Link
                          href={social.url}
                          className={navLinkStyle}
                          aria-label={`My ${social.platform} profile`}
                        >
                          <Icon className={navIconStyle} />
                          <span className='group-hover:underline'>{social.platform}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className='xl:col-span-2'>
                <p className='mb-4 type-meta text-soft'>Explore</p>
                {/* Read down each column before moving to the next. */}
                <ul className='grid grid-flow-col grid-cols-2 grid-rows-3 gap-x-8 gap-y-3 font-medium text-muted xl:gap-x-12'>
                  {exploreLinks.map((href) => {
                    const { text, icon: Icon } = pages[href];

                    return (
                      <li key={href}>
                        <Link href={href} className={navLinkStyle}>
                          <Icon className={navIconStyle} />
                          <span className='group-hover:underline'>{text}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
          </div>

          <hr className='ui-divider my-6 lg:my-8' />
          <div className='flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-6'>
            <p className='type-meta shrink-0'>Built with</p>
            <ul className='flex flex-wrap gap-2'>
              {stack.map((technology) => {
                const Icon = technology.icon;

                return (
                  <li key={technology.name}>
                    <Link
                      href={technology.url}
                      className='subtle-panel group flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium text-soft transition-colors duration-(--duration-base) hover:border-white/25 hover:bg-white/5 hover:text-white'
                    >
                      <Icon className='h-4 w-4 shrink-0' style={{ color: technology.color }} />
                      {technology.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href={repository}
              className='group flex shrink-0 items-center gap-2 text-xs font-medium text-muted transition-colors duration-(--duration-base) hover:text-white xl:ml-auto'
            >
              Source on GitHub
              <ArrowRight className='h-3 w-3 transition-transform duration-(--duration-base) group-hover:translate-x-0.5' />
            </Link>
          </div>

          <hr className='ui-divider my-6 lg:my-8' />
          <div className='sm:flex sm:items-center sm:justify-between'>
            <span className='text-sm text-muted sm:text-center'>
              © {new Date().getFullYear()} Ryan Le. All Rights Reserved.
            </span>

            <div className='mt-4 flex space-x-4 sm:mt-0 sm:justify-center'>
              {socials.map((social) => {
                const Icon = socialIcons[social.platform];

                return (
                  <Link
                    key={social.platform}
                    href={social.url}
                    aria-label={`My ${social.platform} profile`}
                    className='ui-icon-button'
                  >
                    <Icon className={iconStyle} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
