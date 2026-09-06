'use client';

// Components
import NextImage from 'next/image';
import { Transition } from '@headlessui/react';
import { List } from './List';
import { TechLabel } from './TechLabel';
import { Divider, RYAN_MEETUP_COMPANY, RyanMeetupCta } from '@/components/global';
import NextLink from 'next/link';
import { FaChevronDown as ChevronDown } from 'react-icons/fa6';

// Built-in Types
import { useState } from 'react';

// Types
import { Experience } from '@/lib/types';

// Utilities
import { convertImageUrl, convertTechStack } from '@/utils/convert';

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

// The date and status pills share one size so they line up as a single row.
const timelineBadge = 'ui-badge uppercase tracking-[0.18em]';

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

  const tech = convertTechStack(techStack);
  const logo = convertImageUrl(image);

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
      case RYAN_MEETUP_COMPANY:
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
      {logo && (
        <div className='relative mb-6 flex h-32 w-full items-center justify-center sm:h-36 xl:hidden'>
          <NextImage
            src={logo}
            fill
            sizes='(min-width: 640px) 480px, 90vw'
            alt={`${company} Logo`}
            style={{ objectFit: 'contain' }}
          />
        </div>
      )}
      {/*
        The marker belongs on the <ol> rule, which the <li> is inset from by ml-5/lg:ml-6.
        A fixed-size wrapper pulled back by half its own width keeps all three dot sizes
        centred on that line, and mt-[7px] drops it to the middle of the date badge.
      */}
      <span
        aria-hidden
        className='absolute -left-5 mt-[7px] flex h-4 w-4 -translate-x-1/2 items-center justify-center lg:-left-6'
      >
        <span className={`rounded-full border border-gray-900 ${isCurrent ? 'h-4 w-4 bg-teal-400 shadow-[0_0_0_4px_rgba(45,212,191,0.12)]' : isRecent ? 'h-3.5 w-3.5 bg-slate-300' : 'h-3 w-3 bg-gray-700'}`} />
      </span>
      <div className='grid grid-cols-10 items-center'>
        <div className='col-span-10 xl:col-span-6'>
          <div className='mb-3 flex flex-wrap items-center gap-3'>
            <time className={`${timelineBadge} ${isCurrent ? 'ui-badge-brand text-teal-200' : isRecent ? 'text-soft' : 'text-muted'}`}>
              {datesEmployed}
            </time>
            {isCurrent && (
              <span className={`${timelineBadge} ui-badge-live`}>
                Current
              </span>
            )}
            {!isCurrent && index === 1 && (
              <span className={`${timelineBadge} text-soft`}>
                Recent
              </span>
            )}
          </div>
          <h2 className='mb-4 text-[clamp(1.8rem,4vw,3rem)] tracking-wider'>
            <span className='text-emphasis break-words'>{title}</span>
            {' '}@{' '}
            <NextLink href={companyUrl}>
              <span className={`${renderCompanyColor(company)} font-semibold underline-offset-4 hover:underline`}>
                {company}
              </span>
            </NextLink>
          </h2>
          <p className='mb-4 text-base font-normal text-white'>
            {summary}
          </p>

          <h3 className='mb-2 text-xl tracking-wider text-emphasis'>
            {header}
          </h3>

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

          {company === RYAN_MEETUP_COMPANY && <RyanMeetupCta className='mt-4' />}
        </div>

        <div className='hidden xl:block xl:col-span-1' />

        <div className='relative hidden h-full w-full xl:col-span-3 xl:block'>
          {logo && (
            <NextLink href={companyUrl}>
              <NextImage
                src={logo}
                fill
                sizes='(min-width: 1550px) 360px, 25vw'
                alt={`${company} Logo`}
                style={{ objectFit: 'contain' }}
              />
            </NextLink>
          )}
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
        {/*
          The markers straddle this rule, so it is inset from the page edge by
          more than their half-width. Sitting flush would put their left half
          outside `.page-shell`, which clips hard at its padding edge.
        */}
        <ol className='relative ml-4 border-l border-gray-700 pt-1'>
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
