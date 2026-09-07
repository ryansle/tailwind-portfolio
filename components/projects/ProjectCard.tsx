import clsx from 'clsx';
import { ProjectLinks } from './ProjectLinks';
import { ProjectScreenshot } from './ProjectScreenshot';
import { TechStack } from '@/components/global/TechStack';

import type { Project } from '@/lib/types';

import { categoryBadgeClasses } from '@/lib/projects';

import { convertTechStack } from '@/utils/convert';

type ProjectCardProps = {
  project: Project;
}

const ProjectCard = (props: ProjectCardProps) => {
  const {
    title,
    subtitle,
    summary,
    image,
    github,
    url,
    category,
    techStack,
  } = props.project;

  const tech = convertTechStack(techStack);

  return (
    <article className='group motion-parent interactive-card ui-card surface-hover motion-lift flex h-full min-w-0 flex-col overflow-hidden'>
      <div className='relative aspect-16/10 w-full shrink-0 overflow-hidden border-b border-white/10 sm:aspect-video'>
        <ProjectScreenshot title={title} image={image} />
      </div>

      <div className='flex flex-1 flex-col p-5 tracking-wide sm:p-6'>
        <div className='text-left'>
          <div className='mb-2 flex items-start justify-between gap-3'>
            <div className='flex min-w-0 flex-wrap items-center gap-2.5'>
              <h3 className='min-w-0 text-xl font-semibold tracking-[-0.02em] text-white wrap-anywhere'>
                {title}
              </h3>
              <span className={clsx('ui-badge', categoryBadgeClasses[category])}>
                {category}
              </span>
            </div>
            <ProjectLinks title={title} github={github} url={url} />
          </div>
          {subtitle && (
            <p className='text-sm font-medium tracking-wider text-soft'>
              {subtitle}
            </p>
          )}

          <p className='mt-3 text-sm leading-6 text-muted'>
            {summary}
          </p>
        </div>

        <TechStack skills={tech} limit={4} className='mt-auto pt-5' />
      </div>
    </article>
  );
};

export { ProjectCard };
