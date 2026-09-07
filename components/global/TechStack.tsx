import clsx from 'clsx';
import { TechLabel } from '@/components/experience/TechLabel';
import type { Skill } from '@/lib/types';

type TechStackProps = {
  skills: readonly Skill[];
  limit?: number;
  className?: string;
};

const TechStack = ({ skills, limit, className }: TechStackProps) => (
  <div className={clsx('flex flex-wrap', className)}>
    {skills.slice(0, limit).map((skill) => (
      <TechLabel
        key={skill.id}
        name={skill.technology}
        icon={skill.icon}
        radii={skill.radii}
      />
    ))}
  </div>
);

export { TechStack };
