import clsx from 'clsx';

import type { ReactNode } from 'react';

type PageIntroProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  supporting?: ReactNode;
  className?: string;
  titleClassName?: string;
  width?: 'page' | 'section';
};

const PageIntro = (props: PageIntroProps) => {
  const {
    eyebrow,
    title,
    subtitle,
    supporting,
    className,
    titleClassName,
    width = 'page',
  } = props;

  return (
    <div className={clsx(width === 'page' ? 'section-intro' : 'section-intro-tight', className)}>
      <p className='ui-eyebrow section-heading'>{eyebrow}</p>
      <h1 className={clsx('page-title', subtitle ? 'mb-4' : undefined, titleClassName)}>
        {title}
      </h1>
      {subtitle && (
        <p className='section-copy'>
          {subtitle}
        </p>
      )}
      {supporting && (
        <div className='mt-6'>
          {supporting}
        </div>
      )}
    </div>
  );
};

export { PageIntro };
