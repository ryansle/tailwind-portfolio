// Components
import { History } from '@/components/experience/History';
import { PageIntro } from '@/components/global';

// Types
import type { Metadata } from 'next';

// Utilities
import { fetchExperience } from '@/data/fetch';
import { metadataFor } from '@/lib/seo';

export const metadata: Metadata = metadataFor('/experience');

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
