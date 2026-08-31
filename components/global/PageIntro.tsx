import clsx from 'clsx';

import type { ReactNode } from 'react';

type PageIntroProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  as?: 'h1' | 'h2';
  size?: 'page' | 'section';
  className?: string;
};

const PageIntro = (props: PageIntroProps) => {
  const {
    eyebrow,
    title,
    subtitle,
    as: Heading = 'h1',
    size = 'page',
    className,
  } = props;

  return (
    <div className={clsx('section-intro', className)}>
      <p className={clsx(size === 'page' ? 'ui-eyebrow' : 'type-meta', 'section-heading')}>{eyebrow}</p>
      <Heading
        className={clsx(
          size === 'page' ? 'type-page-title' : 'type-section-title',
          subtitle ? (size === 'page' ? 'mb-4' : 'mb-3') : undefined,
        )}
      >
        {title}
      </Heading>
      {subtitle && (
        <p className='section-copy'>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export { PageIntro };
