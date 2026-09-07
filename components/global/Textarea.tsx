import { forwardRef } from 'react';
import clsx from 'clsx';

import { Field } from './Field';

import type { TextareaHTMLAttributes } from 'react';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  name: string;
  error?: string;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props: TextareaProps, ref) => {
  const {
    label,
    name,
    id,
    className,
    'aria-describedby': describedBy,
    'aria-invalid': invalid,
    required = false,
    rows = 5,
    error,
    ...rest
  } = props;

  return (
    <Field
      className={clsx('resize-y', className)}
      label={label}
      name={name}
      id={id}
      describedBy={describedBy}
      invalid={invalid}
      required={required}
      error={error}
    >
      {(field) => (
        <textarea
          {...rest}
          {...field}
          name={name}
          required={required}
          rows={rows}
          ref={ref}
        />
      )}
    </Field>
  );
});

export { Textarea };
