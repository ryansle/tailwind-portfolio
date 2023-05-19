// Utilities
import clsx from 'clsx';

// Types
import type { ReactNode } from 'react';

type HeadingProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  className?: string;
  children: ReactNode;
  bold?: boolean;
};

const getVariantClasses = (bold: boolean) => {
  const fontWeight = clsx([
    bold && 'font-bold',
    !bold && 'font-medium',
  ]);

  return clsx([fontWeight]);
};

const Heading = (props: HeadingProps) => {
  const {
    size = 'lg',
    className,
    children,
    bold = false
  } = props;

  const styles = 'tracking-wider';

  const renderHeading = () => {
    switch (size) {
      case '3xl':
        return <h1 className={`${styles} text-9xl`}>{children}</h1>;
      case '2xl':
        return <h1 className={`${styles} text-7xl`}>{children}</h1>;
      case 'xl':
        return <h1 className={`${styles} text-5xl`}>{children}</h1>;
      case 'lg':
        return <h2 className={`${styles} text-4xl`}>{children}</h2>;
      case 'md':
        return <h3 className={`${styles} text-3xl`}>{children}</h3>;
      default:
        return <h4 className={`${styles} text-xl`}>{children}</h4>;
    }
  };

  return (
    <div className={clsx([className, getVariantClasses(bold)])}>
      {renderHeading()}
    </div>
  );
};

export { Heading };
