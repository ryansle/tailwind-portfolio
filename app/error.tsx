'use client';

import { startTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/global/Button';

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const router = useRouter();

  const retry = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <section className='section-panel space-y-5' aria-labelledby='page-error-title'>
      <h1 id='page-error-title' className='type-section-title'>This page couldn&apos;t load.</h1>
      <p className='type-body'>Please try again in a moment. You can still get in touch or download my resume below.</p>
      <div className='flex flex-wrap gap-3'>
        <Button onClick={retry}>Try again</Button>
        <Button href='/contact' variant='outline'>Get in touch</Button>
        <Button href='/resume.pdf' download='ryan-le-resume.pdf' variant='outline'>Download resume</Button>
      </div>
    </section>
  );
}
