// Components
import { Layout } from '@/components/navigation/Layout';
import { ProjectsList } from '@/components/projects/ProjectsList';
import { PageIntro } from '@/components/global';

// Types
import type { Project } from '@/lib/types';
import type { Metadata } from 'next';

// Utilities
import { fetchProjects } from '@/data/fetch';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Projects',
  description: 'Browse projects by Ryan Le across product UI, front-end implementation, engineering delivery, and creative work.',
  path: '/projects',
});

const ProjectsPage = async () => {
  const projects = await fetchProjects();

  return (
    <Layout>
      <PageIntro
        eyebrow='Projects'
        title='Things I&apos;ve Built'
        subtitle='A selection of product, engineering, and creative work across team-based delivery, freelance engagements, and self-directed builds. The featured work below is the quickest read on how I approach implementation, interface quality, and shipped outcomes.'
      />

      <ProjectsList projects={projects as Project[]} />
    </Layout>
  );
};

export default ProjectsPage;

export const revalidate = 30;
