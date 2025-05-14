// Components
import { Layout } from '@/components/navigation';
import { Embed } from '@/components/ryan-meetup';
import NextLink from 'next/link';
import NextImage from 'next/image';

// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rytoberfest',
  description: 'Ryan Meetup - Rytoberfest on October 21st, 2023',
  openGraph: {
    url: 'https://ryanle.dev/ryan-meetup/rytoberfest',
    title: 'Rytoberfest',
    description: 'Ryan Meetup - Rytoberfest on October 21st, 2023',
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

const RytoberfestPage = () => {
  return (
    <Layout>
      <NextLink href='/ryan-meetup' className='font-cooper text-3xl uppercase text-center mb-2 transition duration-300 ease-in-out hover:scale-105'>
        Ryan Meetup
      </NextLink>
      <h1 className='text-center font-cooper text-6xl'>
        Rytoberfest
      </h1>

      <div className='text-gray-400 tracking-wide text-xl mt-8 text-center'>
        <p>
          For some reason, people kept commenting "sausage fest" on our Ryan Rave recap video. 
          Which gave us the perfect idea for our next meetup — an event now widely known as{' '}
          "The Greatest Beer and Sausage Fest of the Century."
        </p>        
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8'>
        <div className='col-span-1'>
          <h3 className='text-4xl font-bold text-white mb-8 text-center xl:text-left'>
            RECAP
          </h3>

          <Embed 
            href='https://www.instagram.com/reel/C0FH4UDvQaY/?hl=en'
            variant='instagram'
          />
        </div>
        <div className='col-span-1'>
          <h3 className='text-4xl font-bold text-white text-center mb-8 xl:text-left'>
            TOURNAMENT BRACKET
          </h3>

          <div className='relative w-full h-72 sm:h-[400px] 2xl:h-[500px]'>
            <NextImage 
              src='/ryan-meetup/assets/rytoberfest/bracket.webp'
              alt='Rytoberfest Tournament Bracket'
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>

          <h3 className='text-4xl font-bold text-white my-8 text-center xl:text-left'>
            THANKS, AVIATION GIN RYAN
          </h3>

          <div className='relative w-full h-60 sm:h-[340px] 2xl:h-[400px]'>
            <NextImage 
              src='/ryan-meetup/assets/rytoberfest/gin.webp'
              alt='Aviation Gin Donation'
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>  
      </div>
    </Layout>
  );
};

export default RytoberfestPage;