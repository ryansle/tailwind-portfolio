import clsx from 'clsx';
import { ProjectLinks } from './ProjectLinks';
import { ProjectScreenshot } from './ProjectScreenshot';
import { EntranceTransition } from '@/components/global/EntranceTransition';
import { TechStack } from '@/components/global/TechStack';

import type { Project } from '@/lib/types';

import { categoryBadgeClasses } from '@/lib/projects';

import { convertTechStack } from '@/utils/convert';

type FeaturedProjectProps = {
  project: Project;
  index: number;
}

const FeaturedProject = (props: FeaturedProjectProps) => {
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
  const { index } = props;

  const tech = convertTechStack(techStack);
  const reverse = index % 2 !== 0;

  return (
    <EntranceTransition
      enter='transition ease-out duration-500'
      enterFrom='opacity-0 translate-y-4'
      enterTo='opacity-100 translate-y-0'
    >
      <article className='ui-card overflow-hidden'>
        <div className='grid gap-0 lg:grid-cols-2 lg:items-stretch'>
          <div className={clsx('flex min-w-0 items-center justify-center border-b border-white/10 bg-linear-to-br from-teal-950/30 via-slate-950/40 to-slate-900/60 p-4 sm:p-6 lg:border-b-0 lg:p-7', reverse ? 'lg:order-2 lg:border-l' : 'lg:order-1 lg:border-r')}>
            <div className='w-full max-w-[640px] overflow-hidden rounded-surface border border-white/10 bg-slate-950 shadow-2xl'>
              <ProjectScreenshot title={title} image={image} featured />
            </div>
          </div>

          <div className={clsx('flex min-w-0 flex-col p-6 tracking-wide sm:p-7', reverse ? 'lg:order-1' : 'lg:order-2')}>
            <div>
              <div className='mb-4 flex items-start justify-between gap-3'>
                <div className='flex min-w-0 flex-wrap items-center gap-2'>
                  <span className='ui-badge ui-badge-brand'>Featured</span>
                  <span className={clsx('ui-badge', categoryBadgeClasses[category])}>
                    {category}
                  </span>
                </div>
                <ProjectLinks title={title} github={github} url={url} />
              </div>

              <h3 className='mb-2 min-w-0 max-w-full text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white wrap-anywhere'>
                {title}
              </h3>
              {subtitle && (
                <p className='mb-4 text-sm font-medium tracking-wide text-soft'>
                  {subtitle}
                </p>
              )}

              <p className='type-body'>
                {summary}
              </p>
            </div>

            <TechStack skills={tech} className='mt-auto pt-5' />
          </div>
        </div>
      </article>
    </EntranceTransition>
  );
};

export { FeaturedProject };
