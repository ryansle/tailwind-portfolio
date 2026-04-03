import { forwardRef } from 'react';

// Types
import type { ChangeEvent } from 'react';

type InputProps = {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'url' | 'number';
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  const {
    label,
    name,
    type = 'text',
    onChange,
    placeholder,
    required = false,
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
        className='ui-input'
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        type={type}
        {...rest}
        ref={ref}
      />
    </div>
  );
});

export { Input };
