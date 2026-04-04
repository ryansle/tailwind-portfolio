// Components
import { Layout } from '@/components/navigation/Layout';
import { SkillsTable } from '@/components/skills/SkillsTable';
import { Divider } from '@/components/global';
import NextLink from 'next/link';
import { FaHandshake as Handshake } from 'react-icons/fa';

// Types
import type { Skill } from '@/lib/types';
import type { Metadata } from 'next';

// Utilities
import { fetchSkills } from '@/data/fetch';

export const metadata: Metadata = {
  title: 'Ryan Le - Skills',
  description: 'Learn more about what Ryan Le\'s skillsets as both an engineer and a creative',
  keywords: ['ryan le', 'front-end developer', 'brooklyn software engineer', 'ryan le engineer', 'ryan le software', 'contact ryan le', 'ui engineer', 'ryan le ui engineer', 'ryan le frontend dev', 'ryan le crowdstrike', 'ryan le ryan meetup', 'ryan le american express', 'ryan le amex', 'ryan le hoffman strategy group', 'ryan le nelnet', 'ryan le re-logic'],
  openGraph: {
    url: 'https://ryanle.dev/skills',
    title: 'Ryan Le - Skills',
    description: 'Learn more about what Ryan Le\'s skillsets as both an engineer and a creative',
    siteName: 'Ryan Le\'s Portfolio',
    images: [
      {
        url: 'https://ryanle.dev/seo/skills.png',
        width: 2056,
        height: 1163,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const SkillsPage = async () => {
  const skills = await fetchSkills();

  const webSkills = skills.filter((skill) => skill.type === 'web');
  const creativeSkills = skills.filter((skill) => skill.type === 'creative');

  const emphasis = 'text-teal-500 font-semibold';

  return (
    <Layout>
      <h1 className='page-title mb-2'>
        My Skillsets
      </h1>

      <h2 className='section-title mb-2'>
        Web Engineering
      </h2>
      <div className='mb-6 space-y-4 text-lg tracking-wide text-gray-400'>
        <p>
          Throughout my career, I have primarily focused on front-end web development, specializing in the creation of design systems and web components that bring life to diverse applications. The front-end realm is where I truly excel as a developer.
        </p>
        <p>
          While my experiences as a full-stack developer have been limited, I embrace the opportunity to expand my skill set. I am eager to grow and become as proficient in building APIs as I am in crafting front-end solutions.
        </p>
        <p>
          Here are a few of my favorite languages, frameworks, and technologies that I enjoy working with:
        </p>
      </div>
      <SkillsTable
        header='Technology'
        skills={webSkills as Skill[]}
      />

      <Divider margins='xl' />

      <h2 className='section-title mb-2'>
        Creative Production & Community Building
      </h2>
      <div className='mb-6 space-y-4 text-lg tracking-wide text-gray-400'>
        <p>
          Outside of writing code, I lead one of the most absurd event series in the country — Ryan Meetup, a national community built only for people named Ryan.
        </p>
        <p>
          I handle concept creation, branding, programming, promotion, and partnerships for each of our 15+ events. From Ryan Raves to Ryan Summits, I bring people together through shared identity, inside jokes, and a deeply unserious sense of seriousness.
        </p>
        <p>
          These projects have been featured in <NextLink className={emphasis} href='https://www.nytimes.com/2023/03/28/nyregion/ryan-meetup-nyc.html'>The New York Times</NextLink>, the <NextLink className={emphasis} href='https://www.latimes.com/california/newsletter/2023-09-11/at-the-dumb-and-wholesome-ryan-rave-everyone-belongs-and-everyones-ryan-essential-california'>Los Angeles Times</NextLink>, <NextLink className={emphasis} href='https://www.cbsnews.com/losangeles/video/rallying-ryans-host-meet-ups-around-the-world/'>CBS News</NextLink>, and <NextLink className={emphasis} href='https://abcnews.go.com/WNN/video/rytoberfest-weekend-104132029'>ABC News</NextLink>, just to name a few — and prove how far a ridiculous idea can go with the right execution.
        </p>
      </div>
      <SkillsTable
        header='Skill'
        skills={creativeSkills as Skill[]}
      />

      <NextLink 
        className='motion-lift motion-glow w-full border mt-4 border-gray-400 rounded-xl py-2 flex items-center justify-center hover:border-teal-500'
        href='/ryan-meetup'
      >
        <Handshake className='mr-4' /> Learn more about the Ryan Meetup
      </NextLink>
    </Layout>
  );
};

export default SkillsPage;

export const revalidate = 30;
