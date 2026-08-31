import { forwardRef } from 'react';

// Components
import { Field } from './Field';

// Types
import type { ChangeEvent } from 'react';

type TextareaProps = {
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
    label,
    name,
    onChange,
    placeholder,
    required = false,
    rows = 5,
    error,
    ...rest
  } = props;

  return (
    <Field
      className='resize-y'
      label={label}
      name={name}
      required={required}
      error={error}
    >
      {(field) => (
        <textarea
          {...field}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          rows={rows}
          {...rest}
          ref={ref}
        />
      )}
    </Field>
  );
});

export { Textarea };
