import clsx from 'clsx';
import { useId } from 'react';

import type { AriaAttributes, ReactNode } from 'react';

type FieldControlProps = {
  id: string;
  className: string;
  'aria-invalid': AriaAttributes['aria-invalid'];
  'aria-describedby'?: string;
};

type FieldProps = {
  label: string;
  name: string;
  id?: string;
  describedBy?: string;
  invalid?: AriaAttributes['aria-invalid'];
  required?: boolean;
  error?: string;
  className?: string;
  children: (control: FieldControlProps) => ReactNode;
};

const Field = (props: FieldProps) => {
  const {
    label,
    name,
    id,
    describedBy,
    invalid,
    required = false,
    error,
    className,
    children,
  } = props;

  const generatedId = useId();
  const controlId = id ?? `${name}-${generatedId}`;
  const errorId = `${controlId}-error`;
  const descriptionIds = [describedBy, error ? errorId : undefined].filter(Boolean).join(' ') || undefined;

  return (
    <div className='flex flex-col'>
      <label
        className='ui-label'
        htmlFor={controlId}
      >
        {label} {required && <span className='text-red-500' aria-hidden='true'>*</span>}
      </label>
      {children({
        id: controlId,
        className: clsx(
          'ui-input',
          className,
          error && 'border-red-400/70 focus:border-red-400 focus:shadow-[0_0_0_4px_rgba(248,113,113,0.18)]',
        ),
        'aria-invalid': error ? true : (invalid ?? false),
        'aria-describedby': descriptionIds,
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
