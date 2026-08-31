'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';

// Components
import { Button, Input, Textarea } from '@/components/global';
import { BiMailSend as Send } from 'react-icons/bi';
import toast from 'react-hot-toast';
import type { Toast } from 'react-hot-toast';
import { IoCloseSharp as Close } from 'react-icons/io5';
import { FaCheckCircle as Check, FaExclamationCircle as Alert } from 'react-icons/fa';

// Utilities
import { useForm } from 'react-hook-form';
import { validateEmail } from '@/utils/validate';
import emailjs from '@emailjs/browser';
import { contactEmail, contactEmailHref } from '@/lib/constants';

type Form = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

const Loader = () => {
  return (
    <div>
      <div role='status'>
        <svg aria-hidden='true' className='w-5 h-5 animate-spin text-gray-400 fill-blue-600' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor' /><path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill' /></svg>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
};

type AlertProps = {
  toast: Toast;
  icon: ReactNode;
  title: string;
  description: string;
};

const AlertToast = ({ toast: t, icon, title, description }: AlertProps) => {
  return (
    <div
      className={`${t.visible ? 'animate-enter' : 'animate-leave'
        } ui-card pointer-events-auto grid w-full max-w-md grid-cols-12 p-4 text-white`}
    >
      <div className='col-span-1 flex items-center justify-center'>
        {icon}
      </div>
      <div className='col-span-10 pl-4 pr-6'>
        <p className='text-lg font-semibold'>{title}</p>
        <p className='text-sm tracking-wide text-soft'>
          {description}
        </p>
      </div>
      <div className='col-span-1 flex items-center'>
        <button onClick={() => toast.dismiss(t.id)}>
          <span className='sr-only'>Close</span>
          <Close className='w-8 h-8 shrink-0' />
        </button>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Form>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const sendEmail = async (data: Form) => {
    setLoading(true);
    try {
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_USER_ID;
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;

      await emailjs.send(serviceId as string, templateId as string, data, userId);
      sendSuccessAlert();
      reset();
    } catch {
      sendErrorAlert();
    } finally {
      setLoading(false);
    }
  };

  const sendSuccessAlert = () => toast.custom((t: Toast) => (
    <AlertToast
      toast={t}
      icon={<Check className='h-8 w-8 fill-green-500 shrink-0' />}
      title='Email sent!'
      description='Expect an email back from me soon!'
    />
  ));

  const sendErrorAlert = () => toast.custom((t: Toast) => (
    <AlertToast
      toast={t}
      icon={<Alert className='h-8 w-8 fill-red-500 shrink-0' />}
      title="Message didn't send"
      description={`Something went wrong on the way out. Try again, or email me directly at ${contactEmail}.`}
    />
  ));

  return (
    <form className='ui-card p-5 sm:p-6' onSubmit={handleSubmit(sendEmail)}>
      <div className='mb-6'>
        <h2 className='type-section-title mb-2'>Send a message</h2>
        <p className='text-sm text-soft'>
          Share the role, project, or collaboration idea. I usually reply within 1 to 2 business days.
        </p>
      </div>

      <div className='mb-4 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2'>
        <div className='col-span-1'>
          <Input
            label='First Name'
            placeholder='Ryan'
            required
            error={errors.firstName?.message}
            {...register('firstName', {
              required: 'First name is required.',
            })}
          />
        </div>

        <div className='col-span-1'>
          <Input
            label='Last Name'
            placeholder='Le'
            required
            error={errors.lastName?.message}
            {...register('lastName', {
              required: 'Last name is required.',
            })}
          />
        </div>

        <div className='col-span-1 sm:col-span-2'>
          <Input
            label='Email Address'
            placeholder='Where should I follow up?'
            type='email'
            required
            error={errors.email?.message}
            {...register('email', {
              required: 'Email address is required.',
              validate: (value) => validateEmail(value) || 'Enter a valid email address.',
            })}
          />
        </div>

        <div className='col-span-1 sm:col-span-2'>
          <Input
            label='Subject'
            placeholder='Career opportunities, freelance project, design system work...'
            required
            error={errors.subject?.message}
            {...register('subject', {
              required: 'Subject is required.',
            })}
          />
        </div>

        <div className='col-span-1 sm:col-span-2'>
          <Textarea
            label='Message'
            placeholder='Hi Ryan, I came across your work and wanted to reach out about...'
            required
            rows={6}
            error={errors.message?.message}
            {...register('message', {
              required: 'Message is required.',
              minLength: {
                value: 20,
                message: 'Add a little more context so I can respond usefully.',
              },
            })}
          />
        </div>
      </div>

      <div className='surface-rule mb-4' />

      <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
        <p className='text-sm text-muted'>
          Prefer email? Reach me directly at <a className='text-teal-300 hover:underline' href={contactEmailHref}>{contactEmail}</a>.
        </p>
        <Button
          type='submit'
          variant='primary'
          className='uppercase'
          disabled={loading}
          icon={loading ? <Loader /> : <Send />}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
};

export { ContactForm };
