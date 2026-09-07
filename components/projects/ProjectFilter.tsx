'use client';

import clsx from 'clsx';
import { Fragment, useState } from 'react';
import type { ReactNode } from 'react';
import type { Project } from '@/lib/types';
import { categoryBadgeClasses } from '@/lib/projects';
import { EmptyContent } from '@/components/global/EmptyContent';

type FilterProject = {
  id: string;
  category: Project['category'];
  content: ReactNode;
};

type ProjectFilterProps = {
  projects: FilterProject[];
};

const filterOptions: Array<Project['category'] | 'All'> = ['All', 'Professional', 'Personal', 'Freelance'];

// Cards are rendered by the server; this boundary owns only their selection.
const ProjectFilter = ({ projects }: ProjectFilterProps) => {
  const [activeFilter, setActiveFilter] = useState<Project['category'] | 'All'>('All');
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <>
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
              ? projects.length
              : projects.filter((project) => project.category === option).length;

            return (
              <button
                key={option}
                type='button'
                onClick={() => setActiveFilter(option)}
                className={clsx('shrink-0 rounded-full border px-3 py-2 text-xs font-medium tracking-[0.02em] transition hover:brightness-125 focus-visible:outline-solid focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-current sm:px-4 sm:text-sm sm:tracking-wide', option === 'All'
                    ? 'border-teal-400/40 bg-teal-400/15 text-teal-200'
                    : categoryBadgeClasses[option], isActive
                    ? 'ring-2 ring-inset ring-current'
                    : '')}
                aria-pressed={isActive}
              >
                {option} <span className='ml-1 opacity-75'>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {filteredProjects.length === 0 && (
        <div role='status'>
          <EmptyContent>
            {projects.length === 0
              ? 'No additional projects are published yet.'
              : 'No projects match this category. Choose All to see the available work.'}
          </EmptyContent>
        </div>
      )}
      <div className='grid grid-cols-1 items-stretch gap-6 md:grid-cols-2'>
        {filteredProjects.map((project) => (
          <Fragment key={project.id}>{project.content}</Fragment>
        ))}
      </div>
    </>
  );
};

export { ProjectFilter };
