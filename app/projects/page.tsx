// Components
import { Layout } from '@/components/navigation';
import { ProjectsList } from '@/components/projects';

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
      <h1 className='font-bold text-display2 mb-6 tracking-wider'>
        Things I&apos;ve Built
      </h1>

      <ProjectsList projects={projects as Project[]} />
    </Layout>
  );
};

export default ProjectsPage;

export const revalidate = 30;