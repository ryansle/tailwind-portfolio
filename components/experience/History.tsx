'use client';

// Components
import NextImage from 'next/image';
import { Transition } from '@headlessui/react';
import { List } from './List';
import { TechLabel } from './TechLabel';
import { Button, Divider } from '@/components/global';
import NextLink from 'next/link';
import { FaHandshake as Handshake } from 'react-icons/fa';
import { FaChevronDown as ChevronDown } from 'react-icons/fa6';

// Built-in Types
import { useState } from 'react';

// Types
import { Experience } from '@/lib/types';

// Utilities
import { convertImageUrl } from '@/utils/convert';

type HistoryProps = {
  experiences: Experience[];
}

type CompanyProps = {
  experience: Experience;
  index: number;
  isCurrent: boolean;
  isRecent: boolean;
  milestoneLabel?: string;
  renderDivider: boolean;
}

type ExperienceSectionProps = {
  title: string;
  defaultOpen?: boolean;
  experiences: Experience[];
  recentCount: number;
  startIndex: number;
  milestoneIndex?: number;
}

const Company = (props: CompanyProps) => {
  const {
    company,
    title,
    datesEmployed,
    summary,
    header,
    image,
    responsibilities,
    techStack,
    companyUrl
  } = props.experience;
  const { index, isCurrent, isRecent, milestoneLabel, renderDivider } = props;

  const tech = techStack?.map((data) => data.fields);

  const renderCompanyColor = (company: string) => {
    switch (company) {
      case 'CrowdStrike':
        return 'text-red-500';
      case 'American Express':
        return 'text-blue-500';
      case 'Hoffman Strategy Group':
        return 'text-stone-400';
      case 'Re-Logic Games':
        return 'text-indigo-500';
      case 'Nelnet':
        return 'text-[#6FBA41]';
      case 'Ryan Meetup':
        return 'text-white';
      default:
        return;
    }
  };

  return (
    <li className='relative ml-5 lg:ml-6 xl:mb-10'>
      {milestoneLabel && (
        <div className='mb-8 ml-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4'>
          <div className='flex items-center gap-4'>
            <span className='type-meta whitespace-nowrap text-teal-300'>{milestoneLabel}</span>
            <span className='h-px flex-1 bg-gradient-to-r from-white/20 to-transparent' />
          </div>
        </div>
      )}
      <div className='relative mb-6 flex h-32 w-full items-center justify-center sm:h-36 xl:hidden'>
        <NextImage
          src={convertImageUrl(image)}
          fill
          alt={`${company} Logo`}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className={`absolute -left-2 mt-1.5 rounded-full border border-gray-900 ${isCurrent ? 'h-4 w-4 bg-teal-400 shadow-[0_0_0_4px_rgba(45,212,191,0.12)]' : isRecent ? 'h-3.5 w-3.5 bg-slate-300' : 'h-3 w-3 bg-gray-700'}`} />
      <div className='grid grid-cols-10 items-center'>
        <div className='col-span-10 xl:col-span-6'>
          <div className='mb-3 flex flex-wrap items-center gap-3'>
            <time className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${isCurrent ? 'border-teal-400/35 bg-teal-400/10 text-teal-200' : isRecent ? 'border-white/15 bg-white/[0.04] text-soft' : 'border-white/10 bg-white/[0.03] text-muted'}`}>
              {datesEmployed}
            </time>
            {isCurrent && (
              <span className='rounded-full border border-teal-400/30 bg-teal-400/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-200'>
                Current
              </span>
            )}
            {!isCurrent && index === 1 && (
              <span className='rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-soft'>
                Recent
              </span>
            )}
          </div>
          <h3 className='mb-4 text-[clamp(1.8rem,4vw,3rem)] tracking-wider'>
            <span className='text-teal-500 font-semibold break-words'>{title}</span>
            {' '}@{' '}
            <NextLink href={companyUrl}>
              <span className={`${renderCompanyColor(company)} font-semibold underline-offset-4 hover:underline`}>
                {company}
              </span>
            </NextLink>
          </h3>
          <p className='mb-4 max-w-[68ch] text-base font-normal text-white'>
            {summary}
          </p>

          <h4 className='mb-2 text-xl font-semibold tracking-wider text-teal-500'>
            {header}
          </h4>

          <List list={responsibilities} />
          {tech && (
            <div className='flex flex-wrap pt-3'>
              {tech.map((tool) => (
                <TechLabel
                  key={tool.technology}
                  name={tool.technology}
                  icon={tool.icon}
                  radii={tool.radii}
                />
              ))}
            </div>
          )}

          {company === 'Ryan Meetup' && (
            <Button
              className='mt-4'
              fullWidth
              href='https://www.ryanmeetup.com/about'
              target='_blank'
              rel='noreferrer'
              icon={<Handshake />}
              variant='outline'
            >
              Learn more about the Ryan Meetup
            </Button>
          )}
        </div>

        <div className='hidden xl:block xl:col-span-1' />

        <div className='relative hidden h-full w-full xl:col-span-3 xl:block'>
          <NextLink href={companyUrl}>
            <NextImage
              src={convertImageUrl(image)}
              fill
              alt={`${company} Logo`}
              style={{ objectFit: 'contain' }}
            />
          </NextLink>
        </div>
      </div>
      {renderDivider && <Divider />}
    </li>
  );
};

const ExperienceSection = (props: ExperienceSectionProps) => {
  const {
    title,
    defaultOpen = true,
    experiences,
    recentCount,
    startIndex,
    milestoneIndex = -1
  } = props;
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className='mb-8'>
      <button
        type='button'
        onClick={() => setIsOpen((open) => !open)}
        className='mb-5 flex w-full items-center gap-4 rounded-2xl border border-teal-400/15 bg-teal-400/[0.05] px-5 py-4 text-left hover:border-teal-400/30 hover:bg-teal-400/[0.08]'
        aria-expanded={isOpen}
      >
        <span className={`flex h-10 w-10 items-center justify-center rounded-full border ${isOpen ? 'border-teal-300/30 bg-teal-300/12 text-teal-100' : 'border-white/10 bg-white/[0.04] text-slate-300'}`}>
          <ChevronDown className={`text-sm transition-transform ${isOpen ? 'rotate-0' : '-rotate-90'}`} />
        </span>
        <div className='flex min-w-0 flex-1 items-center gap-4'>
          <span className='type-meta whitespace-nowrap text-teal-200'>{title}</span>
          <span className='h-px flex-1 bg-gradient-to-r from-teal-400/30 to-transparent' />
        </div>
      </button>

      <Transition
        as='div'
        show={isOpen}
        enter='transition-all duration-300 ease-out'
        enterFrom='opacity-0 -translate-y-3 scale-[0.98]'
        enterTo='opacity-100 translate-y-0 scale-100'
        leave='transition-all duration-200 ease-in'
        leaveFrom='opacity-100 translate-y-0 scale-100'
        leaveTo='opacity-0 -translate-y-2 scale-[0.98]'
        className='origin-top overflow-hidden'
      >
        <ol className='relative border-l border-gray-700 pt-1'>
          {experiences.map((job, sectionIndex) => {
            const index = startIndex + sectionIndex;

            return (
              <Company
                key={job.company}
                experience={job}
                index={index}
                isCurrent={/now|present/i.test(job.datesEmployed)}
                isRecent={index < recentCount}
                milestoneLabel={index === milestoneIndex ? 'Earlier work' : undefined}
                renderDivider={sectionIndex !== experiences.length - 1}
              />
            );
          })}
        </ol>
      </Transition>
    </section>
  );
};

const History = (props: HistoryProps) => {
  const { experiences } = props;
  const recentCount = experiences.length > 3 ? 2 : experiences.length;
  const recentExperiences = experiences.slice(0, recentCount);
  const earlierExperiences = experiences.slice(recentCount);

  return (
    <div className='mt-2'>
      <ExperienceSection
        title='Current work'
        experiences={recentExperiences}
        recentCount={recentCount}
        startIndex={0}
        defaultOpen
      />
      {earlierExperiences.length > 0 && (
        <ExperienceSection
          title='Earlier work'
          experiences={earlierExperiences}
          recentCount={recentCount}
          startIndex={recentCount}
          defaultOpen={false}
        />
      )}
    </div>
  );
};

export { History };
