'use client';

import clsx from 'clsx';
import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';

import type { ReactNode } from 'react';

const VIEWPORT_MARGIN = 12;

type TooltipProps = {
  children: ReactNode;
  className?: string;
  detail?: string;
  label: string;
};

const Tooltip = (props: TooltipProps) => {
  const {
    children,
    className,
    detail,
    label,
  } = props;

  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const open = (hovered || focused) && !dismissed;
  const [offset, setOffset] = useState(0);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const tooltipId = useId();

  // Nudge the tooltip back inside the viewport when an edge icon would push it off.
  const clampToViewport = useCallback(() => {
    const tooltip = tooltipRef.current;

    if (!tooltip) return;

    const { left, right } = tooltip.getBoundingClientRect();
    const overflowLeft = VIEWPORT_MARGIN - left;
    const overflowRight = right - (window.innerWidth - VIEWPORT_MARGIN);

    if (overflowLeft > 0) return setOffset((current) => current + overflowLeft);
    if (overflowRight > 0) return setOffset((current) => current - overflowRight);
  }, []);

  useLayoutEffect(() => {
    if (open) clampToViewport();
  }, [clampToViewport, open]);

  // Listen outside the trigger too: a pointer-opened tooltip need not have focus.
  useEffect(() => {
    if (!open) return;

    const dismiss = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setDismissed(true);
    };

    document.addEventListener('keydown', dismiss);
    return () => document.removeEventListener('keydown', dismiss);
  }, [open]);

  return (
    <div
      className={clsx('relative', className)}
      onBlur={(event) => {
        if (event.currentTarget.contains(event.relatedTarget)) return;
        setFocused(false);
        if (!hovered) setDismissed(false);
      }}
      onFocus={() => setFocused(true)}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => {
        setHovered(false);
        if (!focused) setDismissed(false);
      }}
    >
      <div
        aria-describedby={open ? tooltipId : undefined}
        className='rounded-surface outline-hidden ring-offset-0 focus-visible:ring-2 focus-visible:ring-white/30'
        tabIndex={0}
      >
        {children}
      </div>

      <div
        aria-hidden={!open}
        className={clsx('absolute top-full left-1/2 z-30 w-[min(17rem,calc(100vw-1.5rem))] pt-3 transition duration-(--duration-fast)', open ? 'visible pointer-events-auto opacity-100' : 'invisible pointer-events-none opacity-0')}
        id={tooltipId}
        ref={tooltipRef}
        role='tooltip'
        style={{ transform: `translate(calc(-50% + ${offset}px), ${open ? '0' : '-0.25rem'})` }}
      >
        <div className='rounded-field border border-(--border-strong) bg-(--surface-strong) px-3.5 py-2.5 text-left shadow-(--shadow)'>
          <p className='text-sm font-semibold tracking-wide text-white'>
            {label}
          </p>
          {detail && (
            <p className='mt-1 text-xs leading-5 text-soft'>
              {detail}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export { Tooltip };
