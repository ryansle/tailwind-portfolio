'use client';

import type { ReactNode } from 'react';
import clsx from 'clsx';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { HiX } from 'react-icons/hi';

type DialogFrameProps = {
  open: boolean;
  onClose: () => void;
  closeLabel: string;
  className: string;
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
};

// Callers provide a DialogTitle in the header or body; Headless UI owns focus
// trapping, Escape/backdrop dismissal, and focus restoration to the trigger.
const DialogFrame = ({ open, onClose, closeLabel, className, header, footer, children }: DialogFrameProps) => {
  /*
    Headless UI only autofocuses elements it finds marked with `data-autofocus`,
    and falls back to the dialog container itself when there are none. Close is
    the one control every dialog has, so it takes the opening focus.
  */
  const closeButton = (
    <button
      type='button'
      data-autofocus
      onClick={onClose}
      aria-label={closeLabel}
      className={clsx('ui-icon-button h-11 w-11 shrink-0', !header && 'absolute right-3 top-3 z-10')}
    >
      <HiX className='h-5 w-5' aria-hidden />
    </button>
  );

  return (
    <Dialog open={open} onClose={onClose} className='fixed inset-0 z-60'>
      <DialogBackdrop transition className='fixed inset-0 bg-slate-950/90 backdrop-blur-xs transition duration-(--duration-fast) data-closed:opacity-0 motion-reduce:transition-none' />
      <div className='fixed inset-0 overflow-y-auto p-3 sm:p-6'>
        <div className='flex min-h-full items-center justify-center'>
          <DialogPanel
            transition
            className={clsx('relative flex w-full flex-col overflow-hidden transition duration-(--duration-fast) data-closed:opacity-0 motion-reduce:transition-none', className)}
          >
            {header ? (
              <div className='flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5'>
                {header}
                {closeButton}
              </div>
            ) : closeButton}
            <div className='min-h-0 overflow-y-auto overscroll-contain'>
              {children}
            </div>
            {footer}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export { DialogFrame };
