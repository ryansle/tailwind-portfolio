// Components
import { FeaturedProject } from '@/components/projects';
import { Button, Divider } from '@/components/global';
import { FaArrowRightLong as ArrowRight } from 'react-icons/fa6';

// Types
import type { Project } from '@/lib/types';

type SelectedWorkProps = {
  projects: Project[];
}

const SelectedWork = (props: SelectedWorkProps) => {
  const { projects } = props;

  return (
    <section className='space-y-8'>
      <div className='section-intro-tight'>
        <p className='ui-eyebrow section-heading'>Selected Work</p>
        <h2 className='page-title mb-4'>A faster read on how I build, ship, and make tradeoffs.</h2>
        <p className='section-copy'>
          A small set of projects that best represent my front-end range across product UI, implementation quality, and audience-facing work.
        </p>
      </div>

      <div className='space-y-6'>
        {projects.map((project, index) => (
          <div key={project.title}>
            <FeaturedProject
              project={project}
              index={index}
            />
            {index !== projects.length - 1 && <Divider />}
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-3 sm:flex-row'>
        <Button
          href='/projects'
          icon={<ArrowRight />}
          variant='outline'
        >
          View all projects
        </Button>
      </div>
    </section>
  );
};

export { SelectedWork };
