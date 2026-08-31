// Components
import NextImage from 'next/image';
import NextLink from 'next/link';
import { TechLabel } from '@/components/experience/TechLabel';
import { AiFillGithub as GitHub } from 'react-icons/ai';
import { HiExternalLink as Link } from 'react-icons/hi';

// Types
import type { Project } from '@/lib/types';

// Constants
import { categoryBadgeClasses } from '@/lib/projects';

// Utilities
import { convertImageUrl } from '@/utils/convert';

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

  const tech = techStack.map((item) => item.fields).slice(0, 4);

  return (
    <article className='group motion-parent interactive-card ui-card surface-hover motion-lift motion-glow mb-4 break-inside-avoid-column overflow-hidden'>
      <div className='relative aspect-[16/10] w-full overflow-hidden border-b border-white/10 sm:aspect-video md:min-h-[220px]'>
        <NextImage
          fill
          className='motion-media rounded-t-[var(--radius-lg)] object-cover'
          src={convertImageUrl(image)}
          alt={`${title} Project`}
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent' />
      </div>

      <div className='p-5 tracking-wide'>
        <div className='text-left'>
          <div className='mb-2 flex flex-wrap items-center gap-2.5'>
            <h3 className='text-xl font-semibold tracking-[-0.02em] text-white'>
              {title}
            </h3>
            <span className={`ui-badge ${categoryBadgeClasses[category]}`}>
              {category}
            </span>
          </div>
          {subtitle && (
            <h4 className='text-sm font-medium tracking-wider text-soft'>
              {subtitle}
            </h4>
          )}

          <p className='mt-3 text-sm leading-6 text-muted'>
            {summary}
          </p>

          <div className='mt-4 flex flex-wrap'>
            {tech.map((tool) => (
              <TechLabel
                key={tool.technology}
                name={tool.technology}
                icon={tool.icon}
                radii={tool.radii}
              />
            ))}
          </div>

          {(github || url) && (
            <div className='mt-5 flex flex-wrap items-center gap-3'>
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
      </div>
    </article>
  );
};

export { ProjectCard };
