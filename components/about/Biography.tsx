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

type ProofStat = {
  value: string;
  label: string;
  detail: string;
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
    <NextLink href={url} className='inline-flex items-center rounded border border-teal-500 px-2 py-1.5 transition ease-in-out duration-300 hover:scale-105'>
      {renderIcon(platform)}
      <span className='ml-2 text-white tracking-wide font-medium hover:text-teal-500'>
        {platform}
      </span>
    </NextLink>
  );
};

const ProofStatCard = (props: ProofStat) => {
  const { value, label, detail } = props;

  return (
    <div className='proof-card'>
      <p className='text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl'>{value}</p>
      <p className='mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-teal-300'>{label}</p>
      <p className='mt-3 text-sm leading-6 text-soft'>{detail}</p>
    </div>
  );
};

const Biography = (props: BiographyProps) => {
  const { socials } = props;

  const emphasis = 'text-teal-500 font-semibold';
  const proofStats: ProofStat[] = [
    {
      value: '5+',
      label: 'Years Shipping',
      detail: 'Professional front-end work across product, marketing, and design-system surfaces since 2021.',
    },
    {
      value: 'Web Engineer',
      label: 'Current Role',
      detail: 'Building front-end product experiences at CrowdStrike with a strong bias toward clarity, craft, and execution.',
    },
    {
      value: 'Co-Founder',
      label: 'Community Builder',
      detail: 'Built Ryan Meetup into a recurring community experience rooted in identity, humor, and belonging.',
    },
    {
      value: 'Since 2010',
      label: 'Early Start',
      detail: 'Started contributing to the team behind Terraria as a kid, which shaped how I think about building things people genuinely enjoy.',
    },
  ];

  return (
    <div className='flex flex-col gap-8 -mt-4'>
      <div className='proof-grid order-2 lg:order-1'>
        {proofStats.map((stat) => (
          <ProofStatCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
            detail={stat.detail}
          />
        ))}
      </div>

      <div className='order-1 flex flex-col-reverse gap-6 lg:order-2 lg:grid lg:grid-cols-12 lg:items-start lg:gap-8'>
        <div className='col-span-12 lg:col-span-6 xl:col-span-5'>
          <div className='max-w-[68ch] space-y-4 text-soft tracking-wide'>
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
            <div className='flex flex-wrap gap-2'>
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

        <div className='col-span-12 lg:col-span-6'>
          <div className='media-panel'>
            <div className='mb-5'>
              <div>
                <p className='type-meta mb-2'>Portrait</p>
                <h2 className='type-section-title'>Product-minded engineer with community-builder range.</h2>
              </div>
            </div>

            <div className='px-1 pb-1 pt-2 sm:px-2 sm:pb-2 sm:pt-3'>
              <div className='relative h-[320px] w-full overflow-visible sm:h-[380px] lg:h-[440px] xl:h-[500px]'>
                <Transition
                  as='div'
                  appear={true}
                  show={true}
                  enter='transition-opacity ease-linear duration-1200'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                >
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
                  <div className='absolute left-2 top-2 z-0 h-full w-full rounded-xl border-4 border-teal-500 sm:left-3 sm:top-3 xl:left-4 xl:top-4' />
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Biography };
