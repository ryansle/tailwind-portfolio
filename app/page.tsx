// Components
import { Hero, HiringBlurb, References } from '@/components/home';
import { Layout } from '@/components/navigation';
import { Divider } from '@/components/global';

// Types
import { Skill, Reference } from '@/lib/types';

// Utilities
import { fetchSkills, fetchTestimonies } from '@/data/fetch';

const Home = async () => {
  const skills = await fetchSkills();
  const references = await fetchTestimonies();

  const currentStack = skills.filter((skill) => skill.primary);

  return (
    <Layout>
      <Hero skills={currentStack as Skill[]} />
      <Divider />
      <HiringBlurb />
      <Divider />
      <References references={references as Reference[]} />
    </Layout>
  );
};

export default Home;