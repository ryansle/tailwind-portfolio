'use client';

// Components
import NextLink from 'next/link';
import { ProjectScreenshot } from './ProjectScreenshot';
import { TechLabel } from '@/components/experience/TechLabel';
import { AiFillGithub as GitHub } from 'react-icons/ai';
import { HiExternalLink as Link } from 'react-icons/hi';
import { Transition } from '@headlessui/react';

// Types
import type { Project } from '@/lib/types';

// Constants
import { categoryBadgeClasses } from '@/lib/projects';

// Utilities
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
    <Transition
      as='div'
      appear={true}
      show={true}
      enter='transition ease-out duration-500'
      enterFrom='opacity-0 translate-y-4'
      enterTo='opacity-100 translate-y-0'
    >
      <article className='ui-card overflow-hidden'>
        <div className='grid gap-0 lg:grid-cols-2 lg:items-stretch'>
          <div className={`flex min-w-0 items-center justify-center border-b border-white/10 bg-linear-to-br from-teal-950/30 via-slate-950/40 to-slate-900/60 p-4 sm:p-6 lg:border-b-0 lg:p-7 ${reverse ? 'lg:order-2 lg:border-l' : 'lg:order-1 lg:border-r'}`}>
            <div className='w-full max-w-[640px] overflow-hidden rounded-xl border border-white/10 bg-slate-950 shadow-2xl'>
              <ProjectScreenshot title={title} image={image} featured />
            </div>
          </div>

          <div className={`flex min-w-0 flex-col p-6 tracking-wide sm:p-7 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            <div>
              <div className='mb-4 flex items-start justify-between gap-3'>
                <div className='flex min-w-0 flex-wrap items-center gap-2'>
                  <span className='ui-badge ui-badge-brand'>Featured</span>
                  <span className={`ui-badge ${categoryBadgeClasses[category]}`}>
                    {category}
                  </span>
                </div>
                {(github || url) && (
                  <div className='ml-auto flex shrink-0 items-center gap-2'>
                    {github && (
                      <NextLink href={github} aria-label={`GitHub for ${title}`} className='ui-icon-button interactive-link'>
                        <GitHub className='w-5 h-5' />
                      </NextLink>
                    )}

                    {url && (
                      <NextLink href={url} aria-label={`External Deployment for ${title}`} className='ui-icon-button interactive-link'>
                        <Link className='w-5 h-5' />
                      </NextLink>
                    )}
                  </div>
                )}
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

            <div className='mt-auto flex flex-wrap pt-5'>
              {tech.map((tool) => (
                <TechLabel
                  key={tool.technology}
                  name={tool.technology}
                  icon={tool.icon}
                  radii={tool.radii}
                />
              ))}
            </div>
          </div>
        </div>
      </article>
    </Transition>
  );
};

export { FeaturedProject };
