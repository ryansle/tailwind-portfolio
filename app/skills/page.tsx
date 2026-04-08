// Components
import { Layout } from '@/components/navigation/Layout';
import { SkillsTable } from '@/components/skills/SkillsTable';
import { Button, Divider } from '@/components/global';
import NextLink from 'next/link';
import { FaHandshake as Handshake } from 'react-icons/fa';
import {
  FaLayerGroup as LayerGroup,
  FaLaptopCode as LaptopCode,
  FaWandMagicSparkles as Sparkles,
} from 'react-icons/fa6';

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
  const visibleWebSkills = webSkills.filter((skill) => skill.visibility);
  const visibleCreativeSkills = creativeSkills.filter((skill) => skill.visibility);
  const capabilityGroups = [
    {
      title: 'Product UI systems',
      description: 'Design systems, component architecture, interaction polish, and implementation consistency.',
      icon: <LayerGroup className='h-4 w-4 text-teal-400' />,
    },
    {
      title: 'Shipping front-end work',
      description: 'Responsive marketing surfaces, app UI, production-ready code, and close collaboration with design.',
      icon: <LaptopCode className='h-4 w-4 text-teal-400' />,
    },
    {
      title: 'Creative direction',
      description: 'Branding, programming, partnerships, and experiential storytelling through Ryan Meetup.',
      icon: <Sparkles className='h-4 w-4 text-teal-400' />,
    },
  ];

  const emphasis = 'text-teal-500 font-semibold';

  return (
    <Layout>
      <div className='max-w-6xl'>
        <p className='ui-eyebrow mb-3'>Skills</p>
        <h1 className='page-title mb-4'>
          My Skillsets
        </h1>
        <p className='type-body'>
          I think less in terms of isolated tools and more in terms of capabilities: building interface systems, shipping polished product work, and creating experiences people remember.
        </p>
      </div>

      <div className='grid gap-4 lg:grid-cols-3'>
        {capabilityGroups.map((group) => (
          <div key={group.title} className='subtle-panel p-5'>
            <div className='mb-3 flex items-center gap-2'>
              {group.icon}
              <p className='type-meta'>{group.title}</p>
            </div>
            <p className='text-sm leading-7 text-soft'>{group.description}</p>
          </div>
        ))}
      </div>

      <section className='section-panel'>
        <div className='mb-6 space-y-4'>
          <div className='flex flex-wrap items-center justify-between gap-4'>
            <h2 className='section-title'>
              Web Engineering
            </h2>
            <span className='ui-badge ui-badge-brand'>
              {visibleWebSkills.length} core tools
            </span>
          </div>
          <div className='space-y-4 type-body'>
            <p>
              My strongest engineering work is front-end product development: design systems, reusable components, responsive UI, and the implementation details that make products feel polished and dependable.
            </p>
            <p>
              I&apos;m best when design intent needs to become real shipped software in React, Next.js, TypeScript, and Tailwind, with enough structure that the work stays maintainable after launch.
            </p>
          </div>
        </div>
        <SkillsTable
          header='Technology'
          skills={webSkills as Skill[]}
        />
      </section>

      <Divider />

      <section className='section-panel'>
        <div className='mb-6 space-y-4'>
          <div className='flex flex-wrap items-center justify-between gap-4'>
            <h2 className='section-title'>
              Creative Production & Community Building
            </h2>
            <span className='ui-badge ui-badge-brand'>
              {visibleCreativeSkills.length} creative capabilities
            </span>
          </div>
          <div className='space-y-4 type-body'>
            <p>
              Outside of engineering, I help run Ryan Meetup, a national community brand and event series built around shared identity, humor, and intentionally ridiculous programming.
            </p>
            <p>
              That work spans concept creation, creative direction, partnerships, promotion, and live-event execution, with coverage from <NextLink className={emphasis} href='https://www.nytimes.com/2023/03/28/nyregion/ryan-meetup-nyc.html'>The New York Times</NextLink>, the <NextLink className={emphasis} href='https://www.latimes.com/california/newsletter/2023-09-11/at-the-dumb-and-wholesome-ryan-rave-everyone-belongs-and-everyones-ryan-essential-california'>Los Angeles Times</NextLink>, <NextLink className={emphasis} href='https://www.cbsnews.com/losangeles/video/rallying-ryans-host-meet-ups-around-the-world/'>CBS News</NextLink>, and <NextLink className={emphasis} href='https://abcnews.go.com/WNN/video/rytoberfest-weekend-104132029'>ABC News</NextLink>.
            </p>
          </div>
        </div>
        <SkillsTable
          header='Skill'
          skills={creativeSkills as Skill[]}
        />

        <Button
          className='mt-6'
          fullWidth
          href='https://www.ryanmeetup.com/about'
          target='_blank'
          rel='noreferrer'
          icon={<Handshake />}
          variant='outline'
        >
          Learn more about the Ryan Meetup
        </Button>
      </section>
    </Layout>
  );
};

export default SkillsPage;

export const revalidate = 30;
