// Components
import NextImage from 'next/image';
import NextLink from 'next/link';
import { Divider } from '@/components/global';
import { TechLabel } from '@/components/experience';
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
    <div className='rounded-xl border border-gray-700 mb-4 transition ease-in duration-300 hover:scale-102'>
      <div className='relative w-full aspect-video'>
        <NextImage
          fill
          className='rounded-t-xl'
          src={convertImageUrl(image)}
          alt={`${title} Project`}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className='p-4 tracking-wide'>
        <div className='flex justify-between items-center'>
          <h3 className='font-semibold text-xl tracking-wider text-left'>
            {title}
          </h3>
          <div className='flex space-x-2 items-center'>
            {github && (
              <NextLink href={github} aria-label={`GitHub for ${title}`}>
                <GitHub className='w-4 h-4' aria-label='GitHub icon' />
              </NextLink>
            )}

            {url && (
              <NextLink href={url} aria-label={`External Deployment for ${title}`}>
                <Link className='w-5 h-5' aria-label='External URL icon' />
              </NextLink>
            )}
          </div>
        </div>

        <div className='text-left'>
          {subtitle && (
            <h4 className='font-medium text-sm tracking-wider'>
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

          <p className='text-sm'>
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
