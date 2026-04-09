'use client';

// Components
import { FeaturedProject, ProjectCard } from '@/components/projects';
import { Divider } from '@/components/global';

// Built-in Types
import { useMemo, useState } from 'react';

// Types
import type { Project } from '@/lib/types';

type ProjectsListProps = {
  projects: Project[];
}

const ProjectsList = (props: ProjectsListProps) => {
  const { projects } = props;
  const [activeFilter, setActiveFilter] = useState<Project['category'] | 'All'>('All');

  const featured = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);
  const filterOptions: Array<Project['category'] | 'All'> = ['All', 'Professional', 'Personal', 'Freelance'];
  const filteredProjects = useMemo(
    () => activeFilter === 'All'
      ? otherProjects
      : otherProjects.filter((project) => project.category === activeFilter),
    [activeFilter, otherProjects],
  );
  const twoColumnProjects = useMemo(
    () => [
      filteredProjects.filter((_, index) => index % 2 === 0),
      filteredProjects.filter((_, index) => index % 2 === 1),
    ],
    [filteredProjects],
  );
  const threeColumnProjects = useMemo(
    () => [
      filteredProjects.filter((_, index) => index % 3 === 0),
      filteredProjects.filter((_, index) => index % 3 === 1),
      filteredProjects.filter((_, index) => index % 3 === 2),
    ],
    [filteredProjects],
  );

  return (
    <div className='space-y-10'>
      <section className='space-y-6'>
        <div className='section-intro-tight'>
          <p className='type-meta section-heading'>Featured Work</p>
          <h2 className='section-title mb-3'>Projects that best represent my product and engineering range.</h2>
          <p className='section-copy'>
            These are the projects I&apos;d point to first when someone wants to understand how I approach UI quality, implementation detail, and the tradeoffs behind real shipped work.
          </p>
        </div>

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
        <div className='section-intro-tight'>
          <p className='type-meta section-heading'>More Builds</p>
          <h2 className='section-title mb-3'>Additional work across professional, freelance, and personal contexts.</h2>
          <p className='section-copy'>
            Not every project needs a case-study treatment. This grid is meant to be scanned quickly, with category badges and concise summaries doing most of the work.
          </p>
        </div>

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
                  className={`shrink-0 rounded-full border px-3 py-2 text-xs font-medium tracking-[0.02em] transition sm:px-4 sm:text-sm sm:tracking-wide ${
                    isActive
                      ? 'border-teal-400/40 bg-teal-400/12 text-teal-100'
                      : 'border-white/10 bg-white/[0.03] text-soft hover:border-white/20 hover:bg-white/[0.05] hover:text-white'
                  }`}
                  aria-pressed={isActive}
                >
                  {option} <span className='ml-1 text-white/55'>{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className='space-y-5 md:hidden'>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

        <div className='hidden gap-4 md:grid xl:hidden md:grid-cols-2'>
          {twoColumnProjects.map((column, columnIndex) => (
            <div key={columnIndex} className='space-y-4'>
              {column.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                />
              ))}
            </div>
          ))}
        </div>

        <div className='hidden gap-4 xl:grid xl:grid-cols-3'>
          {threeColumnProjects.map((column, columnIndex) => (
            <div key={columnIndex} className='space-y-4'>
              {column.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export { ProjectsList };
