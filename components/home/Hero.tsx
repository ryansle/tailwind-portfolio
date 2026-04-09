'use client';

// Components
import NextImage from 'next/image';
import NextLink from 'next/link';
import { Transition } from '@headlessui/react';
import { Button } from '@/components/global';
import SlideUpWhenVisible from '@/hooks/SlideUpWhenVisible';
import { FaArrowRightLong as ArrowRight, FaDownload as Download } from 'react-icons/fa6';
import { HiSparkles as Sparkles } from 'react-icons/hi2';

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
              </NextLink>, building product UI and front-end systems.
            </h4>
          </SlideUpWhenVisible>

          <SlideUpWhenVisible duration={0.9} delay={0.9}>
            <h4 className='mt-8 mb-1 text-xl font-bold'>
              Quick context
            </h4>

            <div className='text-gray-400 tracking-wide space-y-1 font-medium'>
              <p>🚀 &nbsp; Best on front-end systems, product UI, and implementation-heavy builds.</p>
              <p>🎓 &nbsp; University of Nebraska-Lincoln graduate in Software Engineering.</p>
              <p>🤝🏼 &nbsp; Co-founder of the <NextLink className='text-blue-400 hover:underline' href='https://ryanmeetup.com'>Ryan Meetup</NextLink>.</p>
              <p>🏙️ &nbsp; Based in New York City.</p>
            </div>

            <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
              <Button
                className='w-full sm:w-auto'
                href='/projects'
                icon={<ArrowRight />}
                variant='primary'
              >
                View selected work
              </Button>
              <Button
                className='w-full sm:w-auto'
                href='/contact'
                icon={<Sparkles />}
                variant='outline'
              >
                Start a conversation
              </Button>
              <Button
                className='w-full sm:w-auto'
                download='ryan-le-resume.pdf'
                href='/resume.pdf'
                icon={<Download />}
                variant='outline'
              >
                Download Resume
              </Button>
            </div>
          </SlideUpWhenVisible>
        </div>
        <div className='col-span-0 xl:col-span-1' />
        <div className='col-span-12 flex items-center justify-center mb-10 xl:col-span-4 xl:mt-10 xl:mb-0'>
          <div className='motion-parent relative aspect-square w-full max-h-full sm:max-h-[300px] sm:max-w-[300px] md:max-h-[400px] md:max-w-[400px]'>
            <Transition
              as='div'
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
                className='motion-media rounded-full drop-shadow-2xl z-20'
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
        <div className='mt-8 flex flex-col items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-5 sm:px-6 xl:flex-row xl:items-center'>
          <h4 className='text-xl font-medium tracking-wider'>
            Currently Working With
          </h4>
          <div className='hidden h-10 w-px border border-white/10 xl:block' />
          <div className='flex flex-wrap gap-3 sm:gap-4'>
            {skills.map((skill) => (
              <div
                key={skill.technology as string}
                className='subtle-panel group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-[0.95rem] border-white/10 p-2 sm:h-14 sm:w-14 sm:p-2.5'
                title={skill.technology as string}
              >
                <div className='relative h-6 w-6 sm:h-7 sm:w-7'>
                  <NextImage
                    src={convertImageUrl(skill.icon as ContentfulImage)}
                    fill
                    className='object-contain opacity-80 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100'
                    alt={skill.technology as string}
                    sizes='56px'
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </SlideUpWhenVisible>
    </div>
  );
};

export { Hero };
