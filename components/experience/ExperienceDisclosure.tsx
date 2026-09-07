'use client';

import clsx from 'clsx';
import { useId, useState } from 'react';
import type { ReactNode } from 'react';
import { Transition } from '@headlessui/react';
import { FaChevronDown as ChevronDown } from 'react-icons/fa6';

type ExperienceDisclosureProps = {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
};

const ExperienceDisclosure = ({ title, defaultOpen = true, children }: ExperienceDisclosureProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <section className='mb-8'>
      <button
        type='button'
        onClick={() => setIsOpen((open) => !open)}
        className='mb-5 flex w-full items-center gap-4 rounded-surface border border-teal-400/15 bg-teal-400/5 px-5 py-4 text-left hover:border-teal-400/30 hover:bg-teal-400/8'
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className={clsx('flex h-10 w-10 items-center justify-center rounded-full border', isOpen ? 'border-teal-300/30 bg-teal-300/12 text-teal-100' : 'border-white/10 bg-white/4 text-slate-300')}>
          <ChevronDown className={clsx('text-sm transition-transform', isOpen ? 'rotate-0' : '-rotate-90')} />
        </span>
        <div className='flex min-w-0 flex-1 items-center gap-4'>
          <span className='type-meta whitespace-nowrap text-teal-200'>{title}</span>
          <span className='h-px flex-1 bg-linear-to-r from-teal-400/30 to-transparent' />
        </div>
      </button>

      <Transition
        as='div'
        id={panelId}
        unmount={false}
        show={isOpen}
        enter='transition-all duration-(--duration-base) ease-out'
        enterFrom='opacity-0 -translate-y-3 scale-[0.98]'
        enterTo='opacity-100 translate-y-0 scale-100'
        leave='transition-all duration-(--duration-fast) ease-in'
        leaveFrom='opacity-100 translate-y-0 scale-100'
        leaveTo='opacity-0 -translate-y-2 scale-[0.98]'
        className='origin-top overflow-hidden'
      >
        {children}
      </Transition>
    </section>
  );
};

export { ExperienceDisclosure };
