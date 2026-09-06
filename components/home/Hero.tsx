'use client';

// Components
import NextImage from 'next/image';
import NextLink from 'next/link';
import { Button, Tooltip } from '@/components/global';
import { FaArrowRightLong as ArrowRight, FaDownload as Download } from 'react-icons/fa6';
import { HiSparkles as Sparkles } from 'react-icons/hi2';

// Utilities
import { convertImageUrl } from '@/utils/convert';

// Types
import type { Skill } from '@/lib/types';

type HeroProps = {
  skills: Skill[]
};

const Hero = (props: HeroProps) => {
  const { skills } = props;

  // These tiles are icon-only, so a skill whose asset failed to resolve has
  // nothing left to show and drops out of the row.
  const toolkit = skills
    .map((skill) => ({ skill, iconUrl: convertImageUrl(skill.icon) }))
    .filter((entry): entry is { skill: Skill; iconUrl: string } => Boolean(entry.iconUrl));

  return (
    <div className='tracking-wider'>
      <div className='grid grid-cols-12 flex items-center flex-wrap-reverse'>
        <div className='col-span-12 order-last xl:col-span-8 xl:order-first xl:pr-12 2xl:pr-16'>
          <div>
            <p className='text-accent text-display3 font-medium mb-[-20px] flex'>
              <span className='animate-wave mr-4 inline-block'>👋🏼</span> Hey there, I&apos;m...
            </p>
            <h1 className='text-display font-bold'>
              Ryan Le.
            </h1>
          </div>
          <div className='space-y-3'>
            <p className='text-2xl font-medium'>
              I&apos;m a <span className='text-emphasis'>UI Engineer II</span> at{' '}
              <NextLink className='text-red-500 hover:underline underline-offset-2' href='https://www.crowdstrike.com/'>
                CrowdStrike
              </NextLink>, building product UI and front-end systems.
            </p>
            <p className='text-lg text-gray-400 font-medium'>
              Away from the keyboard, I&apos;m a community builder at heart. Co-founder of <NextLink className='font-semibold text-white underline decoration-teal-400/70 underline-offset-4 transition hover:text-teal-300 hover:decoration-teal-300' href='https://www.ryanmeetup.com/'>Ryan Meetup</NextLink>, a not-for-profit organization for anyone and everyone named Ryan: it started as a bit between three of us at a Brooklyn bar in 2023. 
            </p>
            <p className='text-lg text-gray-400 font-medium'>
              Three years and 25+ events later, we operate 16+ chapters across the country and work with global brands to create meaningful connections in a post-COVID world.
            </p>
          </div>

          <div>
            <h2 className='mt-8 mb-1 text-xl font-bold'>
              Quick context
            </h2>

            <div className='text-gray-400 tracking-wide space-y-1 font-medium'>
              <p className='flex gap-2'>
                <span aria-hidden className='w-6 shrink-0'>🧑🏻‍💻</span>
                <span>Product-minded engineer who likes making ambitious ideas usable.</span>
              </p>
              <p className='flex gap-2'>
                <span aria-hidden className='w-6 shrink-0'>📈</span>
                <span>Built <NextLink className='text-blue-400 hover:underline' href='https://ryanmeetup.com'>Ryan Meetup</NextLink> from zero to 1,400 Ryans in one room, 115k+ followers, and $10k+ raised for charity.</span>
              </p>
              <p className='flex gap-2'>
                <span aria-hidden className='w-6 shrink-0'>🧭</span>
                <span>Comfortable moving between code, creative direction, logistics, and live execution.</span>
              </p>
              <p className='flex gap-2'>
                <span aria-hidden className='w-6 shrink-0'>🏙️</span>
                <span>Based in Brooklyn, New York.</span>
              </p>
            </div>

            <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
              <Button
                className='w-full sm:w-auto'
                href='/initiatives'
                icon={<ArrowRight />}
                iconPosition='trailing'
                variant='primary'
              >
                Explore initiatives
              </Button>
              <Button
                className='w-full sm:w-auto'
                href='/projects'
                icon={<Sparkles />}
                variant='outline'
              >
                View product work
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
          </div>
        </div>
        <div className='col-span-12 flex items-center justify-center mb-10 xl:col-span-4 xl:mt-10 xl:mb-0'>
          <div className='motion-parent relative aspect-square w-full max-h-full sm:max-h-[300px] sm:max-w-[300px] md:max-h-[400px] md:max-w-[400px]'>
            <div className='animate-drift absolute h-60 w-60 -top-8 -left-4 xl:-top-10 xl:-left-12'>
              <NextImage
                src='/dots.svg'
                fill
                className='z-10'
                alt=''
                sizes='240px'
              />
            </div>
            {/* The float lives on the wrapper so the hover scale on the image
                itself doesn't fight it for the transform property. */}
            <div className='animate-float absolute inset-0 z-20'>
              <NextImage
                className='motion-media rounded-full drop-shadow-2xl'
                src='/profile.png'
                fill
                priority
                sizes='(min-width: 1280px) 400px, (min-width: 640px) 300px, 100vw'
                alt='Ryan Le - Headshot'
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='mt-8 flex flex-col items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-5 sm:px-6 xl:flex-row xl:items-center'>
          <h2 className='text-xl font-medium tracking-wider'>
            Engineering toolkit
          </h2>
          <div className='hidden h-10 w-px border border-white/10 xl:block' />
          <div className='flex flex-wrap gap-3 sm:gap-4'>
            {toolkit.map(({ skill, iconUrl }) => (
              <Tooltip
                key={skill.technology as string}
                detail={skill.uses}
                label={skill.technology as string}
              >
                <div className='subtle-panel group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-[0.95rem] border-white/10 p-2 transition-colors duration-300 hover:border-white/25 sm:h-14 sm:w-14 sm:p-2.5'>
                  <div className='relative h-6 w-6 sm:h-7 sm:w-7'>
                    <NextImage
                      src={iconUrl}
                      fill
                      className='object-contain opacity-80 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100'
                      alt={skill.technology as string}
                      sizes='56px'
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
