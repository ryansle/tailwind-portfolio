// Components
import NextImage from 'next/image';
import NextLink from 'next/link';
import { Divider } from '@/components/global';
import { TechLabel } from '@/components/experience/TechLabel';
import { AiFillGithub as GitHub } from 'react-icons/ai';
import { HiExternalLink as Link } from 'react-icons/hi';

// Types
import type { Project } from '@/lib/types';

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
    techStack,
  } = props.project;

  const tech = techStack.map((item) => item.fields);

  return (
    <div className='group motion-parent interactive-card ui-card surface-hover motion-lift motion-glow mb-4 overflow-hidden'>
      <div className='relative aspect-video w-full overflow-hidden'>
        <NextImage
          fill
          className='motion-media rounded-t-[var(--radius-lg)] object-cover'
          src={convertImageUrl(image)}
          alt={`${title} Project`}
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent' />
      </div>

      <div className='p-5 tracking-wide'>
        <div className='flex justify-between items-center'>
          <h3 className='font-semibold text-xl tracking-wider text-left'>
            {title}
          </h3>
          <div className='flex space-x-2 items-center'>
            {github && (
              <NextLink href={github} aria-label={`GitHub for ${title}`} className='ui-icon-button interactive-link'>
                <GitHub className='w-4 h-4' aria-label='GitHub icon' />
              </NextLink>
            )}

            {url && (
              <NextLink href={url} aria-label={`External Deployment for ${title}`} className='ui-icon-button interactive-link'>
                <Link className='w-5 h-5' aria-label='External URL icon' />
              </NextLink>
            )}
          </div>
        </div>

        <div className='text-left'>
          {subtitle && (
            <h4 className='text-sm font-medium tracking-wider text-soft'>
              {subtitle}
            </h4>
          )}

          <div className='flex flex-wrap mt-1'>
            {tech.map((tool) => (
              <TechLabel
                key={tool.technology}
                name={tool.technology}
                icon={tool.icon}
                radii={tool.radii}
              />
            ))}
          </div>

          <Divider margins='md' />

          <p className='text-sm text-muted'>
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
