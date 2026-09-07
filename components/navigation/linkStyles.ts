import clsx from 'clsx';

// Keep the current page distinct from temporary hover or keyboard menu focus.
const navigationLinkState = (current: boolean, active = false) => clsx(
  current
    ? 'bg-teal-400/12 text-teal-300 ring-1 ring-teal-400/20'
    : 'text-slate-100 hover:bg-white/5 hover:text-white focus-visible:bg-white/5 focus-visible:text-white',
  !current && active && 'bg-white/5 text-white',
);

export { navigationLinkState };
