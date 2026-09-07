import clsx from 'clsx';
import { Button, PageIntro } from '@/components/global';
import { FaArrowRightLong as ArrowRight } from 'react-icons/fa6';
import { HiSparkles as Sparkles } from 'react-icons/hi2';
import { MdOutlineDevices as Devices, MdOutlineGroups as Collaboration, MdOutlineCampaign as Campaign, MdOutlineRoute as Route } from 'react-icons/md';

import { contactHref } from '@/lib/contact';

const HiringBlurb = () => {
  const strengths = [
    {
      title: 'Product UI implementation',
      description: 'Design systems, app surfaces, and front-end architecture that stay usable as products grow.',
      icon: <Devices className='h-5 w-5 text-teal-400' />,
    },
    {
      title: 'Community & event programming',
      description: 'Formats, rituals, and live experiences that make participation easy and give people a reason to return.',
      icon: <Collaboration className='h-5 w-5 text-teal-400' />,
    },
    {
      title: 'From idea to execution',
      description: 'The planning, systems, logistics, and follow-through needed to turn a promising concept into something real.',
      icon: <Route className='h-5 w-5 text-teal-400' />,
    },
    {
      title: 'Brand, stories & partnerships',
      description: 'A recognizable voice, clear story, and thoughtful collaborations that help good ideas travel further.',
      icon: <Campaign className='h-5 w-5 text-teal-400' />,
    },
  ];

  return (
    <section className='grid gap-10 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] xl:items-center'>
      <div className='order-2 grid gap-4 xl:order-1'>
        {strengths.map((strength, index) => (
          <div
            key={strength.title}
            className={clsx(index === 0 ? 'pt-0 border-t-0' : 'border-t border-white/10 pt-4')}
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
        <PageIntro
          as='h2'
          eyebrow='Work together'
          title='Looking for someone who can build the thing—and help people care about it?'
          subtitle='I work best where product thinking, creative direction, and practical execution overlap. That might be a polished interface, a community initiative, an event people talk about afterward, or the systems connecting all three.'
        />

        <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
          <Button
            className='w-full sm:w-auto'
            href={contactHref('hiring')}
            icon={<Sparkles />}
            variant='primary'
          >
            Start a conversation
          </Button>
          <Button
            className='w-full sm:w-auto'
            href='/initiatives'
            icon={<ArrowRight />}
            iconPosition='trailing'
            variant='outline'
          >
            Explore initiatives
          </Button>
        </div>
      </div>
    </section>
  );
};

export { HiringBlurb };
