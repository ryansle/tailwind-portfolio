// Components
import { Layout } from '@/components/navigation';
import { Biography, Education } from '@/components/about';
import { Divider } from '@/components/global';

// Types
import type { SocialMedia } from '@/lib/types';

// Utilities
import { fetchSocialMedia } from '@/data/fetch';

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
