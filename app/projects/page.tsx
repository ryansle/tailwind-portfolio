// Components
import { Layout } from '@/components/navigation';
import { ProjectsList } from '@/components/projects';

// Types
import type { Project } from '@/lib/types';

// Utilities
import { fetchProjects } from '@/data/fetch';

const ProjectsPage = async () => {
  const projects = await fetchProjects();

  return (
    <Layout>
      <h1 className='font-bold text-display2 mb-6 tracking-wider'>
        Things I&apos;ve Built
      </h1>

      <ProjectsList projects={projects as Project[]} />
    </Layout>
  );
};

export default ProjectsPage;
