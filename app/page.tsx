// Components
import { Hero } from '@/components/home/Hero';
import { HiringBlurb } from '@/components/home/HiringBlurb';
import { References } from '@/components/home/References';
import { Divider } from '@/components/global';

// Types
import type { Metadata } from 'next';

// Utilities
import { fetchSkills, fetchTestimonies } from '@/data/fetch';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  description: 'Ryan Le is a New York web engineer and community builder creating thoughtful digital experiences.',
  path: '/',
});

const Home = async () => {
  const skills = await fetchSkills();
  const references = await fetchTestimonies();

  const currentStack = skills.filter((skill) => skill.primary);

  return (
    <>
      <Hero skills={currentStack} />
      <Divider />
      <HiringBlurb />
      <Divider />
      <References references={references} />
    </>
  );
};

export default Home;
