import { History } from '@/components/experience/History';
import { PageIntro } from '@/components/global';

import type { Metadata } from 'next';

import { fetchExperience } from '@/data/fetch';
import { metadataFor } from '@/lib/seo';

export const metadata: Metadata = metadataFor('/experience');

// CMS edits become eligible for request-driven regeneration after 30 seconds.
export const revalidate = 30;

const ExperiencePage = async () => {
  const experiences = await fetchExperience();

  return (
    <>
      <PageIntro
        eyebrow='Experience'
        title='Work shaped by products, people, and the systems connecting them.'
        subtitle='My experience spans enterprise product teams, agency work, community initiatives, and self-directed ventures. The throughline is practical: take an idea seriously, give it structure, and carry it through execution.'
      />

      <History experiences={experiences} />
    </>
  );
};

export default ExperiencePage;
