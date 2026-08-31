import { forwardRef } from 'react';

// Components
import { Field } from './Field';

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
    <Field
      label={label}
      name={name}
      required={required}
      error={error}
    >
      {(field) => (
        <input
          {...field}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          type={type}
          {...rest}
          ref={ref}
        />
      )}
    </Field>
  );
});

export { Input };
