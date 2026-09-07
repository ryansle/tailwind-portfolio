import { currentRole, ryanMeetup } from '@/lib/profile';
import { getImageProps } from 'next/image';
import Link from 'next/link';
import { EntranceTransition } from '@/components/global/EntranceTransition';
import { Button } from '@/components/global';

import { socials, socialIcons } from '@/lib/socials';

import type { Social } from '@/lib/socials';

type ProofStat = {
  value: string;
  label: string;
  detail: string;
}

// Keep both crops, but let the browser select one optimized source per viewport.
const portraitOptions = {
  alt: 'Ryan Le - Portrait',
  fill: true,
  sizes: '(min-width: 1550px) 680px, (min-width: 1024px) 45vw, 92vw',
  className: 'rounded-surface z-10 object-cover',
};
const { props: portraitImage } = getImageProps({
  ...portraitOptions,
  src: '/athens.png',
});
const { props: landscapeImage } = getImageProps({
  ...portraitOptions,
  src: '/athens-longer.png',
});

const SocialMediaLink = (props: Social) => {
  const { url, platform } = props;

  const Icon = socialIcons[platform];

  return (
    <Button
      href={url}
      icon={<Icon className='w-5 h-5' />}
      size='sm'
      variant='outline'
    >
      {platform}
    </Button>
  );
};

const ProofStatCard = (props: ProofStat) => {
  const { value, label, detail } = props;

  return (
    <div className='proof-card'>
      <p className='text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl'>{value}</p>
      <p className='mt-2 type-meta text-teal-300'>{label}</p>
      <p className='mt-3 text-sm leading-6 text-soft'>{detail}</p>
    </div>
  );
};

const Biography = () => {
  const proofStats: ProofStat[] = [
    {
      value: '5+',
      label: 'Years Shipping',
      detail: 'Professional front-end work across product, marketing, and design-system surfaces since 2021.',
    },
    {
      value: ryanMeetup.yearsOrganizing,
      label: 'Years Organizing',
      detail: 'Building Ryan Meetup through events, chapters, partnerships, stories, and the systems behind them.',
    },
    {
      value: ryanMeetup.events,
      label: 'Events Hosted',
      detail: 'Helping create gatherings that range from neighborhood meetups to national, multi-day experiences.',
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
          <div className='space-y-4 text-soft tracking-wide'>
            <p>
              I&apos;m Ryan Le, a UI engineer who also likes starting slightly ridiculous ideas and turning them into real things. I build product interfaces at {currentRole.employer}, co-run <Link className='font-semibold text-white underline decoration-teal-400/70 underline-offset-4 transition hover:text-teal-300 hover:decoration-teal-300' href={ryanMeetup.urls.home}>Ryan Meetup</Link>, and help create local connection through CrowdNeighborhoods.
            </p>

            <p>
              Professionally, I focus on front-end systems, thoughtful UI, and responsive product experiences built with tools like React, Next.js, Tailwind CSS, and TypeScript. I like the work where design intent, engineering quality, and usability all have to line up. I&apos;ve been immersed in tech from an early age, including contributing to the development team behind <span className='text-emphasis'>Terraria</span> when I was 11, which set the tone for how I think about building things people genuinely enjoy.
            </p>

            <p>
              With Ryan Meetup, I move between event concepts, creative direction, logistics, partnerships, storytelling, and the software behind the operation. What started as a Brooklyn meetup became something people travel across the country to attend. It has taught me as much about making ideas usable as any product role has.
            </p>

            <p>
              I&apos;m originally from <span className='text-emphasis'>Sioux Falls, South Dakota</span>, and I&apos;m a first-generation Vietnamese-American now based in <span className='text-emphasis'>Brooklyn, New York</span>. A lot of what I care about, in both code and community work, comes back to clarity, access, and making people feel included.
            </p>

            <p>
              Whether I&apos;m building a product surface or planning something people will attend in person, I care about making it clear, memorable, and worth returning to.
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
                <h2 className='type-section-title'>An engineer who also likes getting people in the room.</h2>
              </div>
            </div>

            <div className='px-1 pb-1 pt-2 sm:px-2 sm:pb-2 sm:pt-3'>
              <div className='relative h-[320px] w-full overflow-visible sm:h-[380px] lg:h-[440px] xl:h-[500px]'>
                <EntranceTransition
                  enter='transition-opacity ease-linear duration-1200'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                >
                  <picture>
                    <source
                      media='(min-width: 1280px)'
                      srcSet={portraitImage.srcSet}
                      sizes={portraitImage.sizes}
                    />
                    <source
                      media='(min-width: 640px)'
                      srcSet={landscapeImage.srcSet}
                      sizes={landscapeImage.sizes}
                    />
                    {/* getImageProps supplies Next's optimized src and srcSet. */}
                    <img {...portraitImage} alt={portraitImage.alt} />
                  </picture>
                  <div className='absolute left-2 top-2 z-0 h-full w-full rounded-surface border-4 border-teal-500 sm:left-3 sm:top-3 xl:left-4 xl:top-4' />
                </EntranceTransition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Biography };
