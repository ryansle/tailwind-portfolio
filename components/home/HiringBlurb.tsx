'use client';

// Components
import NextLink from 'next/link';
import SlideUpWhenVisible from '@/hooks/SlideUpWhenVisible';

const HiringBlurb = () => {
  return (
    <SlideUpWhenVisible delay={1} duration={0.8}>
      <div className='tracking-wide flex flex-col items-center'>
        <h1 className='text-display3 font-bold tracking-wider mb-2 text-center'>
          Looking to expand your team?
        </h1>
        <h2 className='mb-10 font-semibold tracking-wider'>
          or just hire a freelance engineer?
        </h2>
        <div className='text-center space-y-4 font-medium text-gray-500 xl:px-32'>
          <p>
            I&apos;m a front-end engineer working primarily with Next.js, React.js, and Tailwind CSS. With my expertise in these cutting-edge technologies, I create stunning and user-friendly websites and applications.
          </p>
          <p>
            I believe in the power of collaboration and teamwork. Working closely with designers, backend engineers, and stakeholders, I bring ideas to life and create remarkable digital experiences.
          </p>
          <p>
            If you&apos;re looking for a front-end engineer with a passion for delivering exceptional results, let&apos;s connect - I&apos;m always on the lookout for exciting new opportunities!
          </p>
          <p>
            Check out some of my <NextLink className='text-teal-500 font-medium hover:underline' href='/projects'>previous work</NextLink>, and contact me today to discuss your project.
          </p>
          <p>
            Let&apos;s create something amazing together!
          </p>
        </div>
      </div>
    </SlideUpWhenVisible>
  );
};

export { HiringBlurb };
