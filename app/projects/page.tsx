// Components
import { Layout } from '@/components/navigation/Layout';
import { ProjectsList } from '@/components/projects/ProjectsList';

// Types
import type { Project } from '@/lib/types';
import type { Metadata } from 'next';

// Utilities
import { fetchProjects } from '@/data/fetch';

export const metadata: Metadata = {
  title: 'Ryan Le - Projects',
  description: 'Learn more about what Ryan Le\'s has built.',
  keywords: ['ryan le', 'front-end developer', 'brooklyn software engineer', 'ryan le engineer', 'ryan le software', 'contact ryan le', 'ui engineer', 'ryan le ui engineer', 'ryan le frontend dev', 'ryan le crowdstrike', 'ryan le ryan meetup', 'ryan le american express', 'ryan le amex', 'ryan le hoffman strategy group', 'ryan le nelnet', 'ryan le re-logic'],
  openGraph: {
    url: 'https://ryanle.dev/projects',
    title: 'Ryan Le - Projects',
    description: 'Learn more about what Ryan Le\'s has built.',
    siteName: 'Ryan Le\'s Portfolio',
    images: [
      {
        url: 'https://ryanle.dev/seo/projects.png',
        width: 2056,
        height: 1160,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const ProjectsPage = async () => {
  const projects = await fetchProjects();

  return (
    <Layout>
      <div className='max-w-6xl'>
        <p className='ui-eyebrow mb-3'>Projects</p>
        <h1 className='page-title mb-4'>
          Things I&apos;ve Built
        </h1>
        <p className='type-body'>
          A selection of product, engineering, and creative work across team-based delivery, freelance engagements, and self-directed builds. The featured work below is the quickest read on how I approach implementation, interface quality, and shipped outcomes.
        </p>
      </div>

      <ProjectsList projects={projects as Project[]} />
    </Layout>
  );
};

export default ProjectsPage;

export const revalidate = 30;
