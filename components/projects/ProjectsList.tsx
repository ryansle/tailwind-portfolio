// Components
import { FeaturedProject, ProjectCard } from '@/components/projects';
import { Divider } from '@/components/global';
import { Transition } from '@headlessui/react';

// Types
import type { Project } from '@/lib/types';

// Utilities
import clsx from 'clsx';

type ProjectsListProps = {
  projects: Project[];
}

type ProjectGroupProps = {
  projects: Project[];
  title: string;
  subtitle: string;
  align: 'left' | 'center' | 'right';
}

const ProjectGroup = (props: ProjectGroupProps) => {
  const {
    projects,
    title,
    subtitle,
    align,
  } = props;

  const renderGroup = (align: string) => {
    return clsx([
      align === 'left' && 'text-center xl:text-left',
      align === 'center' && 'text-center',
      align === 'right' && 'text-center xl:text-right',
    ]);
  };

  return (
    <div className={`${renderGroup(align)} col-span-12 tracking-wide xl:col-span-4`}>
      <h3 className='font-semibold text-xl mb-2'>
        {title}
      </h3>
      <p className='mb-4'>
        {subtitle}
      </p>
      {projects.map((project: Project) => (
        <ProjectCard
          key={project.title}
          project={project}
        />
      ))}
    </div>
  );
};

const ProjectsList = (props: ProjectsListProps) => {
  const { projects } = props;

  const featured = projects.filter((project) => project.featured);
  const professional = projects.filter((project) => !project.featured && project.category === 'Professional');
  const freelance = projects.filter((project) => !project.featured && project.category === 'Freelance');
  const personal = projects.filter((project) => !project.featured && project.category === 'Personal');

  return (
    <div>
      {featured.map((project: Project, index: number) => (
        <div key={project.title}>
          <FeaturedProject
            project={project}
            index={index}
          />

          {index !== featured.length - 1 && (
            <div className='block xl:hidden'>
              <Divider />
            </div>
          )}
        </div>
      ))}

      <Divider />

      <h2 className='text-center font-bold mb-10 text-3xl lg:text-display3'>
        Other Noteworthy Projects
      </h2>

      <div className='grid grid-cols-12 gap-4'>
        <ProjectGroup
          projects={professional}
          title='Professional Projects'
          subtitle="Projects I've worked on within the industry, as a salaried employee."
          align='left'
        />
        <ProjectGroup
          projects={personal}
          title='Personal Projects'
          subtitle="Projects I've either built just for fun, or for my own purposes."
          align='center'
        />
        <ProjectGroup
          projects={freelance}
          title='Freelance Projects'
          subtitle="Things I work freelance on, usually for smaller companies or individuals."
          align='right'
        />
      </div>
    </div>
  );
};

export { ProjectsList };
