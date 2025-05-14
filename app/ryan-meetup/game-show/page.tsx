// Components
import { Layout } from '@/components/navigation';
import { Embed } from '@/components/ryan-meetup';
import NextLink from 'next/link';

// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ryan\'s Game Show',
  description: 'Ryan Meetup - Ryan\'s Game Show on January 25th, 2025. In collaboration with Ryan Hailey.',
  openGraph: {
    url: 'https://ryanle.dev/ryan-meetup/game-show',
    title: 'Ryan\'s Game Show',
    description: 'Ryan Meetup - Ryan\'s Game Show on January 25th, 2025. In collaboration with Ryan Hailey.',
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

const GameShowPage = () => {
  const emphasis = 'text-teal-500 font-semibold';

  return (
    <Layout>
      <NextLink href='/ryan-meetup' className='font-cooper text-3xl uppercase text-center mb-2 transition duration-300 ease-in-out hover:scale-105'>
        Ryan Meetup
      </NextLink>
      <h1 className='text-center font-cooper text-6xl'>
        Ryan&apos;s Game Show
      </h1>

      <div className='text-gray-400 tracking-wide text-xl mt-8 text-center'>
        <div className='space-y-4'>
          <p>
            A YouTuber named <NextLink className={emphasis} href='https://www.youtube.com/channel/UC6yeqgmyqhDyMPzE4wwxQig'>Ryan Hailey</NextLink> reached out to us after attending our Ryan Rave back in September 2023, 
            telling us about a YouTube series he used to host in his garage years back entitled <NextLink href='https://www.youtube.com/@RyansGameshowisthebestgameshow' className={emphasis}>Ryan&apos;s Game Show</NextLink>.
            After watching his series on YouTube, we knew we had to bring it back to life in the form of a Ryan 
            Meetup event.
          </p>

          <p>
            Thus, Ryan&apos;s Game Show LIVE was born. Hosted by Ryan Hailey in collaboration with Ryan Meetup, 
            Ryans faced off against Ryan, Ryan, and Ryan in games like <span>The Price is Ryan</span>,{' '}
            <span>Wheel of Ryan</span>, <span>Ryan&apos;s Got Talent</span>, and more.
          </p>
        </div>

        <div>
          <h3 className='text-center text-4xl font-bold text-white my-8'>
            THE PROMO
          </h3>

          <div className='hidden xl:block'>
            <Embed
              href='https://www.youtube.com/watch?v=2ctySokYvNE'
              width='100%'
              height='700px'
              variant='youtube'
            />
          </div>
          <div className='block xl:hidden'>
            <Embed
              href='https://www.youtube.com/watch?v=2ctySokYvNE'
              width='100%'
              height='220px'
              variant='youtube'
            />
          </div>
        </div>

        <div>
          <h3 className='text-center text-4xl font-bold text-white my-8'>
            THE ODDS-ON FAVORITE
          </h3>

          <div className='hidden xl:block'>
            <Embed
              href='https://www.youtube.com/watch?v=oNHgiLfyYnQ'
              width='100%'
              height='700px'
              variant='youtube'
            />
          </div>
          <div className='block xl:hidden'>
            <Embed
              href='https://www.youtube.com/watch?v=oNHgiLfyYnQ'
              width='100%'
              height='220px'
              variant='youtube'
            />
          </div>
        </div>

        <div>
          <h3 className='text-center text-4xl font-bold text-white my-8'>
            THE FULL SHOW
          </h3>

          <div className='text-center'>
            <p className='font-cooper text-white'>
               - COMING SOON - 
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GameShowPage;