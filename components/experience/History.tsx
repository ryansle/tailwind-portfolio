import { Company } from './Company';
import { EmptyContent } from '@/components/global/EmptyContent';
import { ExperienceDisclosure } from './ExperienceDisclosure';
import type { Experience } from '@/lib/types';

type HistoryProps = {
  experiences: Experience[];
}

type ExperienceSectionProps = {
  title: string;
  defaultOpen?: boolean;
  experiences: Experience[];
  recentCount: number;
  startIndex: number;
}

const ExperienceSection = (props: ExperienceSectionProps) => {
  const {
    title,
    defaultOpen = true,
    experiences,
    recentCount,
    startIndex
  } = props;

  return (
    <ExperienceDisclosure title={title} defaultOpen={defaultOpen}>
      {/* Inset the rule so timeline markers have space on both sides. */}
      <ol className='relative ml-4 border-l border-gray-700 pt-1'>
        {experiences.map((job, sectionIndex) => {
          const index = startIndex + sectionIndex;

          return (
            <Company
              key={job.id}
              experience={job}
              index={index}
              isCurrent={/now|present/i.test(job.datesEmployed)}
              isRecent={index < recentCount}
              renderDivider={sectionIndex !== experiences.length - 1}
            />
          );
        })}
      </ol>
    </ExperienceDisclosure>
  );
};

const History = (props: HistoryProps) => {
  const { experiences } = props;
  if (experiences.length === 0) return <EmptyContent>No experience entries are published yet. You can download my resume for my work history.</EmptyContent>;
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
