// Components
import { Layout } from '@/components/navigation';
import { ContactForm } from '@/components/contact';

// Types
import { NextPage } from 'next';

const ContactPage: NextPage = () => {
  return (
    <Layout>
      <div className='xl:px-16'>
        <h1 className='font-bold text-display2 mb-6'>
          Let&apos;s Collaborate!
        </h1>

        <div className='text-lg space-y-4 mb-6 tracking-wide'>
          <p>
            Looking for a skilled front-end web developer? Need assistance with a project or have an open role at your company? I&apos;m here to help!
          </p>
          <p>
            With expertise in front-end development and a passion for design, I can bring your ideas to life. I&apos;m dedicated, professional, and committed to delivering exceptional results.
          </p>
          <p>
            Let&apos;s collaborate and make your digital dreams a reality! Fill out the form below to get in touch. 👇🏽
          </p>
        </div>

        <ContactForm />
      </div>
    </Layout>
  );
};

export default ContactPage;
