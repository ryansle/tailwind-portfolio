import { createRef } from 'react';
import { expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '@/components/global/Button';
import { Input } from '@/components/global/Input';
import { Textarea } from '@/components/global/Textarea';

it('forwards button refs, form attributes, events, and disabled behavior', async () => {
  const user = userEvent.setup();
  const ref = createRef<HTMLButtonElement>();
  const onClick = vi.fn();
  const { rerender } = render(<Button ref={ref} type='submit' form='contact' aria-label='Submit contact' onClick={onClick}>Send</Button>);
  const button = screen.getByRole('button', { name: 'Submit contact' });
  expect(ref.current).toBe(button);
  expect(button.getAttribute('type')).toBe('submit');
  expect(button.getAttribute('form')).toBe('contact');
  await user.click(button);
  expect(onClick).toHaveBeenCalledOnce();
  rerender(<Button disabled onClick={onClick}>Send</Button>);
  await user.click(screen.getByRole('button'));
  expect(onClick).toHaveBeenCalledOnce();
});

it('forwards internal and external link attributes and refs', () => {
  const ref = createRef<HTMLAnchorElement>();
  render(<><Button href='/projects' ref={ref} aria-current='page'>Projects</Button><Button href='/resume.pdf' download='resume.pdf' target='_blank' rel='noreferrer'>Resume</Button></>);
  expect(ref.current).toBe(screen.getByRole('link', { name: 'Projects' }));
  expect(ref.current?.getAttribute('aria-current')).toBe('page');
  const resume = screen.getByRole('link', { name: 'Resume' });
  expect(resume.getAttribute('download')).toBe('resume.pdf');
  expect(resume.getAttribute('target')).toBe('_blank');
  expect(resume.getAttribute('rel')).toBe('noreferrer');
});

it('preserves native input props, label association, composed descriptions, refs and blur', async () => {
  const user = userEvent.setup();
  const ref = createRef<HTMLInputElement>();
  const onBlur = vi.fn();
  render(<><p id='hint'>A hint</p><Input label='Email' name='email' id='custom-email' className='custom' autoComplete='email' aria-describedby='hint' error='Invalid email' ref={ref} onBlur={onBlur} /></>);
  const input = screen.getByLabelText('Email');
  expect(ref.current).toBe(input);
  expect(input.classList.contains('ui-input')).toBe(true);
  expect(input.classList.contains('custom')).toBe(true);
  expect(input.getAttribute('aria-describedby')).toBe('hint custom-email-error');
  expect(input.getAttribute('aria-invalid')).toBe('true');
  expect(input.getAttribute('autocomplete')).toBe('email');
  await user.type(input, 'reviewer@example.com');
  await user.tab();
  expect(ref.current?.value).toBe('reviewer@example.com');
  expect(onBlur).toHaveBeenCalledOnce();
});

it('forwards textarea constraints, ref and change handler', async () => {
  const ref = createRef<HTMLTextAreaElement>();
  const onChange = vi.fn();
  render(<Textarea label='Message' name='message' ref={ref} rows={6} maxLength={20} onChange={onChange} />);
  await userEvent.setup().type(screen.getByLabelText('Message'), 'Hello');
  expect(ref.current?.value).toBe('Hello');
  expect(ref.current?.rows).toBe(6);
  expect(ref.current?.maxLength).toBe(20);
  expect(onChange).toHaveBeenCalledTimes(5);
});
