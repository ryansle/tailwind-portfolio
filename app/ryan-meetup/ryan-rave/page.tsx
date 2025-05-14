// Components
import { Layout } from '@/components/navigation';
import { Embed } from '@/components/ryan-meetup';
import NextLink from 'next/link';
import NextImage from 'next/image';

// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ryan Rave',
  description: 'Ryan Meetup - Ryan Rave on September 2nd, 2023. In collaboration with Ryan the Leader.',
  openGraph: {
    url: 'https://ryanle.dev/ryan-meetup/ryan-rave',
    title: 'Ryan Rave',
    description: 'Ryan Meetup - Ryan Rave on September 2nd, 2023. In collaboration with Ryan the Leader.',
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

const RyanRavePage = () => {
  return (
    <Layout>
      <NextLink href='/ryan-meetup' className='font-cooper text-3xl uppercase text-center mb-2 transition duration-300 ease-in-out hover:scale-105'>
        Ryan Meetup
      </NextLink>
      <h1 className='text-center font-cooper text-6xl'>
        Ryan Rave
      </h1>

      <div className='text-gray-400 tracking-wide text-xl mt-8 text-center'>
        <div className='mb-8'>
          <p>
            After a video about our 'Ryan Retreat' received 60 million views in less than a week, 
            Ryans everywhere were begging us to host another event. We rysponded by throwing our 
            biggest Ryan Meetup of all time (576 Ryans). 
          </p>

          <h3 className='text-4xl font-bold text-white my-8'>
            LONG RECAP
          </h3>

          <div className='hidden xl:block'>
            <Embed
              href='https://www.youtube.com/watch?v=WQisCN32j78'
              width='100%'
              height='700px'
              variant='youtube'
            />
          </div>
          <div className='block xl:hidden'>
            <Embed
              href='https://www.youtube.com/watch?v=WQisCN32j78'
              width='100%'
              height='220px'
              variant='youtube'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
          <div className='space-y-4'>
            <h3 className='text-4xl font-bold text-white'>
              SHORT RECAP
            </h3>
            <Embed 
              href='https://www.instagram.com/reel/Cygxz1zSk3j/?hl=en'
              variant='instagram'
            />
          </div>
          <div>
            <div className='space-y-4'>
              <NextLink 
                className='text-4xl font-bold text-white' 
                href='https://www.ryanmeetup.com/awards'
              >
                FARTHEST-TRAVELING RYANS
              </NextLink>

              <div className='relative h-52 xl:h-[300px] w-full'>
                <NextImage 
                  src='/ryan-meetup/assets/rave/farthest.webp'
                  alt='Farthest traveling Ryans to the Rave from Maine, Philippines, and Alaska'
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>

              <p className='text-sm mt-2'>
                These Ryans traveled to LA from Maine, the Philippines, and Alaska.
              </p>
            </div>

            <div className='mt-8 space-y-4'>
              <h3 className='text-4xl font-bold text-white'>
                YEAH, JOURNALIST RYAN!
              </h3>

              <div className='relative h-96 xl:h-[505px] w-full'>
                <NextImage 
                  src='/ryan-meetup/assets/rave/bryan.webp'
                  alt='The only Bryan at the Ryan Meetup'
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RyanRavePage;