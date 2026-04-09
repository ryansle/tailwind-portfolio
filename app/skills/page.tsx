// Components
import { Layout } from '@/components/navigation/Layout';
import { SkillsTable } from '@/components/skills/SkillsTable';
import { Button, Divider, PageIntro } from '@/components/global';
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
import { createPageMetadata } from '@/lib/seo';

type SkillEntry = Skill & {
  type: 'web' | 'creative';
};

export const metadata: Metadata = createPageMetadata({
  title: 'Skills',
  description: 'See Ryan Le’s capabilities across front-end systems, product UI delivery, React, Next.js, TypeScript, Tailwind, and creative operations through Ryan Meetup.',
  path: '/skills',
  image: '/seo/skills.png',
});

const SkillsPage = async () => {
  const skills = await fetchSkills() as SkillEntry[];

  const sortByConfidence = (a: SkillEntry, b: SkillEntry) => b.confidence - a.confidence;

  const webSkills = skills.filter((skill) => skill.type === 'web').sort(sortByConfidence);
  const creativeSkills = skills.filter((skill) => skill.type === 'creative').sort(sortByConfidence);
  const visibleWebSkills = webSkills.filter((skill) => skill.visibility);
  const visibleCreativeSkills = creativeSkills.filter((skill) => skill.visibility);
  const capabilityGroups = [
    {
      title: 'Product UI systems',
      description: 'Component architecture, interaction patterns, and UI systems built to stay coherent as products evolve.',
      icon: <LayerGroup className='h-4 w-4 text-teal-400' />,
    },
    {
      title: 'Shipping front-end work',
      description: 'App UI, responsive marketing surfaces, and implementation work that translates design accurately under real constraints.',
      icon: <LaptopCode className='h-4 w-4 text-teal-400' />,
    },
    {
      title: 'Creative direction',
      description: 'Programming, partnerships, branding, and experiential storytelling through Ryan Meetup and related work.',
      icon: <Sparkles className='h-4 w-4 text-teal-400' />,
    },
  ];

  const emphasis = 'text-teal-500 font-semibold';

  return (
    <Layout>
      <PageIntro
        eyebrow='Skills'
        title='My Skillsets'
        subtitle='I think less in terms of tool inventory and more in terms of capability: interface systems, product UI delivery, and creative operations that can actually be executed.'
      />

      <div className='grid gap-4 lg:grid-cols-3'>
        {capabilityGroups.map((group) => (
          <div key={group.title} className='proof-card'>
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
              My strongest engineering work is front-end product development: design systems, reusable components, responsive UI, and the implementation decisions that keep products usable as they scale.
            </p>
            <p>
              I&apos;m best when design direction needs to become shipped software in React, Next.js, TypeScript, and Tailwind, with enough structure that the work remains maintainable after launch.
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
              Outside engineering, I help run Ryan Meetup, a community brand and event series built around shared identity, humor, and intentionally ridiculous programming.
            </p>
            <p>
              That work spans concept development, creative direction, partnerships, promotion, and live execution, with coverage from <NextLink className={emphasis} href='https://www.nytimes.com/2023/03/28/nyregion/ryan-meetup-nyc.html'>The New York Times</NextLink>, the <NextLink className={emphasis} href='https://www.latimes.com/california/newsletter/2023-09-11/at-the-dumb-and-wholesome-ryan-rave-everyone-belongs-and-everyones-ryan-essential-california'>Los Angeles Times</NextLink>, <NextLink className={emphasis} href='https://www.cbsnews.com/losangeles/video/rallying-ryans-host-meet-ups-around-the-world/'>CBS News</NextLink>, and <NextLink className={emphasis} href='https://abcnews.go.com/WNN/video/rytoberfest-weekend-104132029'>ABC News</NextLink>.
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
