// Components
import { Layout } from '@/components/navigation';
import { Embed } from '@/components/ryan-meetup';
import NextImage from 'next/image';
import NextLink from 'next/link';

// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '150 Deadpools & Wolverine',
  description: 'Ryan Meetup - 150 Deadpools & Wolverine on July 27th, 2024.',
  openGraph: {
    url: 'https://ryanle.dev/ryan-meetup/150-deadpools',
    title: '150 Deadpools & Wolverine',
    description: 'Ryan Meetup - 150 Deadpools & Wolverine on July 27th, 2024.',
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

const DeadpoolsPage = () => {
  const emphasis = 'text-teal-500 font-semibold';

  const left = [
    { src: '/ryan-meetup/assets/deadpool/1.webp', alt: 'literally the best piece of advertising I have ever consumed' },
    { src: '/ryan-meetup/assets/deadpool/2.webp', alt: 'Top tier marketing' },
    { src: '/ryan-meetup/assets/deadpool/3.webp', alt: 'Ryan' },
    { src: '/ryan-meetup/assets/deadpool/4.webp', alt: 'wont lie hugh ryan was iconic' },
  ];

  const right = [
    { src: '/ryan-meetup/assets/deadpool/5.webp', alt: 'The marketing of all three Deadpool movies needs to be taught to all marketing majors' },
    { src: '/ryan-meetup/assets/deadpool/6.webp', alt: 'this is so Ryan' },
    { src: '/ryan-meetup/assets/deadpool/7.webp', alt: 'Deadpool and Wolverine have the BEST social media marketing strategy.' },
    { src: '/ryan-meetup/assets/deadpool/8.webp', alt: 'Can\'t believe THE Ryann Reynolds was there' },
  ];

  return (
    <Layout>
      <NextLink href='/ryan-meetup' className='font-cooper text-3xl uppercase text-center mb-2 transition duration-300 ease-in-out hover:scale-105'>
        Ryan Meetup
      </NextLink>
      <h1 className='text-center font-cooper text-5xl xl:text-6xl'>
        150 Deadpools & Wolverine
      </h1>

      <div className='text-gray-400 tracking-wide text-xl mt-8 text-center'>
        <p className='mb-4'>
          The guy who plays Deadpool is named Ryan. So we filled a theater with 150 Ryans (and one special guest) to support his latest movie "Deadpool & Wolverine".  After our event went viral, many were convinced it was part of the movie's $100 million promotional campaign. But our bank account knows the truth.
        </p>

        <p>
          Special shoutout to Ryan Vesler over at <NextLink href='https://www.homage.com/' className={emphasis}>Homage</NextLink> for sponsoring the event and allowing every Ryan there to walk away with an exclusive shirt from their new <NextLink className={emphasis} href='https://www.homage.com/pages/threadpool?srsltid=AfmBOoqjhbqf1huX8r4dx4kkbsU5B6jOWvK4Dkt1lOrtvyv9MvMS_m8n'>Threadpool Collection</NextLink>.
        </p>

        <div className='grid grid-cols-1 xl:grid-cols-3 gap-8 mt-8'>
          <div className='space-y-8 flex flex-col items-center justify-center'>
            {left.map((photo, index) => (
              <div className='relative w-full h-24'>
                <NextImage 
                  src={photo.src}
                  alt={photo.alt}
                  className={`${index % 2 === 0 ? 'mr-4' : 'ml-4'}`}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>      
  
          <Embed 
            variant='instagram'
            href='https://www.instagram.com/reel/C-L9l-EOabc/?hl=en'
          />

          <div className='space-y-8 flex flex-col items-center justify-center'>
            {right.map((photo, index) => (
              <div className='relative w-full h-24'>
                <NextImage 
                  src={photo.src}
                  alt={photo.alt}
                  className={`${index % 2 === 0 ? 'ml-4' : 'mr-4'}`}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeadpoolsPage;