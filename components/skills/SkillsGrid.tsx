import clsx from 'clsx';
import { EmptyContent } from '@/components/global/EmptyContent';
import Image from 'next/image';

import type { PreparedSkill } from '@/lib/skills';

type SkillsGridProps = {
  skills: PreparedSkill[];
}

const SkillsGrid = (props: SkillsGridProps) => {
  const { skills } = props;
  if (skills.length === 0) return <EmptyContent>No web engineering tools are listed yet.</EmptyContent>;

  return (
    <div className='grid gap-3 sm:grid-cols-2 xl:grid-cols-3'>
      {skills.map(({ skill, iconUrl }) => (
        <div
          key={skill.id}
          className='subtle-panel flex flex-col px-5 py-5 transition hover:border-white/20'
        >
          <div className='flex items-center gap-3'>
            {iconUrl && (
              <Image
                className={clsx('shrink-0', skill.radii && 'rounded-full')}
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
