// Components
import { FaInstagram as Instagram, FaMeetup as Meetup } from 'react-icons/fa';
import { Heading } from '@/components/global';
import { MobileMenu } from '@/components/navigation';
import NextLink from 'next/link';
import NextImage from 'next/image';

const Header = () => {
  const routes = [
    { text: 'Home', href: '/events' },
    { text: 'About', href: 'https://www.etsy.com/shop/RyanMeetup' },
    { text: 'Experience', href: '/posters' },
    { text: 'Skills', href: '/gallery' },
    { text: 'Project', href: '/press' },
    { text: 'Contact', href: '/contact' }
  ];

  return (
    <header className='flex justify-between items-center py-5 px-4 border-b border-gray-700 bg-black sticky relative top-0 right-0 left-0 z-10 lg:px-48 2xl:px-96 3xl:px-[400px] 4xl:px-[650px]'>
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
            <NextLink
              className='font-semibold tracking-wide text-white'
              key={route.href}
              href={route.href}
            >
              {route.text}
            </NextLink>
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