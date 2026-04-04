'use client';

// Components
import { Button } from '@/components/global';
import SlideUpWhenVisible from '@/hooks/SlideUpWhenVisible';
import { FaArrowRightLong as ArrowRight } from 'react-icons/fa6';
import { HiSparkles as Sparkles } from 'react-icons/hi2';
import { MdOutlineDevices as Devices, MdOutlineGroups as Collaboration, MdOutlineAutoAwesomeMotion as Motion, MdOutlineCode as Code } from 'react-icons/md';

const HiringBlurb = () => {
  const strengths = [
    {
      title: 'Product UI implementation',
      description: 'Design systems, app surfaces, and scalable front-end architecture that hold up in production.',
      icon: <Devices className='h-5 w-5 text-teal-400' />,
    },
    {
      title: 'Cross-functional collaboration',
      description: 'I work closely with design, product, and engineering partners to ship clear decisions quickly and keep momentum high.',
      icon: <Collaboration className='h-5 w-5 text-teal-400' />,
    },
    {
      title: 'Craft and polish',
      description: 'The details matter: hierarchy, motion, responsiveness, and the feeling of using the thing once it ships.',
      icon: <Motion className='h-5 w-5 text-teal-400' />,
    },
    {
      title: 'Modern front-end delivery',
      description: 'Deep comfort with React, Next.js, TypeScript, Tailwind CSS, and the workflows needed to move from concept to launch.',
      icon: <Code className='h-5 w-5 text-teal-400' />,
    },
  ];

  return (
    <SlideUpWhenVisible delay={1.2} duration={0.8}>
      <section className='grid gap-10 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] xl:items-center'>
        <div className='grid gap-4'>
          {strengths.map((strength) => (
            <div key={strength.title} className='border-t border-white/10 pt-4'>
              <div className='mb-3 flex items-center gap-3'>
                {strength.icon}
                <p className='type-meta'>{strength.title}</p>
              </div>
              <p className='text-sm leading-7 text-soft'>
                {strength.description}
              </p>
            </div>
          ))}
        </div>

        <div className='max-w-4xl xl:justify-self-end'>
          <p className='ui-eyebrow mb-3'>Work together</p>
          <h2 className='page-title mb-4'>Need a front-end engineer who can turn product intent into polished UI?</h2>
          <p className='type-body'>
            I take on full-time opportunities, freelance builds, and focused front-end engagements where strong implementation quality matters. The best fit is product work that needs clarity, craft, and clean execution.
          </p>

          <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
            <Button
              href='/contact'
              icon={<Sparkles />}
              variant='primary'
            >
              Start a conversation
            </Button>
            <Button
              href='/projects'
              icon={<ArrowRight />}
              variant='outline'
            >
              View selected work
            </Button>
          </div>
        </div>
      </section>
    </SlideUpWhenVisible>
  );
};

export { HiringBlurb };
