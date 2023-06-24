import { forwardRef } from 'react';

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
      <textarea
        className='border bg-black border-gray-700 text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 ring-inset placeholder-gray-700'
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        rows={rows}
        {...rest}
        ref={ref}
      />
    </div>
  );
});

export { Textarea };
