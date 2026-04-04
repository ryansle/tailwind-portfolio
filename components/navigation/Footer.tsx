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
    <footer className='pb-10 pt-8'>
      <div className='app-container'>
        <div className='surface-shell px-6 py-8 sm:px-8'>
          <div className='md:flex md:justify-between md:gap-10'>
            <div className='mb-8 mr-8 md:mb-0'>
              <div className='block lg:flex lg:items-center'>
                <NextLink href='/'>
                  <NextImage
                    className='mb-3 rounded-full ring-1 ring-white/10 lg:mb-0 lg:mr-4'
                    height={40}
                    width={40}
                    src='/profile.png'
                    alt='Ryan Le Headshot'
                  />
                </NextLink>
                <div>
                  <h4 className='text-xl font-medium tracking-wider'>RYAN S. LE</h4>
                  <h5 className='font-semibold tracking-wide text-soft'>
                    <span className='text-teal-300'>
                      UI Engineer II
                    </span> @{' '}
                    <NextLink className='hover:text-white hover:underline' href='https://www.crowdstrike.com/'>
                      CrowdStrike
                    </NextLink>
                  </h5>
                </div>
              </div>
              <div className='mt-5 space-y-1 font-cooper tracking-widest text-soft'>
                <p>Is your name Ryan?</p>
                <p>Wanna meet other Ryans?</p>
                <p>
                  JOIN THE <NextLink className='text-teal-300 hover:text-teal-200 hover:underline' href='https://ryanmeetup.com/'>RYAN MEETUP</NextLink>!
                </p>
              </div>
            </div>

            <div className='block md:hidden'>
              <Divider margins='md' />
            </div>

            <div className='grid grid-cols-1 gap-8 sm:grid-cols-4 sm:gap-10'>
              <div className='sm:col-span-1'>
                <h2 className='mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-soft'>Follow Me</h2>
                <ul className='font-medium text-muted'>
                  {socials.map((social) => (
                    <li className='mb-2' key={social.platform as string}>
                      <NextLink
                        href={social.url as string}
                        className='hover:text-white hover:underline'
                        aria-label={`My ${social.platform} profile`}
                      >
                        {social.platform as string}
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='sm:col-span-3'>
                <h2 className='mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-soft'>Built With</h2>
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <ul className='font-medium text-muted'>
                      <li className='mb-2'>
                        <NextLink href='https://nextjs.org/' className='hover:text-white hover:underline'>Next.js</NextLink>
                      </li>
                      <li className='mb-2'>
                        <NextLink href='https://react.dev/' className='hover:text-white hover:underline'>React.js</NextLink>
                      </li>
                      <li className='mb-2'>
                        <NextLink href='https://tailwindcss.com/' className='hover:text-white hover:underline'>Tailwind CSS</NextLink>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className='font-medium text-muted'>
                      <li className='mb-2'>
                        <NextLink href='https://flowbite.com/' className='hover:text-white hover:underline'>Flowbite</NextLink>
                      </li>
                      <li className='mb-2'>
                        <NextLink href='https://headlessui.com/' className='hover:text-white hover:underline'>Headless UI</NextLink>
                      </li>
                      <li className='mb-2'>
                        <NextLink href='https://www.contentful.com/' className='hover:text-white hover:underline'>Contentful</NextLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className='ui-divider my-6 lg:my-8' />
          <div className='sm:flex sm:items-center sm:justify-between'>
            <span className='text-sm text-muted sm:text-center'>
              © {new Date().getFullYear()} Ryan Le. All Rights Reserved.
            </span>

            <div className='mt-4 flex space-x-4 sm:mt-0 sm:justify-center'>
              {socials.map((social) => (
                <NextLink
                  key={social.platform as string}
                  href={social.url as string}
                  aria-label={`My ${social.platform} profile`}
                  className='ui-icon-button'
                >
                  {renderIcon(social.platform as string)}
                </NextLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
