import clsx from 'clsx';
import { currentRole, ryanMeetup } from '@/lib/profile';
import Image from 'next/image';
import Link from 'next/link';
import { List } from './List';
import { Divider, RyanMeetupCta } from '@/components/global';
import { TechStack } from '@/components/global/TechStack';
import type { Experience } from '@/lib/types';
import { convertImageUrl, convertTechStack } from '@/utils/convert';

type CompanyProps = {
  experience: Experience;
  index: number;
  isCurrent: boolean;
  isRecent: boolean;
  renderDivider: boolean;
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
  const { index, isCurrent, isRecent, renderDivider } = props;

  const tech = convertTechStack(techStack);
  const logo = convertImageUrl(image);

  const renderCompanyColor = (company: string) => {
    switch (company) {
      case currentRole.employer:
        return 'text-red-500';
      case 'American Express':
        return 'text-blue-500';
      case 'Hoffman Strategy Group':
        return 'text-stone-400';
      case 'Re-Logic Games':
        return 'text-indigo-500';
      case 'Nelnet':
        return 'text-[#6FBA41]';
      case ryanMeetup.name:
        return 'text-white';
      default:
        return;
    }
  };

  return (
    <li className='relative ml-5 lg:ml-6 xl:mb-10'>
      {logo && (
        <div className='relative mb-6 flex h-32 w-full items-center justify-center sm:h-36 xl:hidden'>
          <Image
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
        <span className={clsx('rounded-full border border-gray-900', isCurrent ? 'h-4 w-4 bg-teal-400 shadow-[0_0_0_4px_rgba(45,212,191,0.12)]' : isRecent ? 'h-3.5 w-3.5 bg-slate-300' : 'h-3 w-3 bg-gray-700')} />
      </span>
      <div className='grid grid-cols-10 items-center'>
        <div className='col-span-10 xl:col-span-6'>
          <div className='mb-3 flex flex-wrap items-center gap-3'>
            <time className={clsx(timelineBadge, isCurrent ? 'ui-badge-brand text-teal-200' : isRecent ? 'text-soft' : 'text-muted')}>
              {datesEmployed}
            </time>
            {isCurrent && (
              <span className={clsx(timelineBadge, 'ui-badge-live')}>
                Current
              </span>
            )}
            {!isCurrent && index === 1 && (
              <span className={clsx(timelineBadge, 'text-soft')}>
                Recent
              </span>
            )}
          </div>
          <h2 className='mb-4 text-[clamp(1.8rem,4vw,3rem)] tracking-wider'>
            <span className='text-emphasis wrap-break-word'>{title}</span>
            {' '}@{' '}
            <Link href={companyUrl}>
              <span className={clsx(renderCompanyColor(company), 'font-semibold underline-offset-4 hover:underline')}>
                {company}
              </span>
            </Link>
          </h2>
          <p className='mb-4 text-base font-normal text-white'>
            {summary}
          </p>

          <h3 className='mb-2 text-xl tracking-wider text-emphasis'>
            {header}
          </h3>

          <List list={responsibilities} />
          {tech.length > 0 && <TechStack skills={tech} className='pt-3' />}

          {company === ryanMeetup.name && <RyanMeetupCta className='mt-4' />}
        </div>

        <div className='hidden xl:block xl:col-span-1' />

        <div className='relative hidden h-full w-full xl:col-span-3 xl:block'>
          {logo && (
            <Link href={companyUrl}>
              <Image
                src={logo}
                fill
                sizes='(min-width: 1550px) 360px, 25vw'
                alt={`${company} Logo`}
                style={{ objectFit: 'contain' }}
              />
            </Link>
          )}
        </div>
      </div>
      {renderDivider && <Divider />}
    </li>
  );
};

export { Company };
