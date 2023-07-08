'use client';

// Components
import NextImage from 'next/image';
import NextLink from 'next/link';
import { Transition } from '@headlessui/react';
import {
  FaLinkedin as LinkedIn,
  FaGithub as GitHub,
  FaInstagram as Instagram,
  FaStackOverflow as StackOverflow,
} from 'react-icons/fa6';

// Types
import type { SocialMedia } from '@/lib/types';

type BiographyProps = {
  socials: SocialMedia[];
}

type SocialMediaLinkProps = {
  url: string;
  platform: string;
}

const SocialMediaLink = (props: SocialMediaLinkProps) => {
  const { url, platform } = props;

  const renderIcon = (platform: string) => {
    const iconStyle = 'w-5 h-5 fill-teal-500';

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
    <button className='rounded mr-2 py-1.5 px-2 border border-teal-500 mb-2 transition ease-in-out duration-300 hover:scale-105'>
      <NextLink href={url} className='flex items-center'>
        {renderIcon(platform)}
        <span className='ml-2 text-white tracking-wide font-medium hover:text-teal-500'>
          {platform}
        </span>
      </NextLink>
    </button>
  );
};

const Biography = (props: BiographyProps) => {
  const { socials } = props;

  const emphasis = 'text-teal-500 font-semibold';

  return (
    <div>
      <h1 className='font-bold text-display2 mb-6 tracking-wider'>
        About Me
      </h1>

      <div className='grid grid-cols-12 flex items-center flex-wrap-reverse'>
        <div className='col-span-12 xl:col-span-6'>
          <div className='space-y-3 text-gray-400 tracking-wide'>
            <p>
              Hello! I&apos;m <span className={emphasis}>Ryan Le</span>, a passionate front-end web developer and 2021 graduate from the <span className='text-red-500 font-semibold'>University of Nebraska-Lincoln</span>. As a first-generation Vietnamese-American, I&apos;m proud to be the first in my family to attend and graduate from higher education.
            </p>
            <p>
              During my time at the University of Nebraska-Lincoln, I gained extensive experience in software development, specializing in front-end web development. Using cutting-edge technologies like React.js, Next.js, Tailwind CSS, and TypeScript, I craft exceptional user interfaces and engaging experiences.
            </p>
            <p>
              I&apos;m originally from <span className={emphasis}>Sioux Falls, South Dakota</span>, but these days I call <span className={emphasis}>Brooklyn, New York</span>, my home. I&apos;ve been immersed in tech since a young age, joining the development team of the renowned indie game <span className={emphasis}>Terraria</span> at just 11 years old, sparking my passion for innovation and problem-solving.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring virtual worlds as an avid gamer or biking through city streets, embracing the thrill of adventure. With a personal goal of visiting all 50 states, I&apos;m eager to experience the diverse tapestry of the United States.
            </p>


            <h2 className='text-white text-3xl font-bold pt-6 pb-2 tracking-wider'>
              Follow me on...
            </h2>
            <div className='flex flex-wrap'>
              {socials.map((social) => (
                <SocialMediaLink
                  key={social.platform}
                  url={social.url}
                  platform={social.platform}
                />
              ))}
            </div>
          </div>
        </div>

        <div className='col-span-0 xl:col-span-1' />

        <div className='mb-10 col-span-12 order-first xl:col-span-5 xl:mt-0 xl:order-last'>
          <div className='relative w-full h-[320px] xl:h-[500px]'>
            <Transition
              appear={true}
              show={true}
              enter='transition-opacity ease-linear duration-1200'
              enterFrom='opacity-0'
              enterTo='opacity-100'
            >
              <div className='absolute h-60 w-60 -top-6 -left-12 xl:-top-20'>
                <NextImage
                  className='z-10'
                  alt='dots'
                  fill
                  src='/dots.svg'
                />
              </div>

              <NextImage
                className='rounded-xl z-10 block sm:hidden'
                alt='Ryan Le - Portrait'
                fill
                src='/athens.png'
                style={{ objectFit: 'cover' }}
              />

              <NextImage
                className='rounded-xl z-10 hidden sm:block xl:hidden'
                alt='Ryan Le - Portrait'
                fill
                src='/athens-longer.png'
                style={{ objectFit: 'cover' }}
              />

              <NextImage
                className='rounded-xl z-10 hidden xl:block'
                alt='Ryan Le - Portrait'
                fill
                src='/athens.png'
                style={{ objectFit: 'cover' }}
              />
              <div className='w-full h-full left-3 top-3 border border-4 rounded-xl border-teal-500 absolute z-0 xl:left-4 xl:top-4' />
            </Transition>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Biography };
