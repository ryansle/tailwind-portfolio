'use client';

// Components
import NextImage from 'next/image';
import NextLink from 'next/link';
import { TechLabel } from '@/components/experience/TechLabel';
import { AiFillGithub as GitHub } from 'react-icons/ai';
import { HiExternalLink as Link } from 'react-icons/hi';
import { Transition } from '@headlessui/react';

// Types
import type { Project } from '@/lib/types';

// Utilities
import { convertImageUrl } from '@/utils/convert';

type FeaturedProjectProps = {
  project: Project;
  index: number;
}

const categoryBadgeClasses: Record<Project['category'], string> = {
  Professional: 'border-sky-400/25 bg-sky-400/10 text-sky-100',
  Personal: 'border-amber-300/25 bg-amber-300/10 text-amber-100',
  Freelance: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-100',
};

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

  const tech = techStack.map((item) => item.fields);
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
      <article className='ui-card motion-parent overflow-hidden'>
        <div className='grid gap-0 xl:grid-cols-[minmax(340px,0.85fr)_minmax(0,1.15fr)] xl:items-stretch'>
          <div className={`relative min-h-[280px] overflow-hidden xl:h-full ${reverse ? 'xl:order-2' : 'xl:order-1'}`}>
            <NextLink href={(url ?? github) as string} className='absolute inset-0'>
              <NextImage
                fill
                className='motion-media object-cover'
                src={convertImageUrl(image)}
                alt={`${title} Project`}
              />
            </NextLink>
            <div className='absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent' />
          </div>

          <div className={`flex flex-col justify-between p-6 tracking-wide sm:p-7 ${reverse ? 'xl:order-1' : 'xl:order-2'}`}>
            <div>
              <div className='mb-4 flex flex-wrap gap-2'>
                <span className='ui-badge ui-badge-brand'>Featured</span>
              </div>

              <div className='mb-2 flex flex-wrap items-center gap-3'>
                <h3 className='text-3xl font-semibold tracking-[-0.03em] text-white'>
                  {title}
                </h3>
                <span className={`ui-badge ${categoryBadgeClasses[category]}`}>
                  {category}
                </span>
              </div>
              {subtitle && (
                <p className='mb-4 text-sm font-medium tracking-wide text-soft'>
                  {subtitle}
                </p>
              )}

              <p className='type-body mb-5'>
                {summary}
              </p>

              <div className='flex flex-wrap'>
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

            {(github || url) && (
              <div className='mt-6 flex items-center gap-3'>
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
        </div>
      </article>
    </Transition>
  );
};

export { FeaturedProject };
