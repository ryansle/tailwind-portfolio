// Components
import { Hero } from '@/components/home/Hero';
import { DeliveryPreview } from '@/components/home/DeliveryPreview';
import { HiringBlurb } from '@/components/home/HiringBlurb';
import { InitiativesPreview } from '@/components/home/InitiativesPreview';
import { References } from '@/components/home/References';
import { Divider } from '@/components/global';

// Types
import type { Metadata } from 'next';

// Utilities
import { fetchSkills, fetchTestimonies } from '@/data/fetch';
import { metadataFor } from '@/lib/seo';

export const metadata: Metadata = metadataFor('/');

const Home = async () => {
  const skills = await fetchSkills();
  const references = await fetchTestimonies();

  const currentStack = skills.filter((skill) => skill.primary);

  return (
    <>
      <Hero skills={currentStack} />
      <Divider />
      <DeliveryPreview />
      <Divider />
      <InitiativesPreview />
      <Divider />
      <HiringBlurb />
      <Divider />
      <References references={references} />
    </>
  );
};

export default Home;
