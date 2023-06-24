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
        className='font-medium mb-1'
        htmlFor={name}
      >
        {label} {required && <span className='text-red-500'>*</span>}
      </label>
      <input
        className='border bg-black border-gray-700 text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 ring-inset placeholder-gray-700'
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
