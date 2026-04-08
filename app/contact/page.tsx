// Components
import { Layout } from '@/components/navigation/Layout';
import { ContactForm } from '@/components/contact/ContactForm';
import { FaGithub as GitHub, FaLinkedin as LinkedIn } from 'react-icons/fa6';
import { HiOutlineMail, HiOutlineSparkles, HiOutlineClock, HiOutlineBriefcase } from 'react-icons/hi';

// Types
import type { NextPage } from 'next';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ryan Le - Contact Me',
  description: 'Get in contact with Ryan Le, UI Engineer based in Brooklyn, NY.',
  keywords: ['ryan le', 'front-end developer', 'brooklyn software engineer', 'ryan le engineer', 'ryan le software', 'contact ryan le', 'ui engineer', 'ryan le ui engineer'],
  openGraph: {
    url: 'https://ryanle.dev/contact',
    title: 'Ryan Le - Contact Me',
    description: 'Get in contact with Ryan Le, UI Engineer based in Brooklyn, NY.',
    siteName: 'Ryan Le\'s Portfolio',
    images: [
      {
        url: 'https://ryanle.dev/seo/contact.png',
        width: 2056,
        height: 965,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const ContactPage: NextPage = () => {
  return (
    <Layout>
      <div className='flex flex-col gap-8 xl:grid xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)] xl:items-start'>
        <div className='order-2 space-y-6 xl:order-1'>
          <div className='section-panel hidden xl:block'>
            <p className='ui-eyebrow mb-3'>Contact</p>
            <h1 className='mb-5 whitespace-nowrap text-[clamp(2.1rem,4vw,3.4rem)] font-semibold leading-none tracking-[-0.04em]'>
              Let&apos;s Collaborate!
            </h1>

            <div className='type-body space-y-4'>
              <p>
                Looking for a skilled front-end web developer? Need help with a product surface, design system, or polished marketing site? I&apos;m open to the right full-time role, freelance build, or creative collaboration.
              </p>
              <p>
                The best outreach includes a little context: what you&apos;re building, what stage you&apos;re in, what support you need, and the rough timeline.
              </p>
            </div>
          </div>

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
                <p>Front-end engineering, UI implementation, design systems, motion polish, and product marketing surfaces.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='order-1 space-y-6 xl:order-2 xl:sticky xl:top-0 xl:self-start'>
          <div className='section-panel xl:hidden'>
            <p className='ui-eyebrow mb-3'>Contact</p>
            <h1 className='mb-4 text-[clamp(2rem,9vw,2.8rem)] font-semibold leading-none tracking-[-0.04em]'>
              Let&apos;s Collaborate!
            </h1>
            <p className='text-sm leading-7 text-soft'>
              Share the project, role, or collaboration idea below. If it&apos;s a strong fit, I usually reply within 1 to 2 business days.
            </p>
          </div>

          <ContactForm />

          <div className='section-panel !py-5'>
            <h2 className='type-section-title mb-4'>Quick Contact</h2>

            <div className='flex flex-wrap gap-3'>
              <a className='ui-button-secondary gap-2' href='mailto:hello@ryanle.dev'>
                <HiOutlineMail className='h-4 w-4' />
                Email
              </a>
              <a className='ui-button-secondary gap-2' href='https://www.linkedin.com/in/ryansle/'>
                <LinkedIn className='h-4 w-4' />
                LinkedIn
              </a>
              <a className='ui-button-secondary gap-2' href='https://github.com/ryansle'>
                <GitHub className='h-4 w-4' />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
