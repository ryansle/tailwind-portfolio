// Components
import NextImage from 'next/image';

// Types
import type { Skill } from '@/lib/types';

// Utilities
import { convertImageUrl } from '@/utils/convert';

type SkillsListProps = {
  skills: Skill[];
}

/**
 * The creative skills are a long, detail-heavy list. As cards they turn into a wall
 * of identical boxes, so they get one quiet panel of rows instead: name on the left,
 * what it means on the right.
 */
const sortSkills = (a: Skill, b: Skill) => {
  if (a.primary !== b.primary) return a.primary ? -1 : 1;

  return a.technology.localeCompare(b.technology);
};

const SkillsList = (props: SkillsListProps) => {
  const { skills } = props;

  const sortedSkills = [...skills]
    .sort(sortSkills)
    .map((skill) => ({ skill, iconUrl: convertImageUrl(skill.icon) }));

  return (
    <div className='subtle-panel divide-y divide-white/[0.06] overflow-hidden'>
      {sortedSkills.map(({ skill, iconUrl }) => (
        <div
          key={skill.technology}
          className='grid gap-1 px-5 py-4 sm:grid-cols-[minmax(0,18rem)_1fr] sm:items-baseline sm:gap-6 sm:px-6'
        >
          <div className='flex items-center gap-2.5'>
            {iconUrl && (
              <NextImage
                className={`shrink-0 ${skill.radii ? 'rounded-full' : ''}`}
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
