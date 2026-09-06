import NextImage from 'next/image';
import { Button, Divider, PageIntro } from '@/components/global';
import { EventGallery } from '@/components/initiatives';
import {
  FaArrowRightLong as ArrowRight,
  FaBullhorn as Bullhorn,
  FaHandshake as Handshake,
  FaPeopleGroup as People,
  FaRoute as Route,
} from 'react-icons/fa6';
import { HiExternalLink as ExternalLink, HiOutlineMail as Mail } from 'react-icons/hi';

import type { Metadata } from 'next';

import { metadataFor } from '@/lib/seo';
import { contactHref } from '@/lib/contact';
import { ryanMeetupEvents } from '@/lib/events';

export const metadata: Metadata = metadataFor('/initiatives');

const responsibilities = [
  {
    title: 'Program the reason to show up',
    description: 'Shape event concepts, recurring traditions, and small details that turn an amusing premise into an experience people remember.',
    icon: Route,
  },
  {
    title: 'Build the operating system',
    description: 'Create the websites, workflows, shared tools, and repeatable processes that make more events and chapters possible.',
    icon: People,
  },
  {
    title: 'Give the idea a voice',
    description: 'Write campaigns, develop the brand, and create stories that are funny enough to travel without losing the warmth underneath.',
    icon: Bullhorn,
  },
  {
    title: 'Bring in the right collaborators',
    description: 'Work with venues, sponsors, press, organizers, and community members while keeping the experience recognizably ours.',
    icon: Handshake,
  },
];

const collaborations = [
  {
    title: 'Community initiatives',
    detail: 'Starting something new, or reworking a community that has outgrown the way it\'s run.',
  },
  {
    title: 'Events & formats',
    detail: 'One-off concepts, recurring traditions, and the logistics that keep them running.',
  },
  {
    title: 'Partnerships & collaborations',
    detail: 'Venues, sponsors, organizers, and creative teams who want to build something together.',
  },
  {
    title: 'Products with a human side',
    detail: 'Work that needs technical judgment and an actual point of view about the people using it.',
  },
];

