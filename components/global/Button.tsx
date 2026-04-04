import NextLink from 'next/link';
import clsx from 'clsx';

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';

type SharedProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  icon?: ReactNode;
  variant?: ButtonVariant;
};

type LinkButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'ui-button-primary',
  secondary: 'ui-button-secondary',
  ghost: 'ui-button-ghost',
  outline: 'ui-button-outline',
};

const content = (children: ReactNode, icon?: ReactNode) => (
  <>
    {icon && <span className='shrink-0 text-base'>{icon}</span>}
    <span>{children}</span>
  </>
);

const sharedClassName = (variant: ButtonVariant, fullWidth?: boolean, className?: string) =>
  clsx(
    variantClasses[variant],
    'gap-3',
    fullWidth && 'w-full',
    className,
  );

const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    fullWidth,
    icon,
    variant = 'primary',
    ...rest
  } = props;

  const classes = sharedClassName(variant, fullWidth, className);

  if ('href' in props && props.href) {
    const { href, ...anchorProps } = rest as LinkButtonProps;
    const resolvedHref = href as string;
    const isExternalLike = resolvedHref.startsWith('http') || resolvedHref.startsWith('mailto:') || resolvedHref.startsWith('tel:');
    const shouldUseAnchor = isExternalLike || Boolean(anchorProps.download) || anchorProps.target === '_blank';

    if (shouldUseAnchor) {
      return (
        <a href={resolvedHref} className={classes} {...anchorProps}>
          {content(children, icon)}
        </a>
      );
    }

    return (
      <NextLink href={resolvedHref} className={classes}>
        {content(children, icon)}
      </NextLink>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content(children, icon)}
    </button>
  );
};

export { Button };
