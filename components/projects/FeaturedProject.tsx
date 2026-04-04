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

const FeaturedTag = ({ order }: { order: boolean }) => (
  <div className={`${order ? 'text-left' : 'text-right'} text-teal-500 uppercase tracking-widest font-semibold`}>
    Featured
  </div>
);

const FeaturedProject = (props: FeaturedProjectProps) => {
  const {
    title,
    subtitle,
    summary,
    image,
    github,
    url,
    techStack,
  } = props.project;
  const { index } = props;

  const tech = techStack.map((item) => item.fields);
  const order = index % 2 !== 0;

  return (
    <>
              <Transition
                as='div'
                appear={true}
                show={true}
                enter='transition ease-out duration-500'
                enterFrom='opacity-0 translate-y-4'
                enterTo='opacity-100 translate-y-0'
              >
        <div className='motion-parent grid grid-cols-12 tracking-wide mb-10 xl:mb-20'>
          <div className={`${order ? 'pr-8 mt-4 order-last xl:order-first' : 'order-last pl-8 mt-4'} col-span-12 xl:col-span-5`}>
            <FeaturedTag order={order} />
            <div className={`${order ? 'text-left' : 'text-right'}`}>
              <h2 className='text-3xl font-semibold mb-1 tracking-wider'>
                {title}
              </h2>
              <h3 className='mb-4 font-medium tracking-wider'>
                {subtitle}
              </h3>
            </div>
            <div className='motion-lift motion-glow rounded-xl border bg-zinc-950 p-4 border-gray-700'>
              <p className='text-gray-400'>
                {summary}
              </p>
            </div>
            <div className={`${order ? 'justify-start' : 'justify-end'} mt-2 flex flex-wrap`}>
              {tech.map((tool) => (
                <TechLabel
                  key={tool.technology}
                  name={tool.technology}
                  icon={tool.icon}
                  radii={tool.radii}
                />
              ))}
            </div>
            <div className={`${order ? 'justify-start' : 'justify-end'} flex items-center space-x-5 mt-4`}>
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
          </div>

          <div className={`${order ? 'order-first xl:order-last' : 'order-first'} col-span-12 xl:col-span-7`}>
            <div className='relative w-full aspect-video'>
              <NextLink href={(url ?? github) as string}>
                <NextImage
                  fill
                  className='motion-media rounded-xl'
                  src={convertImageUrl(image)}
                  alt={`${title} Project`}
                  style={{ objectFit: 'cover' }}
                />
              </NextLink>
            </div>
          </div>
        </div >
      </Transition>
    </>
  );
};

export { FeaturedProject };
