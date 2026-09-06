import NextLink from 'next/link';
import clsx from 'clsx';

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

type ButtonSize = 'sm' | 'md';

type IconPosition = 'leading' | 'trailing';

type SharedProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  size?: ButtonSize;
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
  outline: 'ui-button-outline',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3.5 py-2 text-sm gap-2',
  md: 'gap-3',
};

const content = (children: ReactNode, icon?: ReactNode, iconPosition: IconPosition = 'leading') => {
  const iconNode = icon && <span className='shrink-0 text-base'>{icon}</span>;

  return (
    <>
      {iconPosition === 'leading' && iconNode}
      <span>{children}</span>
      {iconPosition === 'trailing' && iconNode}
    </>
  );
};

const sharedClassName = (variant: ButtonVariant, size: ButtonSize, fullWidth?: boolean, className?: string) =>
  clsx(
    variantClasses[variant],
    sizeClasses[size],
    'disabled:cursor-not-allowed disabled:opacity-50',
    fullWidth && 'w-full',
    className,
  );

const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    fullWidth,
    icon,
    iconPosition = 'leading',
    size = 'md',
    variant = 'primary',
    ...rest
  } = props;

  const classes = sharedClassName(variant, size, fullWidth, className);

  if ('href' in props && props.href) {
    const { href, ...anchorProps } = rest as LinkButtonProps;
    const resolvedHref = href as string;
    const isExternalLike = resolvedHref.startsWith('http') || resolvedHref.startsWith('mailto:') || resolvedHref.startsWith('tel:');
    const shouldUseAnchor = isExternalLike || Boolean(anchorProps.download) || anchorProps.target === '_blank';

    if (shouldUseAnchor) {
      return (
        <a href={resolvedHref} className={classes} {...anchorProps}>
          {content(children, icon, iconPosition)}
        </a>
      );
    }

    return (
      <NextLink href={resolvedHref} className={classes}>
        {content(children, icon, iconPosition)}
      </NextLink>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content(children, icon, iconPosition)}
    </button>
  );
};

export { Button };
