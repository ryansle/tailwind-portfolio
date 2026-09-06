// Components
import NextImage from 'next/image';

// Types
import type { Skill } from '@/lib/types';

// Utilities
import { convertImageUrl } from '@/utils/convert';

type SkillsGridProps = {
  skills: Skill[];
}

/**
 * Skills arrive from Contentful in edit order, so the grid does its own sort:
 * the tools I'm in every day first, then alphabetical.
 */
const sortSkills = (a: Skill, b: Skill) => {
  if (a.primary !== b.primary) return a.primary ? -1 : 1;

  return a.technology.localeCompare(b.technology);
};

const SkillsGrid = (props: SkillsGridProps) => {
  const { skills } = props;

  const sortedSkills = [...skills]
    .sort(sortSkills)
    .map((skill) => ({ skill, iconUrl: convertImageUrl(skill.icon) }));

  return (
    <div className='grid gap-3 sm:grid-cols-2 xl:grid-cols-3'>
      {sortedSkills.map(({ skill, iconUrl }) => (
        <div
          key={skill.technology}
          className='subtle-panel flex flex-col px-5 py-5 transition hover:border-white/20'
        >
          <div className='flex items-center gap-3'>
            {iconUrl && (
              <NextImage
                className={`shrink-0 ${skill.radii ? 'rounded-full' : ''}`}
                src={iconUrl}
                height={40}
                width={40}
                alt=''
              />
            )}

            <p className='text-lg font-semibold tracking-wide text-white'>
              {skill.technology}
            </p>
          </div>

          <p className='mt-3 text-sm leading-6 text-soft'>{skill.uses}</p>
        </div>
      ))}
    </div>
  );
};

export { SkillsGrid };
