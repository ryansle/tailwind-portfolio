// Components
import { Hero } from '@/components/home/Hero';
import { HiringBlurb } from '@/components/home/HiringBlurb';
import { References } from '@/components/home/References';
import { Layout } from '@/components/navigation/Layout';
import { Divider } from '@/components/global';

// Types
import type { Skill, Reference } from '@/lib/types';
import type { Metadata } from 'next';

// Utilities
import { fetchSkills, fetchTestimonies } from '@/data/fetch';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  description: 'Ryan Le is a UI Engineer in New York building front-end systems, product UI, and implementation-heavy experiences at CrowdStrike and beyond.',
  path: '/',
  image: '/seo/home.png',
});

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
