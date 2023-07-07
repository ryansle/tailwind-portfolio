// Components
import NextImage from 'next/image';
import { List, TechLabel } from '@/components/experience';
import { Divider } from '@/components/global';

// Types
import { Experience } from '@/lib/types';

// Utilities
import { convertImageUrl } from '@/utils/convert';

type HistoryProps = {
  experiences: Experience[];
}

type CompanyProps = {
  experience: Experience;
  renderDivider: boolean;
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
  } = props.experience;
  const { renderDivider } = props;

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
      default:
        return;
    }
  };

  return (
    <li className='ml-6 xl:mb-10'>
      <div className='relative h-40 w-full flex items-center justify-center lg:mb-6 xl:hidden'>
        <NextImage
          src={convertImageUrl(image)}
          fill
          alt={`${company} Logo`}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className='absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-700' />
      <div className='grid grid-cols-10 flex items-center'>
        <div className='col-span-10 xl:col-span-6'>
          <time className='mb-1 text-lg font-normal leading-none text-gray-500'>
            {datesEmployed}
          </time>
          <h3 className='text-3xl mb-4 tracking-wide'>
            <span className='text-teal-500 font-semibold break-words'>{title}</span>
            {' '}@{' '}
            <span className={`${renderCompanyColor(company)} font-semibold`}>{company}</span>
          </h3>
          <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
            {summary}
          </p>

          <h4 className='text-teal-500 font-semibold text-xl tracking-wide mb-2'>
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
        </div>

        <div className='col-span-1' />

        <div className='relative h-full w-full col-span-3'>
          <NextImage
            src={convertImageUrl(image)}
            fill
            alt={`${company} Logo`}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      {renderDivider && <Divider />}
    </li>
  );
};

const History = (props: HistoryProps) => {
  const { experiences } = props;

  return (
    <div className='mt-2'>
      <ol className='relative border-l border-gray-700'>
        {experiences.map((job, index) => (
          <Company
            key={job.company}
            experience={job}
            renderDivider={index !== experiences.length - 1}
          />
        ))}
      </ol>
    </div>
  );
};

export { History };
