'use client';

import clsx from 'clsx';
import type { ReactNode } from 'react';

import toast from 'react-hot-toast';
import type { Toast } from 'react-hot-toast';
import { IoCloseSharp as Close } from 'react-icons/io5';
import { FaCheckCircle as Check, FaExclamationCircle as Alert } from 'react-icons/fa';

import { contactEmail } from '@/lib/constants';

type AlertProps = {
  toast: Toast;
  icon: ReactNode;
  title: string;
  description: string;
  /** Failures interrupt; a success can wait for a pause in what's being read. */
  assertive?: boolean;
};

const AlertToast = ({ toast: t, icon, title, description, assertive = false }: AlertProps) => {
  // A custom toast renders outside react-hot-toast's own ToastBar, so it has to
  // carry the live-region props itself or nothing is announced.
  const live = assertive
    ? ({ role: 'alert', 'aria-live': 'assertive' } as const)
    : t.ariaProps;

  return (
    <div
      {...live}
      className={clsx(t.visible ? 'animate-enter' : 'animate-leave', 'ui-card pointer-events-auto grid w-full max-w-md grid-cols-12 p-4 text-white')}
    >
      <div className='col-span-1 flex items-center justify-center'>
        {icon}
      </div>
      <div className='col-span-10 pl-4 pr-6'>
        <p className='text-lg font-semibold'>{title}</p>
        <p className='text-sm tracking-wide text-soft'>
          {description}
        </p>
      </div>
      <div className='col-span-1 flex items-center'>
        <button type='button' onClick={() => toast.dismiss(t.id)}>
          <span className='sr-only'>Close</span>
          <Close className='w-8 h-8 shrink-0' />
        </button>
      </div>
    </div>
  );
};

const notifyMessageSent = () => toast.custom((t: Toast) => (
  <AlertToast
    toast={t}
    icon={<Check className='h-8 w-8 fill-green-500 shrink-0' />}
    title='Email sent!'
    description='Expect an email back from me soon!'
  />
));

const notifyMessageFailed = () => toast.custom((t: Toast) => (
  <AlertToast
    assertive
    toast={t}
    icon={<Alert className='h-8 w-8 fill-red-500 shrink-0' />}
    title="Message didn't send"
    description={`Something went wrong on the way out. Try again, or email me directly at ${contactEmail}.`}
  />
));

export { AlertToast, notifyMessageSent, notifyMessageFailed };
