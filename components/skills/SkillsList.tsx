import clsx from 'clsx';
import { EmptyContent } from '@/components/global/EmptyContent';
import Image from 'next/image';

import type { PreparedSkill } from '@/lib/skills';

type SkillsListProps = {
  skills: PreparedSkill[];
}

/**
 * The creative skills are a long, detail-heavy list. As cards they turn into a wall
 * of identical boxes, so they get one quiet panel of rows instead: name on the left,
 * what it means on the right.
 */
const SkillsList = (props: SkillsListProps) => {
  const { skills } = props;
  if (skills.length === 0) return <EmptyContent>No creative skills are listed yet.</EmptyContent>;

  return (
    <div className='subtle-panel divide-y divide-white/6 overflow-hidden'>
      {skills.map(({ skill, iconUrl }) => (
        <div
          key={skill.id}
          className='grid gap-1 px-5 py-4 sm:grid-cols-[minmax(0,18rem)_1fr] sm:items-baseline sm:gap-6 sm:px-6'
        >
          <div className='flex items-center gap-2.5'>
            {iconUrl && (
              <Image
                className={clsx('shrink-0', skill.radii && 'rounded-full')}
                src={iconUrl}
                height={28}
                width={28}
                alt=''
              />
            )}

            <p className='text-base font-semibold tracking-wide text-white'>
              {skill.technology}
            </p>
          </div>

          <p className='text-sm leading-7 text-soft'>{skill.uses}</p>
        </div>
      ))}
    </div>
  );
};

export { SkillsList };
