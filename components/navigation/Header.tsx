// Components
import { MobileMenu } from './MobileMenu';
import { AiFillHome as Home } from 'react-icons/ai';
import { IoPerson as Person } from 'react-icons/io5';
import { HiAtSymbol as Contact } from 'react-icons/hi';
import {
  MdWork as Work,
  MdCode as Code,
  MdLaptopMac as Mac,
} from 'react-icons/md';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { HeaderLinks } from './HeaderLinks';

const Header = () => {
  const routes = [
    { text: 'Home', href: '/', icon: <Home /> },
    { text: 'About', href: '/about', icon: <Person /> },
    { text: 'Experience', href: '/experience', icon: <Work /> },
    { text: 'Skills', href: '/skills', icon: <Code /> },
    { text: 'Projects', href: '/projects', icon: <Mac /> },
    { text: 'Contact', href: '/contact', icon: <Contact /> }
  ];

  return (
    <header className='fixed inset-x-0 top-0 z-50 pt-4'>
      <div className='app-container'>
        <div className='ui-surface flex items-center justify-between rounded-[var(--radius-xl)] px-5 py-4'>
          <NextLink href='/' className='flex items-center justify-center gap-4'>
            <NextImage
              className='rounded-full ring-1 ring-white/10'
              height={40}
              width={40}
              src='/profile.png'
              alt='Ryan Le Headshot'
            />
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.24em] text-teal-300/80'>Portfolio</p>
              <h4 className='text-lg font-semibold tracking-[0.16em]'>RYAN S. LE</h4>
            </div>
          </NextLink>

          <HeaderLinks routes={routes} />

          <div className='xl:hidden'>
            <MobileMenu content={routes} />
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
