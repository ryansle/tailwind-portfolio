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
        className='ui-label'
        htmlFor={name}
      >
        {label} {required && <span className='text-red-500'>*</span>}
      </label>
      <textarea
        className='ui-input resize-y'
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
