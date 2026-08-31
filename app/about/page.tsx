// Components
import { Biography } from '@/components/about/Biography';
import { Education } from '@/components/about/Education';
import { Divider, PageIntro } from '@/components/global';

// Types
import type { Metadata } from 'next';

// Utilities
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'About',
  description: 'Learn more about Ryan Le: front-end engineer, community builder, Ryan Meetup co-founder, and Software Engineering graduate based in Brooklyn, NY.',
  path: '/about',
});

const AboutPage = () => {
  return (
    <>
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
