import { beforeEach, expect, it, vi } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import type { Toast } from 'react-hot-toast';
import { ContactForm } from '@/components/contact/ContactForm';
import { contactEmail } from '@/lib/constants';

vi.mock('@emailjs/browser', () => ({ default: { send: vi.fn() } }));
vi.mock('react-hot-toast', () => ({ default: { custom: vi.fn(), dismiss: vi.fn() } }));
vi.mock('next/navigation', () => ({ useSearchParams: () => new URLSearchParams('intent=hiring') }));

beforeEach(() => {
  vi.stubEnv('NEXT_PUBLIC_FIXTURE_MODE', 'false');
  vi.stubEnv('NEXT_PUBLIC_SERVICE_ID', 'test-service');
  vi.stubEnv('NEXT_PUBLIC_TEMPLATE_ID', 'test-template');
  vi.stubEnv('NEXT_PUBLIC_USER_ID', 'test-public-key');
});

const activeToast = {
  id: 'toast-1',
  visible: true,
  ariaProps: { role: 'status', 'aria-live': 'polite' },
} as unknown as Toast;

/** Renders whatever the form handed to toast.custom, so the announcement is assertable. */
const renderLastToast = () => {
  const message = vi.mocked(toast.custom).mock.lastCall?.[0];
  if (typeof message !== 'function') throw new Error('Expected toast.custom to receive a render function.');
  return within(render(<>{message(activeToast)}</>).container);
};

const fillForm = async () => {
  const user = userEvent.setup();
  await user.type(screen.getByLabelText(/First Name/), 'Demo');
  await user.type(screen.getByLabelText(/Last Name/), 'Reviewer');
  await user.type(screen.getByLabelText(/Email Address/), 'reviewer@example.com');
  await user.type(screen.getByLabelText(/^Message/), 'I would like to discuss a frontend project.');
  return user;
};

it('validates locally in demo mode even when live credentials are present', async () => {
  vi.stubEnv('NEXT_PUBLIC_FIXTURE_MODE', 'true');
  render(<ContactForm />);
  const user = await fillForm();
  await user.click(screen.getByRole('button', { name: 'Try demo submission' }));
  expect(await screen.findByText(/No email was sent or saved/)).toBeTruthy();
  expect(emailjs.send).not.toHaveBeenCalled();
  expect(toast.custom).not.toHaveBeenCalled();
});

it('does not accept a message that is too short', async () => {
  render(<ContactForm />);
  const user = await fillForm();
  await user.clear(screen.getByLabelText(/^Message/));
  await user.type(screen.getByLabelText(/^Message/), 'Too short');
  await user.click(screen.getByRole('button', { name: 'Send Message' }));
  expect(await screen.findByText(/Add a little more context/)).toBeTruthy();
  expect(emailjs.send).not.toHaveBeenCalled();
});

it('sends the expected payload, disables repeat submission, then resets while keeping subject', async () => {
  let finish!: () => void;
  vi.mocked(emailjs.send).mockReturnValue(new Promise((resolve) => { finish = () => resolve({ status: 200, text: 'OK' }); }));
  render(<ContactForm />);
  const user = await fillForm();
  await user.click(screen.getByRole('button', { name: 'Send Message' }));
  expect((screen.getByRole('button', { name: /Sending/ }) as HTMLButtonElement).disabled).toBe(true);
  expect(emailjs.send).toHaveBeenCalledWith('test-service', 'test-template', {
    firstName: 'Demo', lastName: 'Reviewer', email: 'reviewer@example.com',
    subject: 'Full-time role or freelance project', message: 'I would like to discuss a frontend project.',
  }, 'test-public-key');
  finish();
  await waitFor(() => expect((screen.getByLabelText(/First Name/) as HTMLInputElement).value).toBe(''));
  expect((screen.getByLabelText(/Subject/) as HTMLInputElement).value).toBe('Full-time role or freelance project');
  expect(toast.custom).toHaveBeenCalledOnce();

  const announcement = renderLastToast().getByRole('status');
  expect(announcement.getAttribute('aria-live')).toBe('polite');
  expect(announcement.textContent).toContain('Email sent!');
});

it('retains the message after a provider failure and allows retry', async () => {
  vi.mocked(emailjs.send).mockRejectedValue(new Error('Offline'));
  render(<ContactForm />);
  const user = await fillForm();
  await user.click(screen.getByRole('button', { name: 'Send Message' }));
  await waitFor(() => expect(toast.custom).toHaveBeenCalledOnce());
  expect((screen.getByLabelText(/^Message/) as HTMLTextAreaElement).value).toContain('frontend project');
  expect((screen.getByRole('button', { name: 'Send Message' }) as HTMLButtonElement).disabled).toBe(false);

  // A failure interrupts, and it names the direct address as a way through.
  const announcement = renderLastToast().getByRole('alert');
  expect(announcement.getAttribute('aria-live')).toBe('assertive');
  expect(announcement.textContent).toContain("Message didn't send");
  expect(announcement.textContent).toContain(contactEmail);
});

it('does not call the provider when live configuration is missing', async () => {
  vi.stubEnv('NEXT_PUBLIC_USER_ID', '');
  render(<ContactForm />);
  const user = await fillForm();
  await user.click(screen.getByRole('button', { name: 'Send Message' }));
  await waitFor(() => expect(toast.custom).toHaveBeenCalledOnce());
  expect(emailjs.send).not.toHaveBeenCalled();
  expect(renderLastToast().getByRole('alert').textContent).toContain("Message didn't send");
});
