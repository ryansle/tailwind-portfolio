// Components
import { Heading } from '@/components/global';
import { MobileMenu } from '@/components/navigation';
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
    <header className='flex justify-between items-center py-5 px-4 border-b border-gray-700 bg-black sticky relative top-0 right-0 left-0 z-10 lg:px-48 2xl:px-80 3xl:px-[400px] 4xl:px-[650px]'>
      <div className='flex justify-center items-center'>
        <NextImage
          className='rounded-full mr-4'
          height={40}
          width={40}
          src='/headshot.png'
          alt='Ryan Le Headshot'
        />
        <NextLink href='/'>
          <Heading size='sm'>RYAN S. LE</Heading>
        </NextLink>
      </div>
      <div className='space-x-4 flex items-center'>
        <div className='hidden md:block space-x-4 flex items-center'>
          {routes.map((route) => (
            <button
              className='font-semibold tracking-wide text-white hover:bg-gray-900 p-2 rounded'
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

        <div className='md:hidden'>
          <MobileMenu content={routes} />
        </div>
      </div>
    </header>
  );
};

export { Header };