// Components
import { Layout } from '@/components/navigation';
import { Embed } from '@/components/ryan-meetup';
import NextLink from 'next/link';
import NextImage from 'next/image';

// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'St. Ryan\'s Day',
  description: 'Ryan Meetup - St. Ryan\'s Day on March 22nd, 2024.',
  openGraph: {
    url: 'https://ryanle.dev/ryan-meetup/st-ryans-day',
    title: 'St. Ryan\'s Day',
    description: 'Ryan Meetup - St. Ryan\'s Day on March 22nd, 2024.',
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

const StRyansDayPage = () => {
  return (
    <Layout>
      <NextLink href='/ryan-meetup' className='font-cooper text-3xl uppercase text-center mb-2 transition duration-300 ease-in-out hover:scale-105'>
        Ryan Meetup
      </NextLink>
      <h1 className='text-center font-cooper text-6xl'>
        St. Ryan's Day
      </h1>

      <div className='text-gray-400 tracking-wide text-xl mt-8 text-center'>
        <p>
          During the month of March, all we heard was "Patrick this", "Patrick that," 
          "People are getting together for Patrick."  And that goes against everything we believe 
          in at Ryan Meetup. So we made our own holiday, where people get together for Ryan.
        </p>        
      </div>

      <div className='grid grid-cols-1 2xl:grid-cols-3 gap-4 mt-8 2xl:absolute 2xl:mt-60'>
        <div className='col-span-1 sticky top-28 self-start'>
          <h3 className='text-4xl font-bold text-white mb-8 text-center xl:text-left'>
            RECAP
          </h3>

          <Embed 
            href='https://www.instagram.com/reel/C5zJvQ2OquW/?hl=en'
            variant='instagram'
          />
        </div>
        <div className='col-span-1 xl:col-span-2'>
          <h3 className='text-4xl font-bold text-white mb-8 text-center xl:text-left'>
            PROMO BY A NEWS RYAN
          </h3>

          <Embed 
            href='https://www.instagram.com/reel/C41Wiw2u-qB/?hl=en'
            variant='instagram'
          />

          <h3 className='text-4xl font-bold text-white my-8 text-center xl:text-left'>
            ST. RYAN HIMSELF SHOWED UP WITH THESE
          </h3>

          <div className='grid grid-cols-1 xl:grid-cols-2 gap-4'>
            <div className='relative h-[505px] w-full'>
              <NextImage 
                src='/ryan-meetup/assets/stryansday/stryan1.webp'
                alt='St. Ryan handing out greeting cards'
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className='relative w-full h-[500px]'>
              <NextImage 
                src='/ryan-meetup/assets/stryansday/stryan2.webp'
                alt="St. Ryan's Ry-Rish Blessing"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>  
      </div>

      <div className='hidden mb-[1400px] 2xl:block' />
    </Layout>
  );
};

export default StRyansDayPage;