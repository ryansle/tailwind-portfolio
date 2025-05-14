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
    <NextLink href={url} className='flex items-center rounded mr-2 py-1.5 px-2 border border-teal-500 mb-2 transition ease-in-out duration-300 hover:scale-105'>
      {renderIcon(platform)}
      <span className='ml-2 text-white tracking-wide font-medium hover:text-teal-500'>
        {platform}
      </span>
    </NextLink>
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
              Hey! I&apos;m Ryan Le - a front-end developer, community builder, and co-founder of the wildly unnecessary but deeply meaningful phenomenon known as the <NextLink className='text-white font-semibold' href='https://www.ryanmeetup.com/'>Ryan Meetup</NextLink>.
            </p>

            <p>
              By day, I build clean, responsive, and delightful web experiences using tools like React.js, Next.js, Tailwind CSS, and TypeScript. I love crafting thoughtful interfaces and solving UI problems that make the web feel more intuitive and human. This portfolio was built with that same joy and curiosity after several iterations to get it just right. I&apos;ve been immersed in tech since a young age, joining the development team of the renowned indie game <span className={emphasis}>Terraria</span> at just 11 years old, sparking my passion for innovation and problem-solving.
            </p>

            <p>
              By night (and oftentimes, weekends), I co-run <span className='text-white font-semibold'>Ryan Meetup</span> - a national event series dedicated to bringing people named Ryan together in absurd, heartfelt, and often hilarious ways. From coordinating 100+ Ryans at a theater takeover to hosting our own Ryan-themed Game Show in San Diego, I&apos;ve learned a lot about creative production, logistics, and what makes people really feel like they belong.
            </p>

            <p>
              I&apos;m originally from <span className={emphasis}>Sioux Falls, South Dakota</span>, and am a proud first-generation Vietnamese-American, as well as a graduate of the <span className='text-red-500 font-semibold'>University of Nebraska-Lincoln</span>. These days, I&apos;m based in <span className={emphasis}>Brooklyn, New York</span>, where I split by time between coding, biking, people-watching, and scheming up new ideas - digital and physical - that bring people together.
            </p>

            <p>
              Whether it&apos;s through code or community, I&apos;m always chasing the same thing: building things that feel good to use and even better to be a part of.
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
