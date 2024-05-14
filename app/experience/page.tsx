// Components
import { Layout } from '@/components/navigation';
import { History } from '@/components/experience';

// Types
import { Experience } from '@/lib/types';

// Utilities
import { fetchExperience } from '@/data/fetch';

const ExperiencePage = async () => {
  const experiences = await fetchExperience();

  return (
    <Layout>
      <h1 className='font-bold text-display2 tracking-wider'>
        Work Experience
      </h1>

      <History experiences={experiences as Experience[]} />
    </Layout>
  );
};

export default ExperiencePage;

export const revalidate = 30;