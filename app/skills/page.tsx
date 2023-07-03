// Components
import { Layout } from '@/components/navigation';
import { SkillsTable } from '@/components/skills';

// Types
import type { Skill } from '@/lib/types';

// Utilities
import { fetchSkills } from '@/data/fetch';

const SkillsPage = async () => {
  const skills = await fetchSkills();

  const primarySkills = skills.filter((skill) => skill.primary);
  const restOfSkills = skills.filter((skill) => !skill.primary);

  return (
    <Layout>
      <h1 className='font-bold text-display2 mb-6'>
        My Skillsets
      </h1>

      <h2 className='font-bold text-3xl mb-4'>
        Web Development
      </h2>
      <div className='text-lg space-y-4 mb-6 tracking-wide text-gray-400'>
        <p>
          Throughout my career, I have primarily focused on front-end web development, specializing in the creation of design systems and web components that bring life to diverse applications. The front-end realm is where I truly excel as a developer.
        </p>
        <p>
          While my experiences as a full-stack developer have been limited, I embrace the opportunity to expand my skill set. I am eager to grow and become as proficient in building APIs as I am in crafting front-end solutions.
        </p>
        <p>
          Here are a few of my favorite languages, frameworks, and technologies that I enjoy working with:
        </p>
        <SkillsTable
          skills={[primarySkills, restOfSkills].flat() as Skill[]}
        />
      </div>
    </Layout>
  );
};

export default SkillsPage;
