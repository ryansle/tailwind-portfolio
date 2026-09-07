import { Hero } from '@/components/home/Hero';
import { DeliveryPreview } from '@/components/home/DeliveryPreview';
import { HiringBlurb } from '@/components/home/HiringBlurb';
import { InitiativesPreview } from '@/components/home/InitiativesPreview';
import { References } from '@/components/home/References';
import { Divider } from '@/components/global';

import type { Metadata } from 'next';

import { fetchSkills, fetchTestimonies } from '@/data/fetch';
import { metadataFor } from '@/lib/seo';
import { getPrimarySkills, prepareSkills } from '@/lib/skills';

export const metadata: Metadata = metadataFor('/');

// CMS edits become eligible for request-driven regeneration after 30 seconds.
export const revalidate = 30;

const Home = async () => {
  const [skills, references] = await Promise.all([fetchSkills(), fetchTestimonies()]);

  const currentStack = prepareSkills(getPrimarySkills(skills));

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
