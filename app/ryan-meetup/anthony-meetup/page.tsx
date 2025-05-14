// Components
import { Layout } from '@/components/navigation';
import { Embed } from '@/components/ryan-meetup';
import NextLink from 'next/link';

// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anthony Meetup',
  description: 'Ryan Meetup - Infiltrating the Anthony Meetup on February 22nd, 2025.',
  openGraph: {
    url: 'https://ryanle.dev/ryan-meetup/anthony-meetup',
    title: 'Anthony Meetup',
    description: 'Ryan Meetup - Infiltrating the Anthony Meetup on February 22nd, 2025.',
    siteName: 'Ryan Le\'s Portfolio',
    images: [
      {
        url: 'https://ryanle.dev/ryan-meetup/ryanroundup.png',
        width: 3284,
        height: 2189,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const AnthonyPage = () => {
  const emphasis = 'text-teal-500 font-semibold';

  return (
    <Layout>
      <NextLink href='/ryan-meetup' className='font-cooper text-3xl uppercase text-center mb-2 transition duration-300 ease-in-out hover:scale-105'>
        Ryan Meetup
      </NextLink>
      <h1 className='text-center font-cooper text-4xl xl:text-6xl'>
        Anthony Meetup
      </h1>

      <div className='text-gray-400 tracking-wide text-xl my-8 space-y-4 text-center'>
        <p>
          The Anthonys tried to steal our idea. So we stole their identities.
        </p>

        <p>
          Posters mimicking our own started appearing around New York advertising an &apos;Anthony Meetup&apos;,
          tying back to a content creator known as <NextLink href='https://www.youtube.com/@anthpo' className={emphasis}>Anthpo</NextLink>, who was also previously responsible for bits such as{' '}
          <NextLink className={emphasis} href='https://www.youtube.com/watch?v=hHeV486B5iI&pp=0gcJCdgAo7VqN5tD'>the Cheeseball Man</NextLink>,{' '}
          <NextLink className={emphasis} href='https://www.nytimes.com/2024/10/28/nyregion/timothee-chalamet-lookalike-contest-new-york.html'>Timothy Chalamet Lookalike Contests</NextLink>, and more.
        </p>

        <p>
          Naturally, we had to go and see what was going ona.
        </p>
      </div>

      <div className='hidden xl:block'>
        <Embed
          href='https://www.youtube.com/watch?v=2bXZmhw30OU'
          width='100%'
          height='700px'
          variant='youtube'
        />
      </div>
      <div className='block xl:hidden'>
        <Embed
          href='https://www.youtube.com/watch?v=2bXZmhw30OU'
          width='100%'
          height='220px'
          variant='youtube'
        />
      </div>

      <div>
        <h3 className='text-center text-4xl font-bold text-white my-16'>
          THE VIDEO THAT TRIGGERED OUR ABOVE RESPONSE
        </h3>

        <div className='hidden xl:block'>
          <Embed
            href='https://www.youtube.com/watch?v=K011gIjIaxw'
            width='100%'
            height='700px'
            variant='youtube'
          />
        </div>
        <div className='block xl:hidden'>
          <Embed
            href='https://www.youtube.com/watch?v=K011gIjIaxw'
            width='100%'
            height='220px'
            variant='youtube'
          />
        </div>
      </div>
    </Layout>
  );
};

export default AnthonyPage;