// Components
import { Layout } from '@/components/navigation';
import { Embed } from '@/components/ryan-meetup';
import NextImage from 'next/image';
import NextLink from 'next/link';

// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Happy RyDay',
  description: 'Ryan Meetup - Collaboration with Mint Mobile on October 13th, 2024.',
  openGraph: {
    url: 'https://ryanle.dev/ryan-meetup/mint=mobile',
    title: 'Happy RyDay',
  description: 'Ryan Meetup - Collaboration with Mint Mobile on October 13th, 2024.',
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

const MintPage = () => {
  const assets = [
    {
      src: '/ryan-meetup/assets/mint/bright.webp',
      alt: 'Ryan Bright Reaction',
    },
    {
      src: '/ryan-meetup/assets/mint/hatfield.webp',
      alt: 'Ryan Hatfield Reaction',
    },
    {
      src: '/ryan-meetup/assets/mint/reynolds.webp',
      alt: 'Ryan Reynolds Reaction',
    }
  ];

  return (
    <Layout>
      <NextLink href='/ryan-meetup' className='font-cooper text-3xl uppercase text-center mb-2 transition duration-300 ease-in-out hover:scale-105'>
        Ryan Meetup
      </NextLink>
      <h1 className='text-center font-cooper text-5xl 2xl:text-6xl'>
        Happy Ryday
      </h1>

      <div className='text-gray-400 tracking-wide text-xl mt-8 text-center'>
        <p className='mb-4'>
          Mint Mobile asked us to throw Ryan a birthday party on Oct. 23rd. 
          We didn't know which Ryan they meant, so we threw a party for every 
          Ryan we could find with that birthday. Even though one of them never 
          said thank you...or anything for that matter.
        </p>

        <div className='flex justify-center items-center'>
          {/* <div className='relative w-full h-[800px] sm:h-[1800px] xl:h-[1280px]'>
            <NextImage 
              src='/ryan-meetup/assets/mintdm.png'
              alt='Original correspondence with Mint Mobile'
              fill
              style={{ objectFit: 'cover' }}
            />
          </div> */}

          <Embed 
            href='https://www.instagram.com/reel/DBd7498um8D/'
            variant='instagram'
          />
        </div>

        <h3 className='text-center text-4xl font-bold text-white my-8'>
          THEY ALL HAD SOMETHING TO SAY AFTER
        </h3>

        <div className='grid grid-cols-1 xl:grid-cols-3 gap-4'>
          {assets.map((asset) => (
            <NextImage 
              src={asset.src}
              alt={asset.alt}
              height={1564}
              width={879}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MintPage;