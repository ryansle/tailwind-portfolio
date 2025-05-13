// Components
import { Layout } from '@/components/navigation';
import { Biography, Education } from '@/components/about';
import { Divider } from '@/components/global';

// Types
import type { SocialMedia } from '@/lib/types';
import type { Metadata } from 'next';

// Utilities
import { fetchSocialMedia } from '@/data/fetch';

export const metadata: Metadata = {
  title: 'Ryan Le - About',
  description: 'Hello! I\'m Ryan Le, a passionate front-end web developer and 2021 graduate from the University of Nebraska-Lincoln.',
  keywords: ['ryan le', 'front-end developer', 'brooklyn software engineer', 'ryan le engineer', 'ryan le software', 'ryan le brooklyn', 'ryan le sioux falls', 'ryan le lincoln', 'ryan le south dakota', 'ryan le nebraska', 'ui engineer', 'ryan le ui engineer'],
  openGraph: {
    url: 'https://ryanle.dev/about',
    title: 'Ryan Le - About',
    description: 'Hello! I\'m Ryan Le, a passionate front-end web developer and 2021 graduate from the University of Nebraska-Lincoln.',
    siteName: 'Ryan Le\'s Portfolio',
    images: [
      {
        url: 'https://ryanle.dev/seo/about.png',
        width: 2056,
        height: 870,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const AboutPage = async () => {
  const socials = await fetchSocialMedia();

  return (
    <Layout>
      <Biography socials={socials as SocialMedia[]} />
      <Divider />
      <Education />
    </Layout>
  );
};

export default AboutPage;

export const revalidate = 30;
