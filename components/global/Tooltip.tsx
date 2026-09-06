'use client';

// Components
import { useCallback, useId, useLayoutEffect, useRef, useState } from 'react';

// Types
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

  const [open, setOpen] = useState(false);
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

  return (
    <div
      className={`relative${className ? ` ${className}` : ''}`}
      onBlur={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        aria-describedby={open ? tooltipId : undefined}
        className='rounded-[0.95rem] outline-none ring-offset-0 focus-visible:ring-2 focus-visible:ring-white/30'
        tabIndex={0}
      >
        {children}
      </div>

      <div
        aria-hidden={!open}
        className={`pointer-events-none absolute top-full left-1/2 z-30 mt-3 w-[min(17rem,calc(100vw-1.5rem))] transition duration-200 ${open ? 'opacity-100' : 'opacity-0'}`}
        id={tooltipId}
        ref={tooltipRef}
        role='tooltip'
        style={{ transform: `translate(calc(-50% + ${offset}px), ${open ? '0' : '-0.25rem'})` }}
      >
        <div className='rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-[var(--surface-strong)] px-3.5 py-2.5 text-left shadow-[var(--shadow)]'>
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
