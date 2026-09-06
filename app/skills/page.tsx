// Components
import { PressWall, SkillsGrid, SkillsList } from '@/components/skills';
import { Button, Divider, PageIntro } from '@/components/global';
import {
  FaBullhorn as Bullhorn,
  FaCalendarDay as CalendarDay,
  FaCodeBranch as CodeBranch,
  FaCompass as Compass,
  FaHandshake as Handshake,
  FaMapLocationDot as MapLocation,
  FaMicrophoneLines as Microphone,
  FaLaptopCode as LaptopCode,
  FaLayerGroup as LayerGroup,
  FaPeopleGroup as PeopleGroup,
  FaRobot as Robot,
  FaServer as Server,
  FaWandMagicSparkles as Sparkles,
} from 'react-icons/fa6';

// Types
import type { Metadata } from 'next';

// Utilities
import { fetchSkills } from '@/data/fetch';
import { metadataFor } from '@/lib/seo';

export const metadata: Metadata = metadataFor('/skills');

const SkillsPage = async () => {
  const skills = await fetchSkills();

  const visibleSkills = skills.filter((skill) => skill.visibility);

  const webSkills = visibleSkills.filter((skill) => skill.type === 'web');
  const creativeSkills = visibleSkills.filter((skill) => skill.type === 'creative');

  const capabilityGroups = [
    {
      title: 'Agent-assisted development',
      description: 'Using coding agents to explore, implement, test, and revise quickly, then applying the front-end judgment that turns their output into dependable product work.',
      icon: <CodeBranch className='h-4 w-4 text-teal-400' />,
    },
    {
      title: 'Product UI systems',
      description: 'Component architecture, interaction patterns, and shared primitives that hold up as products and teams grow.',
      icon: <LayerGroup className='h-4 w-4 text-teal-400' />,
    },
    {
      title: 'End-to-end product work',
      description: 'Taking work from an unclear idea to a finished experience, connecting product decisions, interface details, and implementation along the way.',
      icon: <Sparkles className='h-4 w-4 text-teal-400' />,
    },
  ];

  const operatingModel = [
    {
      step: '01',
      title: 'Give the work a shape',
      description: 'I define the problem, the constraints, and the patterns worth preserving. Better context gives agents a better starting point and keeps fast work pointed in the right direction.',
    },
    {
      step: '02',
      title: 'Iterate at agent speed',
      description: 'Agents help me move through implementation, refactors, tests, and alternate approaches in parallel. I can cover more ground, try more ideas, and get to useful feedback sooner.',
    },
    {
      step: '03',
      title: 'Finish with judgment',
      description: 'I review the code and the experience, catch brittle decisions, and keep pushing until the result fits the product. Fast output is a starting point; the finished work still has to feel intentional.',
    },
  ];

  const communityCapabilities = [
    {
      title: 'Event programming',
      icon: <CalendarDay className='h-3.5 w-3.5' />,
      description: 'Turning a loose premise into formats, activities, and live experiences that give people a reason to participate and come back.',
    },
    {
      title: 'Brand & storytelling',
      icon: <Bullhorn className='h-3.5 w-3.5' />,
      description: 'Shaping the voice, visual direction, campaigns, and recurring bits that make Ryan Meetup recognizable without sanding off the joke.',
    },
    {
      title: 'Partnerships & media',
      icon: <Handshake className='h-3.5 w-3.5' />,
      description: 'Working with sponsors, collaborators, and press while protecting what makes the community feel genuine in the first place.',
    },
    {
      title: 'Digital operations',
      icon: <Server className='h-3.5 w-3.5' />,
      description: 'Building the public sites and internal systems that support events, chapters, merchandise, sponsors, and the work behind the scenes.',
    },
    {
      title: 'Chapter operations',
      icon: <MapLocation className='h-3.5 w-3.5' />,
      description: 'Recruiting and supporting organizers in other cities, then handing them real ownership along with the tools and playbooks to run their own events.',
    },
    {
      title: 'Live production',
      icon: <Microphone className='h-3.5 w-3.5' />,
      description: 'Running the day itself: run of show, vendors, AV, staffing, and the contingency plans that keep a room of strangers moving.',
    },
  ];

  const pressFeatures = [
    {
      outlet: 'The New York Times',
      href: 'https://www.nytimes.com/2023/03/28/nyregion/ryan-meetup-nyc.html',
      logo: '/press/nyt-white.png',
      height: 'h-8',
      width: 3840,
      intrinsicHeight: 670,
    },
    {
      outlet: 'Los Angeles Times',
      href: 'https://www.latimes.com/california/newsletter/2023-09-11/at-the-dumb-and-wholesome-ryan-rave-everyone-belongs-and-everyones-ryan-essential-california',
      logo: '/press/lat-white.png',
      height: 'h-8',
      width: 3840,
      intrinsicHeight: 670,
    },
    {
      outlet: 'CBS News',
      href: 'https://www.cbsnews.com/losangeles/video/rallying-ryans-host-meet-ups-around-the-world/',
      logo: '/press/cbs-white.png',
      height: 'h-14',
      width: 1000,
      intrinsicHeight: 647,
    },
    {
      outlet: 'ESPN',
      href: 'https://www.espn.com/mlb/story/_/id/45587300/colorado-rockies-ryan-record-meetup-coors-field',
      logo: '/press/espn.png',
      height: 'h-10',
      width: 1108,
      intrinsicHeight: 274,
    },
  ];

  return (
    <>
      <PageIntro
        eyebrow='Skills'
        title='Front-end judgment, at a much faster pace.'
        subtitle='My work starts with front-end engineering, product judgment, and the systems thinking needed to turn ideas into things people can actually use. Agents help me explore and implement much faster, but those skills still shape what gets built and what ships.'
      />

      <div className='grid gap-4 lg:grid-cols-3'>
        {capabilityGroups.map((group) => (
          <div key={group.title} className='proof-card'>
            <div className='mb-3 flex items-center gap-2'>
              {group.icon}
              <p className='type-meta'>{group.title}</p>
            </div>
            <p className='text-sm leading-7 text-soft'>{group.description}</p>
          </div>
        ))}
      </div>

      <section className='section-panel'>
        <div className='mb-6 space-y-4'>
          <div className='flex flex-wrap items-center justify-between gap-4'>
            <div className='flex items-center gap-3'>
              <span className='section-icon'>
                <Robot className='h-4 w-4' />
              </span>
              <h2 className='type-section-title'>
                How I build with agents
              </h2>
            </div>
            <span className='ui-badge ui-badge-brand'>
              Agentic workflow
            </span>
          </div>
          <p className='type-body'>
            Agents cover a lot of ground in a day, but the speed is only useful because I know the front end well enough to direct it: shaping the architecture, catching brittle output, protecting shared patterns, and pushing until the result feels intentional rather than generated.
          </p>
        </div>

        <div className='grid gap-4 lg:grid-cols-3'>
          {operatingModel.map((phase) => (
            <div key={phase.step} className='subtle-panel px-5 py-5 sm:px-6'>
              <p className='text-xs font-semibold tracking-[0.24em] text-teal-300'>{phase.step}</p>
              <p className='mt-3 text-base font-semibold tracking-wide text-white'>{phase.title}</p>
              <p className='mt-3 text-sm leading-7 text-soft'>{phase.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider margins='md' />

      <section className='section-panel'>
        <div className='mb-6 space-y-4'>
          <div className='flex flex-wrap items-center justify-between gap-4'>
            <div className='flex items-center gap-3'>
              <span className='section-icon'>
                <LaptopCode className='h-4 w-4' />
              </span>
              <h2 className='type-section-title'>
                Web Engineering
              </h2>
            </div>
            <span className='ui-badge ui-badge-brand'>
              {webSkills.length} core tools
            </span>
          </div>
          <p className='type-body'>
            This list is short on purpose. It&apos;s what I&apos;m in every day and can defend in a code review, not everything I&apos;ve ever touched.
          </p>
        </div>

        <SkillsGrid skills={webSkills} />
      </section>

      <Divider margins='md' />

      <section className='section-panel'>
        <div className='mb-6 space-y-4'>
          <div className='flex flex-wrap items-center justify-between gap-4'>
            <div className='flex items-center gap-3'>
              <span className='section-icon'>
                <PeopleGroup className='h-4 w-4' />
              </span>
              <h2 className='type-section-title'>
                Creative Operations & Organizing
              </h2>
            </div>
            <span className='ui-badge ui-badge-brand'>
              {creativeSkills.length} creative capabilities
            </span>
          </div>
          <div className='space-y-4 type-body'>
            <p>
              I co-run Ryan Meetup, a community brand and event series built on shared identity, humor, and intentionally ridiculous programming. It&apos;s taught me more about being a founder than any job has: taking an idea from 0 to 100, funding it through sponsors, handing real ownership to organizers in other cities, and keeping it recognizable while it scales.
            </p>
            <p>
              I also built and run the infrastructure the whole operation sits on — every Ryan Meetup web property, plus the internal systems organizers use for chapters, events, sponsors, and partnerships. It&apos;s the one place I get to be the engineer, the creative director, and the operator at the same time.
            </p>
          </div>
        </div>

        <div className='mb-8 grid gap-x-10 gap-y-7 sm:grid-cols-2'>
          {communityCapabilities.map((capability) => (
            <div key={capability.title} className='border-l-2 border-teal-400/50 pl-5'>
              <p className='type-meta flex items-center gap-2 text-teal-300'>
                <span className='text-teal-400'>{capability.icon}</span>
                {capability.title}
              </p>
              <p className='mt-2 text-sm leading-7 text-soft'>{capability.description}</p>
            </div>
          ))}
        </div>

        <div className='mb-8'>
          <PressWall
            features={pressFeatures}
            moreHref='https://www.ryanmeetup.com/press'
            moreLabel='75+ features total →'
          />
        </div>

        <p className='type-meta mb-3'>Named skills</p>

        <SkillsList skills={creativeSkills} />

        <Button className='mt-6' fullWidth href='/initiatives' icon={<Compass className='h-4 w-4' />} variant='outline'>
          Explore the initiatives behind the skills
        </Button>
      </section>
    </>
  );
};

export default SkillsPage;
