import { currentRole } from '@/lib/profile';
import { Button, PageIntro } from '@/components/global';
import { StepCard } from '@/components/global/StepCard';
import { FaArrowRightLong as ArrowRight } from 'react-icons/fa6';

const DeliveryPreview = () => {
  const operatingModel = [
    {
      step: '01',
      title: 'I set the direction',
      description: 'Architecture, constraints, and what counts as done are mine, written into the repo as rules before an agent touches anything.',
    },
    {
      step: '02',
      title: 'Agents do the volume',
      description: 'Implementation, refactors, migrations, and test coverage run in parallel. A week of mechanical editing lands in an afternoon.',
    },
    {
      step: '03',
      title: 'I hold the review gate',
      description: 'Nothing merges because an agent said it worked. I read the diff and run it myself, because they’re confidently wrong often enough.',
    },
  ];

  return (
    <section className='space-y-8'>
      <PageIntro
        as='h2'
        eyebrow='Engineering'
        title='Most of my code gets written by agents now.'
        subtitle='That only works because every call that matters is still mine — what gets built, what the codebase looks like, and what’s good enough to merge.'
      />

      <div className='grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]'>
        <article className='section-panel'>
          <h3 className='type-section-title'>How the work actually moves.</h3>
          <div className='mt-6 grid gap-4 sm:grid-cols-3'>
            {operatingModel.map((phase) => (
              <StepCard key={phase.step} {...phase} />
            ))}
          </div>
        </article>

        <article className='section-panel flex flex-col justify-between'>
          <div>
            <span className='ui-badge ui-badge-brand'>{currentRole.employer}</span>
            <h3 className='mt-5 type-section-title'>Product UI at security scale.</h3>
            <p className='mt-4 type-body'>
              I&apos;m a <span className='text-emphasis'>{currentRole.title}</span> building product surfaces and the front-end systems underneath them, where interface decisions have to hold up for people working incidents.
            </p>
          </div>
          <p className='mt-6 text-sm leading-7 text-muted'>
            The review gate only works in a stack I know cold, which is why front-end craft is still the part I keep sharpest.
          </p>
        </article>
      </div>

      <div className='flex justify-end'>
        <Button href='/skills' icon={<ArrowRight />} iconPosition='trailing' variant='outline'>
          See how I build
        </Button>
      </div>
    </section>
  );
};

export { DeliveryPreview };
