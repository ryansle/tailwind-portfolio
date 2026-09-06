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
        title='Engineer, organizer, and enthusiastic starter of things.'
        subtitle='A closer look at the product work, events, communities, and slightly unusual ideas that shape how I build—and what I choose to build in the first place.'
      />
      <Biography />
      <Divider />
      <Education />
    </>
  );
};

export default AboutPage;
