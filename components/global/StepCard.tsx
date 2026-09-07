import clsx from 'clsx';

type StepCardProps = {
  step: string;
  title: string;
  description: string;
  className?: string;
};

const StepCard = ({ step, title, description, className }: StepCardProps) => (
  <div className={clsx('subtle-panel px-5 py-5', className)}>
    <p className='text-xs font-semibold tracking-[0.24em] text-teal-300'>{step}</p>
    <p className='mt-3 text-base font-semibold tracking-wide text-white'>{title}</p>
    <p className='mt-3 text-sm leading-7 text-soft'>{description}</p>
  </div>
);

export { StepCard };
