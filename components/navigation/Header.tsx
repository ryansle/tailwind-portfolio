// Components
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
import { HeaderLinks } from '@/components/navigation';

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
    <header className='flex justify-between items-center py-5 px-6 border-b border-gray-700 bg-black sticky relative z-20 top-0 right-0 left-0 z-10 xs:px-20 lg:px-48 2xl:px-72 3xl:px-[400px] 4xl:px-[500px]'>
      <NextLink href='/' className='flex justify-center items-center'>
        <NextImage
          className='rounded-full mr-4'
          height={40}
          width={40}
          src='/headshot.png'
          alt='Ryan Le Headshot'
        />
        <h4 className='tracking-wider font-medium text-xl'>RYAN S. LE</h4>
      </NextLink>

      <HeaderLinks routes={routes} />

      <div className='xl:hidden'>
        <MobileMenu content={routes} />
      </div>
    </header>
  );
};

export { Header };