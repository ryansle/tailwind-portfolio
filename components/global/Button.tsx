import Link from 'next/link';
import clsx from 'clsx';

import type { ComponentPropsWithRef, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'outline';

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
  ComponentPropsWithRef<'a'> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  ComponentPropsWithRef<'button'> & {
    href?: undefined;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'ui-button-primary',
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

const LinkButton = (props: LinkButtonProps) => {
  const {
    href,
    children,
    className,
    fullWidth,
    icon,
    iconPosition = 'leading',
    size = 'md',
    variant = 'primary',
    ...anchorProps
  } = props;

  const classes = sharedClassName(variant, size, fullWidth, className);

  const isExternalLike = /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(href);
  const shouldUseAnchor = isExternalLike || (anchorProps.download != null && anchorProps.download !== false) || anchorProps.target === '_blank';

  if (shouldUseAnchor) {
    return (
      <a href={href} className={classes} {...anchorProps}>
        {content(children, icon, iconPosition)}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...anchorProps}>
      {content(children, icon, iconPosition)}
    </Link>
  );
};

const NativeButton = (props: NativeButtonProps) => {
  const {
    children,
    className,
    fullWidth,
    icon,
    iconPosition = 'leading',
    size = 'md',
    variant = 'primary',
    type = 'button',
    ...buttonProps
  } = props;

  return (
    <button type={type} className={sharedClassName(variant, size, fullWidth, className)} {...buttonProps}>
      {content(children, icon, iconPosition)}
    </button>
  );
};

const Button = (props: ButtonProps) =>
  props.href !== undefined ? <LinkButton {...props} /> : <NativeButton {...props} />;

export { Button };
