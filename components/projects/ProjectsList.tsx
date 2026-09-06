'use client';

// Components
import { FeaturedProject, ProjectCard } from '@/components/projects';
import { Divider, PageIntro } from '@/components/global';

// Built-in Types
import { useState } from 'react';

// Types
import type { Project } from '@/lib/types';
import { categoryBadgeClasses } from '@/lib/projects';

type ProjectsListProps = {
  projects: Project[];
}

const ProjectsList = (props: ProjectsListProps) => {
  const { projects } = props;
  const [activeFilter, setActiveFilter] = useState<Project['category'] | 'All'>('All');

  const featured = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);
  const filterOptions: Array<Project['category'] | 'All'> = ['All', 'Professional', 'Personal', 'Freelance'];
  const filteredProjects = activeFilter === 'All'
    ? otherProjects
    : otherProjects.filter((project) => project.category === activeFilter);

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

      {featured.map((project: Project, index: number) => (
        <div key={project.title}>
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

        <div className='subtle-panel px-4 py-4 sm:px-5'>
          <div className='mb-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3'>
            <p className='type-meta text-teal-200'>Filter By Project Type</p>
            <p className='text-sm text-soft'>
              {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} shown
            </p>
          </div>

          <div className='flex flex-nowrap gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:gap-3 sm:overflow-visible sm:pb-0'>
            {filterOptions.map((option) => {
              const isActive = activeFilter === option;
              const count = option === 'All'
                ? otherProjects.length
                : otherProjects.filter((project) => project.category === option).length;

              return (
                <button
                  key={option}
                  type='button'
                  onClick={() => setActiveFilter(option)}
                  className={`shrink-0 rounded-full border px-3 py-2 text-xs font-medium tracking-[0.02em] transition hover:brightness-125 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-current sm:px-4 sm:text-sm sm:tracking-wide ${
                    option === 'All'
                      ? 'border-teal-400/40 bg-teal-400/[0.15] text-teal-200'
                      : categoryBadgeClasses[option]
                  } ${
                    isActive
                      ? 'ring-2 ring-inset ring-current'
                      : ''
                  }`}
                  aria-pressed={isActive}
                >
                  {option} <span className='ml-1 opacity-75'>{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className='grid grid-cols-1 items-stretch gap-6 md:grid-cols-2'>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export { ProjectsList };
