import clsx from 'clsx';

// Types
import type { ReactNode } from 'react';

type FieldControlProps = {
  id: string;
  className: string;
  'aria-invalid': boolean;
  'aria-describedby'?: string;
};

type FieldProps = {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: (control: FieldControlProps) => ReactNode;
}

const Field = (props: FieldProps) => {
  const {
    label,
    name,
    required = false,
    error,
    className,
    children,
  } = props;

  const errorId = `${name}-error`;

  return (
    <div className='flex flex-col'>
      <label
        className='ui-label'
        htmlFor={name}
      >
        {label} {required && <span className='text-red-500' aria-hidden='true'>*</span>}
      </label>
      {children({
        id: name,
        className: clsx(
          'ui-input',
          className,
          error && 'border-red-400/70 focus:border-red-400 focus:shadow-[0_0_0_4px_rgba(248,113,113,0.18)]',
        ),
        'aria-invalid': Boolean(error),
        'aria-describedby': error ? errorId : undefined,
      })}
      {error && (
        <p
          className='mt-2 text-xs text-red-300/90'
          id={errorId}
          role='alert'
        >
          {error}
        </p>
      )}
    </div>
  );
};

export { Field };
