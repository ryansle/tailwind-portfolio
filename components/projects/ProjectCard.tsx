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
    category,
    techStack,
  } = props.project;

  const tech = techStack.map((item) => item.fields);

  return (
    <div className='rounded-xl border border-gray-700 mb-4'>
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
          <h3 className='font-semibold text-xl'>
            {title}
          </h3>
          <div className='flex space-x-2 items-center'>
            {github && (
              <NextLink href={github}>
                <GitHub className='w-4 h-4' />
              </NextLink>
            )}

            {url && (
              <NextLink href={url}>
                <Link className='w-5 h-5' />
              </NextLink>
            )}
          </div>
        </div>

        <div className='text-left'>
          <h4 className='font-medium text-sm'>
            {subtitle}
          </h4>

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
