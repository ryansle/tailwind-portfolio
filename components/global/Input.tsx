import { forwardRef } from 'react';
import clsx from 'clsx';

// Types
import type { ChangeEvent } from 'react';

type InputProps = {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'url' | 'number';
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  const {
    label,
    name,
    type = 'text',
    onChange,
    placeholder,
    required = false,
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
      <input
        className={clsx('ui-input', error && 'border-red-400/70 focus:border-red-400 focus:shadow-[0_0_0_4px_rgba(248,113,113,0.18)]')}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        type={type}
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

export { Input };
