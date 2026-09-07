import { currentRole, ryanMeetup } from '@/lib/profile';
import Image from 'next/image';
import Link from 'next/link';
import { Button, PageIntro, RotatingGallery } from '@/components/global';
import { ryanMeetupGallery } from '@/lib/gallery';
import { FaArrowRightLong as ArrowRight } from 'react-icons/fa6';
import { HiOutlineCalendar as Calendar, HiOutlineClock as Clock, HiOutlineLocationMarker as MapPin, HiOutlineNewspaper as Newspaper } from 'react-icons/hi';

const InitiativesPreview = () => {
  const stats = [
    { value: ryanMeetup.yearsOrganizing, label: 'years organizing', href: ryanMeetup.urls.home, icon: Clock },
    { value: ryanMeetup.events, label: 'Ryan Meetup events', href: ryanMeetup.urls.events, icon: Calendar },
    { value: ryanMeetup.chapters, label: 'active chapters', href: ryanMeetup.urls.chapters, icon: MapPin },
    { value: ryanMeetup.pressFeatures, label: 'press features', href: ryanMeetup.urls.press, icon: Newspaper },
  ];

  return (
    <section className='space-y-8'>
      <PageIntro
        as='h2'
        eyebrow='Initiatives'
        title='The side of my work that fills rooms.'
        subtitle='Two ongoing experiments in getting people into the same room: one for strangers who happen to share a first name, one for coworkers who live in the same city and have never met.'
      />

      <div className='grid gap-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]'>
        <article className='ui-card overflow-hidden'>
          <RotatingGallery
            className='relative aspect-video border-b border-white/10 sm:aspect-16/8'
            items={ryanMeetupGallery}
          />
          <div className='p-6 sm:p-7'>
            <h3 className='type-section-title'>A community for people named Ryan.</h3>
            <div className='mt-4 space-y-4 type-body'>
              <p>
                It started as a bit between three of us in a Brooklyn bar in {ryanMeetup.founded}. There are now {ryanMeetup.chapters} chapters that run their own nights without me in the room, and the big events pull Ryans who fly in from across the country and overseas to be there.
              </p>
              <p>
                Everything underneath it is software I build and maintain myself: the site, the event pages, RSVPs, chapter tools, and the admin work that keeps {ryanMeetup.events} events from turning into a spreadsheet problem.
              </p>
              <p>
                Most weeks the job is logistics. Book a venue that can handle the turnout, print name tags that all say the same thing, keep the chapter leads supplied with what they need, and make sure the night has enough shape that people talk to someone they didn&apos;t arrive with.
              </p>
              <p>
                It runs as a not-for-profit, and the press found it faster than we planned for: {ryanMeetup.pressFeatures} features so far, far more than the three of us expected out of a joke in a bar.
              </p>
            </div>
          </div>
        </article>

        <article className='section-panel'>
          <Image
            className='mb-6 h-auto w-full'
            src='/crowdstrike-stacked.svg'
            width={167}
            height={76}
            alt={currentRole.employer}
          />
          <h3 className='type-section-title'>Face time for coworkers who work from home.</h3>
          <div className='mt-4 space-y-4 type-body'>
            <p>
              I throw company-funded events through CrowdNeighborhoods, an employee-led program that gets remote coworkers together in the cities they already live in.
            </p>
            <p>
              The job is the unglamorous half: pitch the idea, get the budget approved, find a venue that fits the group, and then stand at the door so nobody walks in and ends up standing alone.
            </p>
            <p>
              Same problem as Ryan Meetup on a company budget: give people a reason to show up that doesn&apos;t feel like a mandatory offsite.
            </p>
            <p>
              It keeps me close to the people I build for, too. Most of what I ship is used by coworkers I&apos;d otherwise only meet in a pull request, and a night out with them tells me more than a scheduled call ever has.
            </p>
          </div>
        </article>
      </div>

      <div className='grid gap-3 sm:grid-cols-2 xl:grid-cols-4'>
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Link
              key={stat.label}
              className='proof-card group transition-colors hover:border-teal-300/40'
              href={stat.href}
              target='_blank'
              rel='noreferrer'
            >
              <div className='flex items-start justify-between gap-3'>
                <p className='text-2xl font-semibold tracking-[-0.03em] text-white'>{stat.value}</p>
                <Icon className='mt-1 text-lg text-teal-300/60 transition-colors group-hover:text-teal-300' />
              </div>
              <p className='mt-2 type-meta text-teal-300'>{stat.label}</p>
            </Link>
          );
        })}
      </div>

      <div className='flex justify-end'>
        <Button href='/initiatives' icon={<ArrowRight />} iconPosition='trailing' variant='outline'>
          See how the work comes together
        </Button>
      </div>
    </section>
  );
};

export { InitiativesPreview };
