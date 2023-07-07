// Components
import { Layout } from '@/components/navigation';
import { ProjectsList } from '@/components/projects';

// Types
import type { Project } from '@/lib/types';

// Utilities
import { fetchProjects } from '@/data/fetch';

const ProjectsPage = async () => {
  const projects = await fetchProjects();

  const featured = projects.filter((project) => project.featured);

  return (
    <Layout>
      <h1 className='font-bold text-display2 mb-6'>
        Things I&apos;ve Built
      </h1>

      <ProjectsList projects={featured as Project[]} />
    </Layout>
  );
};

export default ProjectsPage;
