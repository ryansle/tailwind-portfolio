import { FeaturedProject } from './FeaturedProject';
import { ProjectCard } from './ProjectCard';
import { ProjectFilter } from './ProjectFilter';
import { Divider, PageIntro } from '@/components/global';
import { EmptyContent } from '@/components/global/EmptyContent';

import type { Project } from '@/lib/types';

type ProjectsListProps = {
  projects: Project[];
}

const ProjectsList = (props: ProjectsListProps) => {
  const { projects } = props;
  if (projects.length === 0) return <EmptyContent>No projects are published yet. Check back soon for selected work.</EmptyContent>;

  const featured = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className='space-y-10'>
      <section className='space-y-6'>
        <PageIntro
          as='h2'
          size='section'
          eyebrow='Featured Work'
          title='Projects that best represent my product and engineering range.'
          subtitle="These are the projects I'd point to first when someone wants to understand how I approach UI quality, implementation detail, and the tradeoffs behind real shipped work."
        />

        {featured.length === 0 && <EmptyContent>No projects are featured yet. Explore the work below.</EmptyContent>}
        {featured.map((project: Project, index: number) => (
          <div key={project.id}>
            <FeaturedProject
              project={project}
              index={index}
            />

            {index !== featured.length - 1 && (
              <Divider />
            )}
          </div>
        ))}
      </section>

      <Divider />

      <section className='space-y-6'>
        <PageIntro
          as='h2'
          size='section'
          eyebrow='More Projects'
          title='Additional work across professional, freelance, and personal contexts.'
          subtitle="Products, platforms, and tools I've built for teams, clients, and my own ideas."
        />

        <ProjectFilter projects={otherProjects.map((project) => ({
          id: project.id,
          category: project.category,
          content: <ProjectCard project={project} />,
        }))} />
      </section>
    </div>
  );
};

export { ProjectsList };
