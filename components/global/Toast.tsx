'use client';

// Components
import { Transition } from '@headlessui/react';
import { IoIosCheckmarkCircle as Check } from 'react-icons/io';
import { IoCloseSharp as Close } from 'react-icons/io5';

// Types
import type { ReactNode } from 'react';

type ToastProps = {
  open: boolean;
  setOpen: (bool: boolean) => void;
  title: string;
  children: ReactNode;
  className?: string;
}

const Toast = (props: ToastProps) => {
  const { open, setOpen, title, children, className } = props;

  return (
    <Transition
      className={`${className} mt-10`}
      show={open}
      enter='transition ease-out duration-100'
      enterFrom='transform opacity-0 scale-95'
      enterTo='transform opacity-100 scale-100'
      leave='transition ease-in duration-75'
      leaveFrom='transform opacity-100 scale-100'
      leaveTo='transform opacity-0 scale-95'
    >
      <div
        className='flex items-center w-full max-w-sm p-4 text-white rounded-lg shadow border border-gray-700'
        role='alert'
      >
        <div className='inline-flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-green-600'>
          <Check className='w-6 h-6' />
          <span className='sr-only'>Check Icon</span>
        </div>

        <div className='mx-5'>
          <h6 className='font-semibold text-sm'>{title}</h6>
          <div className='text-sm font-normal text-gray-400'>
            {children}
          </div>
        </div>
        <button
          type='button'
          className='ml-auto -mx-1.5 -my-1.5 text-gray-400 rounded-lg p-1.5 inline-flex h-8 w-8 hover:text-white hover:bg-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-teal-500'
          aria-label='Close'
          onClick={() => setOpen(false)}
        >
          <span className='sr-only'>Close</span>
          <Close className='w-5 h-5' />
        </button>
      </div>
    </Transition>
  );
};

export { Toast };