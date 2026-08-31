// Components
import { MobileMenu } from './MobileMenu';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { HeaderLinks } from './HeaderLinks';

const Header = () => {
  return (
    <header className='fixed inset-x-0 top-0 z-50 pt-4'>
      <div className='header-container'>
        <div className='surface-shell surface-shell-inset flex items-center justify-between'>
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

          <HeaderLinks />

          <div className='xl:hidden'>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
