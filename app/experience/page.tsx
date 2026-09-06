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
        title='Front-end work shaped by product demands, interface systems, and range.'
        subtitle='My career has moved across enterprise teams, agency work, and self-directed ventures, but the throughline is consistent: front-end systems, product UI, and execution that holds up once the work leaves design files.'
      />

      <History experiences={experiences} />
    </>
  );
};

export default ExperiencePage;
