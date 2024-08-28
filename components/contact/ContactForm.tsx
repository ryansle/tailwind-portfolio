'use client';

import { useState, useEffect } from 'react';

// Components
import { Input, Textarea } from '@/components/global';
import { SkeletonForm } from './SkeletonForm';
import { BiMailSend as Send } from 'react-icons/bi';
import toast from 'react-hot-toast';
import { IoCloseSharp as Close } from 'react-icons/io5';
import { FaCheckCircle as Check } from 'react-icons/fa';

// Utilities
import { useForm } from 'react-hook-form';
import { validateEmail } from '@/utils/validate';
import emailjs from '@emailjs/browser';

// Types
import type { ReactNode } from 'react';

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
        <svg aria-hidden='true' className='w-5 h-5 mr-2 animate-spin text-gray-400 fill-blue-600' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor' /><path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill' /></svg>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [render, setRender] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const sendEmail = (data: Form) => {
    setLoading(true);

    setTimeout(() => {
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_USER_ID;
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;

      emailjs.send(serviceId as string, templateId as string, data, userId);

      sendSuccessAlert();
      setLoading(false);
      reset();
    }, 5000);
  };

  const checkEmail = (email: string) => {
    const valid = validateEmail(email);

    if (valid) clearErrors('email');
    else setError('email', { message: 'Error: invalid email address' });
  };

  const toggleErrorFlags = () => {
    setError('firstName', { message: 'Error: must provide a first name' });
    setError('lastName', { message: 'Error: must provide a last name' });
    setError('subject', { message: 'Error: must provide a subject' });
    setError('message', { message: 'Error: must provide a message' });
  };

  useEffect(() => {
    toggleErrorFlags();

    setRender(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    toggleErrorFlags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  const sendSuccessAlert = () => toast.custom((t) => (
    <div
      className={`${t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 text-black grid grid-cols-12 p-4 -pb-1`}
    >
      <div className='col-span-1 flex items-center justify-center'>
        <Check className='h-8 w-8 fill-green-500 shrink-0' />
      </div>
      <div className='col-span-10 pl-4 pr-6'>
        <h1 className='text-lg text-semibold font-cooper'>Email sent!</h1>
        <p className='text-sm tracking-wide'>
          Expect an email back from me soon!
        </p>
      </div>
      <div className='col-span-1 flex items-center'>
        <button onClick={() => toast.dismiss(t.id)}>
          <span className='sr-only'>Close</span>
          <Close className='w-8 h-8 shrink-0' />
        </button>
      </div>
    </div>
  ));

  return (
    <form>
      {!render && (
        <SkeletonForm />
      )}

      {render && (
        <div>
          <div className='grid grid-cols-2 gap-x-4 gap-y-4 mb-4'>
            <div className='col-span-1'>
              <Input
                label='First Name'
                placeholder='Ryan'
                required
                {...register('firstName', {
                  onBlur: (event) => event.target.value === '' ?
                    setError('firstName', { message: 'Error: must provide a first name' }) : clearErrors('firstName')
                })}
              />
            </div>

            <div className='col-span-1'>
              <Input
                label='Last Name'
                placeholder='Le'
                required
                {...register('lastName', {
                  onBlur: (event) => event.target.value === '' ?
                    setError('lastName', { message: 'Error: must provide a last name' }) : clearErrors('lastName')
                })}
              />
            </div>

            <div className='col-span-2'>
              <Input
                label='Email Address'
                placeholder='Where should I follow up?'
                type='text'
                required
                {...register('email', {
                  onBlur: (event) => checkEmail(event.target.value)
                })}
              />
              {errors.email && (
                <p className='mt-2 text-red-500 text-xs'>
                  {errors.email.message as ReactNode}
                </p>
              )}
            </div>

            <div className='col-span-2'>
              <Input
                label='Subject'
                placeholder='Career opportunites in...'
                required
                {...register('subject', {
                  onBlur: (event) => event.target.value === '' ?
                    setError('subject', { message: 'Error: must provide a subject' }) : clearErrors('subject')
                })}
              />
            </div>

            <div className='col-span-2'>
              <Textarea
                id='message'
                label='Message'
                placeholder='Hi Ryan! I hope you are having a great week so far! I just came across your profile and was very impressed with your background...'
                required
                {...register('message', {
                  onBlur: (event) => event.target.value === '' ?
                    setError('message', { message: 'Error: must provide a message' }) : clearErrors('message')
                })}
              />
            </div>
          </div>

          <button
            className='rounded-lg p-3 bg-black uppercase border border-gray-700 tracking-widest flex disabled:cursor-not-allowed disabled:text-gray-700'
            onClick={handleSubmit((data) => sendEmail(data as Form))}
            disabled={Object.keys(errors).length !== 0}
          >
            <span className='mr-2 mt-1'>
              {loading ? <Loader /> : <Send />}
            </span>
            Send Message
          </button>
        </div>
      )}
    </form>
  );
};

export { ContactForm };
