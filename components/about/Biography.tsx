'use client';

// Components
import NextImage from 'next/image';
import NextLink from 'next/link';
import { Transition } from '@headlessui/react';
import {
  FaLinkedin as LinkedIn,
  FaGithub as GitHub,
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
    <div className='space-y-8'>
      <div className='max-w-4xl'>
        <p className='ui-eyebrow mb-3'>About</p>
        <h1 className='page-title mb-4'>Front-end engineer, community builder, and creative operator.</h1>
      </div>

      <div className='grid grid-cols-12 gap-6 xl:items-start'>
        <div className='col-span-12 xl:col-span-6'>
          <div className='space-y-4 text-soft tracking-wide'>
            <p>
              I&apos;m Ryan Le, a front-end engineer, community builder, and co-founder of <NextLink className='font-semibold text-white underline decoration-teal-400/70 underline-offset-4 transition hover:text-teal-300 hover:decoration-teal-300' href='https://www.ryanmeetup.com/'>Ryan Meetup</NextLink>, a national event series built around shared identity, humor, and belonging.
            </p>

            <p>
              Professionally, I focus on front-end systems, thoughtful UI, and responsive product experiences built with tools like React, Next.js, Tailwind CSS, and TypeScript. I like the work where design intent, engineering quality, and usability all have to line up. I&apos;ve been immersed in tech from an early age, including contributing to the development team behind <span className={emphasis}>Terraria</span> when I was 11, which set the tone for how I think about building things people genuinely enjoy.
            </p>

            <p>
              Outside of product work, I co-run <NextLink className='font-semibold text-white underline decoration-teal-400/70 underline-offset-4 transition hover:text-teal-300 hover:decoration-teal-300' href='https://www.ryanmeetup.com/'>Ryan Meetup</NextLink>, a national event series for people named Ryan. What started as a ridiculous idea turned into a real community, and it taught me as much about creative direction, logistics, programming, and storytelling as any formal role has.
            </p>

            <p>
              I&apos;m originally from <span className={emphasis}>Sioux Falls, South Dakota</span>, and I&apos;m a first-generation Vietnamese-American now based in <span className={emphasis}>Brooklyn, New York</span>. A lot of what I care about, in both code and community work, comes back to clarity, access, and making people feel included.
            </p>

            <p>
              Whether I&apos;m building a product surface or a community experience, I care about making it clear, memorable, and worth returning to.
            </p>
          </div>

          <div className='mt-8 border-t border-white/10 pt-5'>
            <h2 className='type-meta mb-4'>Find me online</h2>
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

        <div className='hidden xl:block xl:col-span-1' />

        <div className='col-span-12 xl:col-span-5 mr-8'>
          <div className='mb-6'>
            <div className='relative h-[320px] w-full overflow-visible xl:h-[500px]'>
              <Transition
                as='div'
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
    </div>
  );
};

export { Biography };
