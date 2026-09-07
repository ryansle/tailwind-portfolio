import { forwardRef } from 'react';

import { Field } from './Field';

import type { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  const {
    label,
    name,
    id,
    className,
    'aria-describedby': describedBy,
    'aria-invalid': invalid,
    type = 'text',
    required = false,
    error,
    ...rest
  } = props;

  return (
    <Field
      label={label}
      name={name}
      id={id}
      className={className}
      describedBy={describedBy}
      invalid={invalid}
      required={required}
      error={error}
    >
      {(field) => (
        <input
          {...rest}
          {...field}
          name={name}
          required={required}
          type={type}
          ref={ref}
        />
      )}
    </Field>
  );
});

export { Input };
