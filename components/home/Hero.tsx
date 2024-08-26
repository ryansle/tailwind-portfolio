'use client';

// Components
import NextImage from 'next/image';
import NextLink from 'next/link';
import { Transition } from '@headlessui/react';
import SlideUpWhenVisible from '@/hooks/SlideUpWhenVisible';

// Utilities
import { convertImageUrl } from '@/utils/convert';

// Types
import type { ContentfulImage, Skill } from '@/lib/types';

type HeroProps = {
  skills: Skill[]
};

const Hero = (props: HeroProps) => {
  const { skills } = props;

  return (
    <div className='tracking-wider'>
      <div className='grid grid-cols-12 flex items-center flex-wrap-reverse'>
        <div className='col-span-12 order-last xl:col-span-7 xl:order-first'>
          <SlideUpWhenVisible duration={0.4} delay={0.4}>
            <h2 className='text-teal-500 text-display3 font-medium mb-[-20px] flex'>
              <div className='animate-wave mr-4'>👋🏼</div> Hey there, I&apos;m...
            </h2>
            <h1 className='text-display font-bold'>
              Ryan Le.
            </h1>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible duration={0.8} delay={0.7}>
            <h4 className='text-2xl font-medium'>
              I&apos;m currently a <span className='text-teal-500 font-semibold'>UI Engineer II</span> at{' '}
              <NextLink className='text-red-500 hover:underline underline-offset-2' href='https://www.crowdstrike.com/'>
                CrowdStrike
              </NextLink>, working on all things front-end.
            </h4>
          </SlideUpWhenVisible>

          <SlideUpWhenVisible duration={0.9} delay={0.9}>
            <h4 className='mt-8 mb-1 text-xl font-bold'>
              A little about me...
            </h4>

            <div className='text-gray-500 tracking-wide space-y-1 font-medium'>
              <p>🚀 &nbsp; Always exploring opportunities, side projects, freelancing and more.</p>
              <p>🎓 &nbsp; University of Nebraska-Lincoln Alumni. Degree in Software Engineering.</p>
              <p>🤝🏼 &nbsp; Cofounder of the <NextLink className='text-blue-400 hover:underline' href='https://ryanmeetup.com'>Ryan Meetup</NextLink>.</p>
              <p>🏙️ &nbsp; Currently based out of New York City.</p>
            </div>
          </SlideUpWhenVisible>
        </div>
        <div className='col-span-0 xl:col-span-1' />
        <div className='col-span-12 flex items-center justify-center mb-10 xl:col-span-4 xl:mt-10 xl:mb-0'>
          <div className='relative aspect-square w-full max-h-full sm:max-h-[300px] sm:max-w-[300px] md:max-h-[400px] md:max-w-[400px]'>
            <Transition
              appear={true}
              show={true}
              enter='transition-opacity ease-linear duration-1000'
              enterFrom='opacity-0'
              enterTo='opacity-100'
            >
              <div className='absolute h-60 w-60 -top-8 -left-4 xl:-top-10 xl:-left-12'>
                <NextImage
                  src='/dots.svg'
                  fill
                  className='z-10'
                  alt='dots'
                />
              </div>
              <NextImage
                className='rounded-full drop-shadow-2xl z-20'
                src='/profile.png'
                fill
                alt='Ryan Le - Headshot'
                style={{ objectFit: 'cover' }}
              />
            </Transition>
          </div>
        </div>
      </div>

      <SlideUpWhenVisible duration={0.9} delay={0.9}>
        <div className='flex items-start mt-8 flex-col xl:flex-row xl:items-center'>
          <h4 className='mb-2 text-xl font-medium tracking-wider xl:mb-0'>
            Currently Working With
          </h4>
          <div className='mx-8 mb-4 w-0.5 border border-white h-10 hidden xl:block xl:mb-0' />
          <div className='flex flex-wrap'>
            {skills.map((skill) => (
              <div
                key={skill.technology as string}
                className='relative w-10 h-10 mr-8 mb-3'
              >
                <NextImage
                  src={convertImageUrl(skill.icon as ContentfulImage)}
                  fill
                  alt={skill.technology as string}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>

        </div>
      </SlideUpWhenVisible>
    </div>
  );
};

export { Hero };
