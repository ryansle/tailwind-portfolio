// Components
import { Layout } from '@/components/navigation';
import { History } from '@/components/experience';

// Types
import type { Experience } from '@/lib/types';
import type { Metadata } from 'next';

// Utilities
import { fetchExperience } from '@/data/fetch';

export const metadata: Metadata = {
  title: 'Ryan Le - Experience',
  description: 'Learn more about Ryan Le\'s previous industry experience.',
  keywords: ['ryan le', 'front-end developer', 'brooklyn software engineer', 'ryan le engineer', 'ryan le software', 'contact ryan le', 'ui engineer', 'ryan le ui engineer', 'ryan le frontend dev', 'ryan le crowdstrike', 'ryan le ryan meetup', 'ryan le american express', 'ryan le amex', 'ryan le hoffman strategy group', 'ryan le nelnet', 'ryan le re-logic'],
  openGraph: {
    url: 'https://ryanle.dev/experience',
    title: 'Ryan Le - Experience',
    description: 'Learn more about Ryan Le\'s previous industry experience.',
    siteName: 'Ryan Le\'s Portfolio',
    images: [
      {
        url: 'https://ryanle.dev/seo/experience.png',
        width: 2056,
        height: 1162,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const ExperiencePage = async () => {
  const experiences = await fetchExperience();

  return (
    <Layout>
      <h1 className='font-bold text-display2 tracking-wider'>
        Work Experience
      </h1>

      <History experiences={experiences as Experience[]} />
    </Layout>
  );
};

export default ExperiencePage;

export const revalidate = 30;