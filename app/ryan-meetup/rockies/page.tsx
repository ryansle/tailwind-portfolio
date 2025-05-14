// Components
import { Layout } from '@/components/navigation';
import NextLink from 'next/link';

// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ryans @ Rockies',
  description: 'Ryan Meetup - Ryans @ Rockies on June 20th, 2025.',
  openGraph: {
    url: 'https://ryanle.dev/ryan-meetup/rockies',
    title: 'Ryans @ Rockies',
    description: 'Ryan Meetup - Ryans @ Rockies on June 20th, 2025.',
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

const RockiesPage = () => {
  return (
    <Layout>
      <NextLink href='/ryan-meetup' className='font-cooper text-3xl uppercase text-center mb-2 transition duration-300 ease-in-out hover:scale-105'>
        Ryan Meetup
      </NextLink>
      <h1 className='text-center font-cooper text-6xl'>
        Ryans @ Rockies
      </h1>

      <div className='text-gray-400 tracking-wide text-xl mt-8 text-center'>
        <div className='space-y-4'>
          <p>
            Up this point, almost all of our events have occurred on either coast of the country.
          </p>

          <p>
            So when the Colorado Rockies reached out about having us fill a section of Coors Field with Ryans to cheer
            on the Ryans from the team, we jumped at the opportunity to head to Denver.
          </p>
        </div>

         <div>
          <h3 className='text-center text-4xl font-bold text-white my-8'>
            THIS EVENT HAS NOT HAPPENED YET
          </h3>

          <div className='text-center'>
            <p className='font-cooper text-white'>
               - MORE INFO COMING SOON - 
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RockiesPage;