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
      description: 'Design systems, app surfaces, and front-end architecture that stay usable as products grow.',
      icon: <Devices className='h-5 w-5 text-teal-400' />,
    },
    {
      title: 'Cross-functional collaboration',
      description: 'I work closely with design, product, and engineering to keep scope sharp and implementation moving.',
      icon: <Collaboration className='h-5 w-5 text-teal-400' />,
    },
    {
      title: 'Craft and polish',
      description: 'Hierarchy, motion, responsiveness, and interaction states that make interfaces feel considered.',
      icon: <Motion className='h-5 w-5 text-teal-400' />,
    },
    {
      title: 'Modern front-end delivery',
      description: 'Strong delivery in React, Next.js, TypeScript, and Tailwind from concept through launch.',
      icon: <Code className='h-5 w-5 text-teal-400' />,
    },
  ];

  return (
    <SlideUpWhenVisible delay={1.2} duration={0.8}>
      <section className='grid gap-10 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] xl:items-center'>
        <div className='order-2 grid gap-4 xl:order-1'>
          {strengths.map((strength, index) => (
            <div
              key={strength.title}
              className={`${index === 0 ? 'pt-0 border-t-0' : 'border-t border-white/10 pt-4'}`}
            >
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

        <div className='order-1 max-w-4xl xl:order-2 xl:justify-self-end'>
          <p className='ui-eyebrow mb-3'>Work together</p>
          <h2 className='page-title mb-4'>Need a front-end engineer who can make product decisions hold up in the interface?</h2>
          <p className='type-body'>
            I take on full-time roles, freelance builds, and focused front-end engagements where implementation quality matters. The best fit is work that needs strong systems thinking, reliable execution, and a high bar for interface detail.
          </p>

          <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
            <Button
              className='w-full sm:w-auto'
              href='/contact'
              icon={<Sparkles />}
              variant='primary'
            >
              Start a conversation
            </Button>
            <Button
              className='w-full sm:w-auto'
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
