import { Suspense } from 'react';
import { ContactForm } from '@/components/contact/ContactForm';
import { Button, JsonLd } from '@/components/global';
import { HiOutlineMail, HiOutlineSparkles, HiOutlineClock, HiOutlineBriefcase } from 'react-icons/hi';

import type { NextPage } from 'next';
import type { Metadata } from 'next';

import { metadataFor } from '@/lib/seo';
import { pageSchema } from '@/lib/schema';
import { socials, socialIcons } from '@/lib/socials';
import { contactEmailHref } from '@/lib/constants';

export const metadata: Metadata = metadataFor('/contact');

const ContactPage: NextPage = () => {
  return (
    <>
      <JsonLd data={pageSchema('/contact', 'ContactPage')} />
      <div className='flex flex-col gap-8 xl:grid xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)] xl:items-start xl:gap-y-6'>
        <div className='section-panel order-1 xl:col-start-1 xl:row-start-1'>
          <p className='ui-eyebrow mb-3'>Contact</p>
          <h1 className='mb-4 text-[clamp(2rem,9vw,2.8rem)] font-semibold leading-none tracking-[-0.04em] xl:mb-5 xl:whitespace-nowrap xl:text-[clamp(2.1rem,4vw,3.4rem)]'>
            Let&apos;s Collaborate!
          </h1>

          <div className='type-body space-y-4'>
            <p>
              Building a product, planning an initiative, or trying to turn a good idea into something people will actually join? I&apos;m open to the right full-time role, freelance engagement, event concept, or creative collaboration.
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
                <p>Open to selective freelance work, community and event collaborations, and strong full-time opportunities.</p>
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
                <p>Product UI, community initiatives, event programming, creative operations, and work that needs both technical and human judgment.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='order-2 space-y-6 xl:col-start-2 xl:row-span-2 xl:row-start-1 xl:sticky xl:top-0 xl:self-start'>
          <Suspense fallback={<div className='ui-card p-5 sm:p-6' role='status'>Loading contact form...</div>}>
            <ContactForm />
          </Suspense>

          <div className='section-panel py-5!'>
            <h2 className='type-section-title mb-4'>Quick Contact</h2>

            <div className='flex flex-wrap gap-3'>
              <Button
                href={contactEmailHref}
                icon={<HiOutlineMail className='h-4 w-4' />}
                size='sm'
                variant='outline'
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
                    variant='outline'
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
