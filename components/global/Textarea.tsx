import { forwardRef } from 'react';
import clsx from 'clsx';

// Types
import type { ChangeEvent } from 'react';

type TextareaProps = {
  id: string;
  label: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props: TextareaProps, ref) => {
  const {
    id,
    label,
    name,
    onChange,
    placeholder,
    required,
    rows = 5,
    error,
    ...rest
  } = props;

  return (
    <div className='flex flex-col'>
      <label
        className='ui-label'
        htmlFor={name}
      >
        {label} {required && <span className='text-red-500'>*</span>}
      </label>
      <textarea
        className={clsx('ui-input resize-y', error && 'border-red-400/70 focus:border-red-400 focus:shadow-[0_0_0_4px_rgba(248,113,113,0.18)]')}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        rows={rows}
        aria-invalid={Boolean(error)}
        {...rest}
        ref={ref}
      />
      {error && (
        <p className='mt-2 text-xs text-red-300/90'>
          {error}
        </p>
      )}
    </div>
  );
});

export { Textarea };
