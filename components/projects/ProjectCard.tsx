// Components
import NextLink from 'next/link';
import { ProjectScreenshot } from './ProjectScreenshot';
import { TechLabel } from '@/components/experience/TechLabel';
import { AiFillGithub as GitHub } from 'react-icons/ai';
import { HiExternalLink as Link } from 'react-icons/hi';

// Types
import type { Project } from '@/lib/types';

// Constants
import { categoryBadgeClasses } from '@/lib/projects';

// Utilities
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

  const tech = convertTechStack(techStack).slice(0, 4);

  return (
    <article className='group motion-parent interactive-card ui-card surface-hover motion-lift motion-glow flex h-full min-w-0 flex-col overflow-hidden'>
      <div className='relative aspect-[16/10] w-full shrink-0 overflow-hidden border-b border-white/10 sm:aspect-video'>
        <ProjectScreenshot title={title} image={image} />
      </div>

      <div className='flex flex-1 flex-col p-5 tracking-wide sm:p-6'>
        <div className='text-left'>
          <div className='mb-2 flex items-start justify-between gap-3'>
            <div className='flex min-w-0 flex-wrap items-center gap-2.5'>
              <h3 className='min-w-0 text-xl font-semibold tracking-[-0.02em] text-white [overflow-wrap:anywhere]'>
                {title}
              </h3>
              <span className={`ui-badge ${categoryBadgeClasses[category]}`}>
                {category}
              </span>
            </div>
            {(github || url) && (
              <div className='ml-auto flex shrink-0 items-center gap-2'>
                {github && (
                  <NextLink href={github} aria-label={`GitHub for ${title}`} className='ui-icon-button interactive-link'>
                    <GitHub className='h-4 w-4' aria-label='GitHub icon' />
                  </NextLink>
                )}

                {url && (
                  <NextLink href={url} aria-label={`External Deployment for ${title}`} className='ui-icon-button interactive-link'>
                    <Link className='h-5 w-5' aria-label='External URL icon' />
                  </NextLink>
                )}
              </div>
            )}
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
    </article>
  );
};

export { ProjectCard };
