// Components
import { Layout } from '@/components/navigation/Layout';
import { History } from '@/components/experience/History';
import { PageIntro } from '@/components/global';

// Types
import type { Experience } from '@/lib/types';
import type { Metadata } from 'next';

// Utilities
import { fetchExperience } from '@/data/fetch';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Experience',
  description: 'Explore Ryan Le’s experience across CrowdStrike, American Express, agency environments, and community-led work focused on front-end systems and product UI.',
  path: '/experience',
  image: '/seo/experience.png',
});

const ExperiencePage = async () => {
  const experiences = await fetchExperience();

  return (
    <Layout>
      <PageIntro
        eyebrow='Experience'
        title='Front-end work shaped by product demands, interface systems, and range.'
        subtitle='My career has moved across enterprise teams, agency work, and self-directed ventures, but the throughline is consistent: front-end systems, product UI, and execution that holds up once the work leaves design files.'
      />

      <History experiences={experiences as Experience[]} />
    </Layout>
  );
};

export default ExperiencePage;

export const revalidate = 30;