const InitiativesPage = () => {
  return (
    <>
      <PageIntro
        eyebrow='Community, events & experiments'
        title='Things I&apos;ve helped bring to life.'
        subtitle='Some of my favorite work happens outside a conventional product roadmap: organizing events, creating traditions, building the systems behind them, and giving people an excuse to meet.'
      />

      <section className='ui-card overflow-hidden'>
        <div className='grid lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)]'>
          <div className='motion-parent relative min-h-[340px] overflow-hidden border-b border-white/10 lg:min-h-[560px] lg:border-b-0 lg:border-r'>
            <NextImage
              fill
              priority
              className='motion-media object-cover'
              src='/ryan-meetup/ryanroundup.png'
              sizes='(min-width: 1024px) 46vw, 100vw'
              alt='A room full of Ryans posing together under a Ryan Meetup banner'
            />
            <div className='absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-slate-950/10' />
            <div className='absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7'>
              <span className='ui-badge border-white/20 bg-slate-950/70 text-white'>Established 2023</span>
            </div>
          </div>

          <div className='flex flex-col justify-center p-6 sm:p-8 lg:p-10'>
            <p className='ui-eyebrow mb-3'>Ryan Meetup</p>
            <h2 className='type-page-title'>A joke with surprisingly durable infrastructure.</h2>
            <div className='mt-6 space-y-4 type-body'>
              <p>
                Ryan Meetup is a not-for-profit community run by Ryans, for Ryans. I joined at the beginning and helped turn the premise into a real operation: three and a half years in, that is 25+ events, 16 active chapters, 75+ press features, a recognizable brand, and the digital systems holding it together.
              </p>
              <p>
                My role crosses the usual boundaries. On a given week I might be designing a new event format, refining the website, working through sponsor details, coordinating logistics, writing a campaign, or figuring out how to make a growing operation feel as personal as the first meetup.
              </p>
              <p>
                The joke gets attention. The real work is creating the conditions for strangers to arrive alone and leave feeling like they found their people.
              </p>
            </div>

            <div className='mt-7 flex flex-col gap-3 sm:flex-row'>
              <Button
                href='https://www.ryanmeetup.com/'
                target='_blank'
                rel='noreferrer'
                icon={<ExternalLink />}
                variant='primary'
              >
                Visit Ryan Meetup
              </Button>
              <Button
                href='https://www.ryanmeetup.com/events'
                target='_blank'
                rel='noreferrer'
                icon={<ArrowRight />}
                iconPosition='trailing'
                variant='outline'
              >
                Browse the events
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className='space-y-6'>
        <PageIntro
          as='h2'
          size='section'
          eyebrow='What I actually do'
          title='The work between the idea and the crowd.'
          subtitle='Community work is rarely one job. The interesting part is connecting the creative premise, the practical details, and the systems that let other people participate.'
        />

        <div className='grid gap-4 sm:grid-cols-2'>
          {responsibilities.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className='proof-card'>
                <Icon className='h-5 w-5 text-teal-300' />
                <h3 className='mt-4 text-lg font-semibold tracking-[-0.02em] text-white'>{item.title}</h3>
                <p className='mt-3 text-sm leading-7 text-soft'>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className='space-y-6'>
        <PageIntro
          as='h2'
          size='section'
          eyebrow='Some of our work'
          title='A few of the nights we&apos;ve thrown.'
        />

        <EventGallery events={ryanMeetupEvents} />
      </section>

      <Divider />

      <section className='section-panel'>
        <div className='grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center'>
          <div className='flex min-h-[220px] items-center justify-center p-8'>
            <NextImage
              src='/crowdstrike-stacked.svg'
              alt='CrowdStrike logo'
              width={334}
              height={152}
              className='h-auto w-full max-w-full'
            />
          </div>

          <div>
            <p className='ui-eyebrow mb-3'>CrowdNeighborhoods</p>
            <h2 className='type-page-title'>Making a remote company feel more local.</h2>
            <div className='mt-6 space-y-4 type-body'>
              <p>
                At CrowdStrike, I also contribute to CrowdNeighborhoods, an employee-led initiative that helps remote coworkers meet the people who live and work near them.
              </p>
              <p>
                It is a different environment from Ryan Meetup, but it raises many of the same questions: how much structure helps, what makes an invitation feel genuine, and how do you create a format that can adapt locally without losing its purpose?
              </p>
              <p>
                I keep the internal details internal. What I can share is the perspective it has added to my work: community does not happen because a calendar invite exists. Someone still has to create the reason to participate, remove the awkwardness, and follow through on the experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='cta-panel'>
        <div className='grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12'>
          <div>
            <p className='ui-eyebrow mb-3'>Have something in mind?</p>
            <h2 className='type-page-title'>Let&apos;s make it worth showing up for.</h2>
            <p className='mt-5 max-w-xl type-body'>
              Tell me what you&apos;re building, who it&apos;s for, and what part you&apos;d want me on. I&apos;d rather get into the details than trade introductions.
            </p>

            <div className='mt-7 flex flex-col gap-3 sm:flex-row'>
              <Button
                className='w-full sm:w-auto'
                href={contactHref('initiative')}
                icon={<ArrowRight />}
                iconPosition='trailing'
                variant='primary'
              >
                Start a conversation
              </Button>
            </div>
          </div>

          <div className='subtle-panel divide-y divide-white/6 overflow-hidden'>
            <p className='type-meta px-5 py-4 sm:px-6'>What I&apos;m up for</p>

            {collaborations.map((item) => (
              <div key={item.title} className='px-5 py-4 sm:px-6'>
                <p className='text-base font-semibold tracking-wide text-white'>{item.title}</p>
                <p className='mt-1.5 text-sm leading-7 text-soft'>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InitiativesPage;
