// Components
import { Biography } from '@/components/about/Biography';
import { Education } from '@/components/about/Education';
import { Divider, JsonLd, PageIntro } from '@/components/global';

// Types
import type { Metadata } from 'next';

// Utilities
import { metadataFor } from '@/lib/seo';
import { pageSchema } from '@/lib/schema';

export const metadata: Metadata = metadataFor('/about');

const AboutPage = () => {
  return (
    <>
      <JsonLd data={pageSchema('/about', 'ProfilePage')} />
      <PageIntro
        eyebrow='About'
        title='Front-end engineer, community builder, and creative operator.'
        subtitle='A closer look at the work, background, and community projects that shape how I build product UI, front-end systems, and audience-facing experiences.'
      />
      <Biography />
      <Divider />
      <Education />
    </>
  );
};

export default AboutPage;
