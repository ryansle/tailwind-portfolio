// Components
import { Hero, HiringBlurb, References } from '@/components/home';
import { Layout } from '@/components/navigation';
import { Divider } from '@/components/global';

// Types
import type { Skill, Reference } from '@/lib/types';
import type { Metadata } from 'next';

// Utilities
import { fetchSkills, fetchTestimonies } from '@/data/fetch';

export const metadata: Metadata = {
  title: 'Ryan Le - Web Engineer',
  description: 'Ryan Le is a Web Engineer based out of Brooklyn, New York. Working on all things front-end at CrowdStrike.',
  keywords: ['ryan le', 'front-end developer', 'brooklyn software engineer', 'ryan le engineer', 'ryan le software', 'contact ryan le', 'ui engineer', 'ryan le ui engineer', 'ryan le frontend dev', 'ryan le crowdstrike', 'ryan le ryan meetup', 'ryan le american express', 'ryan le amex', 'ryan le hoffman strategy group', 'ryan le nelnet', 'ryan le re-logic'],
  openGraph: {
    url: 'https://ryanle.dev/',
    title: 'Ryan Le - Web Engineer',
    description: 'Ryan Le is a Web Engineer based out of Brooklyn, New York. Working on all things front-end at CrowdStrike.',
    siteName: 'Ryan Le\'s Portfolio',
    images: [
      {
        url: 'https://ryanle.dev/seo/home.png',
        width: 2340,
        height: 1120,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const Home = async () => {
  const skills = await fetchSkills();
  const references = await fetchTestimonies();

  const currentStack = skills.filter((skill) => skill.primary);

  return (
    <Layout>
      <Hero skills={currentStack as Skill[]} />
      <Divider />
      <HiringBlurb />
      <Divider />
      <References references={references as Reference[]} />
    </Layout>
  );
};

export default Home;

export const revalidate = 30;