// Components
import NextLink from 'next/link';
import NextImage from 'next/image';
import {
  FaLinkedin as LinkedIn,
  FaGithub as GitHub,
  FaInstagram as Instagram,
  FaStackOverflow as StackOverflow,
} from 'react-icons/fa6';
import { Divider } from '@/components/global';

const Footer = () => {
  const socials = [
    { url: 'https://www.linkedin.com/in/ryansle/', platform: 'LinkedIn' },
    { url: 'https://stackoverflow.com/users/11599714/ryansle', platform: 'Stack Overflow' },
    { url: 'https://github.com/ryansle', platform: 'GitHub' },
    { url: 'https://www.instagram.com/ryansle/', platform: 'Instagram' },
  ];

  const renderIcon = (platform: string) => {
    const iconStyle = 'w-5 h-5 fill-gray-400 transition ease-in-out duration-300 hover:fill-teal-500';

    switch (platform) {
      case 'LinkedIn':
        return <LinkedIn className={iconStyle} />;
      case 'GitHub':
        return <GitHub className={iconStyle} />;
      case 'Instagram':
        return <Instagram className={iconStyle} />;
      case 'Stack Overflow':
        return <StackOverflow className={iconStyle} />;
      default:
        return;
    }
  };

  return (
    <footer className='border-t border-gray-700 px-6 h-20 mt-24 xs:px-20 lg:px-48 2xl:px-72 3xl:px-[400px] 4xl:px-[500px]'>
      <div className='w-full py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 mr-8 md:mb-0'>
            <div className='block lg:items-center lg:flex'>
              <NextLink href='/'>
                <NextImage
                  className='rounded-full mr-4 mb-2 lg:mb-0'
                  height={40}
                  width={40}
                  src='/profile.png'
                  alt='Ryan Le Headshot'
                />
              </NextLink>
              <div>
                <h4 className='tracking-wider font-medium text-xl'>RYAN S. LE</h4>
                <h5 className='tracking-wide font-semibold'>
                  <span className='text-teal-500'>
                    UI Engineer II
                  </span> @{' '}
                  <NextLink className='hover:underline' href='https://www.crowdstrike.com/'>
                    CrowdStrike
                  </NextLink>
                </h5>
              </div>
            </div>
            <div className='space-y-1 font-cooper tracking-widest mt-4'>
              <p>
                Wanna meet other Ryans?
              </p>
              <p>
                JOIN THE <NextLink className='text-teal-500 hover:underline' href='https://ryanmeetup.com/'>RYAN MEETUP</NextLink>!
              </p>
            </div>
          </div>

          <div className='block md:hidden'>
            <Divider margins='md' />
          </div>

          {/* Resources & Follow Us */}
          <div className='grid grid-cols-4 space-x-8'>
            <div className='col-span-1'>
              <h2 className='mb-6 text-xs font-semibold text-gray-900 uppercase text-white sm:text-sm'>Follow Me</h2>
              <ul className='text-gray-600 font-medium'>
                {socials.map((social) => (
                  <li className='mb-2' key={social.platform as string}>
                    <NextLink
                      href={social.url as string}
                      className='hover:underline'
                      aria-label={`My ${social.platform} profile`}
                    >
                      {social.platform as string}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className='col-span-3'>
              <h2 className='mb-6 text-xs font-semibold text-gray-900 uppercase text-white sm:text-sm'>Built With</h2>
              <div className='grid grid-cols-2 space-x-4'>
                <div className='col-span-1'>
                  <ul className='text-gray-600 font-medium'>
                    <li className='mb-2'>
                      <NextLink href='https://nextjs.org/' className='hover:underline'>Next.js</NextLink>
                    </li>
                    <li className='mb-2'>
                      <NextLink href='https://react.dev/' className='hover:underline'>React.js</NextLink>
                    </li>
                    <li className='mb-2'>
                      <NextLink href='https://tailwindcss.com/' className='hover:underline'>Tailwind CSS</NextLink>
                    </li>
                  </ul>
                </div>
                <div className='col-span-1'>
                  <ul className='text-gray-600 font-medium'>
                    <li className='mb-2'>
                      <NextLink href='https://flowbite.com/' className='hover:underline'>Flowbite</NextLink>
                    </li>
                    <li className='mb-2'>
                      <NextLink href='https://headlessui.com/' className='hover:underline'>Headless UI</NextLink>
                    </li>
                    <li className='mb-2'>
                      <NextLink href='https://www.contentful.com/' className='hover:underline'>Contentful</NextLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-600 sm:text-center'>
            © {new Date().getFullYear()} Ryan Le. All Rights Reserved.
          </span>

          {/* Socials */}
          <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
            {socials.map((social) => (
              <NextLink
                key={social.platform as string}
                href={social.url as string}
                aria-label={`My ${social.platform} profile`}
              >
                {renderIcon(social.platform as string)}
              </NextLink>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
};

export { Footer };