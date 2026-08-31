// Components
import { ContactForm } from '@/components/contact/ContactForm';
import { Button } from '@/components/global';
import { HiOutlineMail, HiOutlineSparkles, HiOutlineClock, HiOutlineBriefcase } from 'react-icons/hi';

// Types
import type { NextPage } from 'next';
import type { Metadata } from 'next';

// Utilities
import { createPageMetadata } from '@/lib/seo';
import { socials, socialIcons } from '@/lib/socials';
import { contactEmailHref } from '@/lib/constants';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  description: 'Contact Ryan Le about front-end systems, product UI implementation, design systems, freelance work, or full-time opportunities.',
  path: '/contact',
});

const ContactPage: NextPage = () => {
  return (
    <>
      <div className='flex flex-col gap-8 xl:grid xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)] xl:items-start xl:gap-y-6'>
        <div className='section-panel order-1 xl:col-start-1 xl:row-start-1'>
          <p className='ui-eyebrow mb-3'>Contact</p>
          <h1 className='mb-4 text-[clamp(2rem,9vw,2.8rem)] font-semibold leading-none tracking-[-0.04em] xl:mb-5 xl:whitespace-nowrap xl:text-[clamp(2.1rem,4vw,3.4rem)]'>
            Let&apos;s Collaborate!
          </h1>

          <div className='type-body space-y-4'>
            <p>
              Need help with a product surface, design system, or implementation-heavy marketing build? I&apos;m open to the right full-time role, freelance engagement, or creative collaboration.
            </p>
            <p>
              The best outreach includes context: what you&apos;re building, what stage it&apos;s in, what support you need, and the timeline you&apos;re working against.
            </p>
          </div>
        </div>

        <div className='order-3 xl:col-start-1 xl:row-start-2'>
          <div className='section-panel'>
            <h2 className='type-section-title mb-4'>What to expect</h2>
            <div className='space-y-4 text-sm text-soft'>
              <div className='subtle-panel p-4'>
                <div className='mb-2 flex items-center gap-2'>
                  <HiOutlineSparkles className='h-4 w-4 text-teal-300' />
                  <p className='type-meta'>Availability</p>
                </div>
                <p>Open to selective freelance work, contract support, and strong product-focused full-time opportunities.</p>
              </div>
              <div className='subtle-panel p-4'>
                <div className='mb-2 flex items-center gap-2'>
                  <HiOutlineClock className='h-4 w-4 text-teal-300' />
                  <p className='type-meta'>Response Time</p>
                </div>
                <p>Usually within 1 to 2 business days for serious inquiries.</p>
              </div>
              <div className='subtle-panel p-4'>
                <div className='mb-2 flex items-center gap-2'>
                  <HiOutlineBriefcase className='h-4 w-4 text-teal-300' />
                  <p className='type-meta'>Best Fit</p>
                </div>
                <p>Front-end systems, product UI implementation, design systems, interaction polish, and product marketing surfaces.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='order-2 space-y-6 xl:col-start-2 xl:row-span-2 xl:row-start-1 xl:sticky xl:top-0 xl:self-start'>
          <ContactForm />

          <div className='section-panel !py-5'>
            <h2 className='type-section-title mb-4'>Quick Contact</h2>

            <div className='flex flex-wrap gap-3'>
              <Button
                href={contactEmailHref}
                icon={<HiOutlineMail className='h-4 w-4' />}
                size='sm'
                variant='secondary'
              >
                Email
              </Button>
              {socials.map((social) => {
                const Icon = socialIcons[social.platform];

                return (
                  <Button
                    key={social.platform}
                    href={social.url}
                    icon={<Icon className='h-4 w-4' />}
                    size='sm'
                    variant='secondary'
                  >
                    {social.platform}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
