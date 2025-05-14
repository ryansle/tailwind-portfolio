// Components
import { Layout } from '@/components/navigation';
import { FeaturedIn, MediaTile } from '@/components/ryan-meetup';
import { Divider } from '@/components/global';
import NextLink from 'next/link';

// Types
import type { Outlet } from '@/lib/types';
import type { Metadata } from 'next';

// Utilities
import { fetchOutlets } from '@/data/fetch';

export const metadata: Metadata = {
  title: 'Ryan Le - Ryan Meetup',
  description: 'Ryan Le is one of the three co-founding Ryans of the Ryan Meetup.',
  keywords: ['ryan le', 'front-end developer', 'brooklyn software engineer', 'ryan le engineer', 'ryan le software', 'contact ryan le', 'ui engineer', 'ryan le ui engineer', 'ryan le frontend dev', 'ryan le crowdstrike', 'ryan le ryan meetup', 'ryan le american express', 'ryan le amex', 'ryan le hoffman strategy group', 'ryan le nelnet', 'ryan le re-logic', 'ryan le ryan meetup', 'who started the ryan meetup'],
  openGraph: {
    url: 'https://ryanle.dev/ryan-meetup',
    title: 'Ryan Le - Ryan Meetup',
    description: 'Ryan Le is one of the three co-founding Ryans of the Ryan Meetup.',
    siteName: 'Ryan Le\'s Portfolio',
    images: [
      {
        url: 'https://ryanle.dev/seo/ryan.png',
        width: 2056,
        height: 1163,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const RyanMeetupPage = async () => {
  const outlets = await fetchOutlets();

  const margins = 'xs:px-20 lg:px-48 2xl:px-72 3xl:px-[400px] 4xl:px-[500px]';
  const emphasis = 'text-teal-500 font-semibold';

  const tiles = [
    {
      href: '/ryan-meetup/rockies',
      src: '/ryan-meetup/rockies.webp',
      title: 'Ryans @ Rockies'
    },
    {
      href: '/ryan-meetup/anthony-meetup',
      src: '/ryan-meetup/anthony.webp',
      title: 'Ryans @ Rockies'
    },
    {
      href: '/ryan-meetup/game-show',
      src: '/ryan-meetup/gameshow.webp',
      title: 'Ryans @ Rockies'
    },
    {
      href: '/ryan-meetup/mint-mobile',
      src: '/ryan-meetup/mint.webp',
      title: 'Ryans @ Rockies'
    },
    {
      href: '/ryan-meetup/150-deadpools',
      src: '/ryan-meetup/deadpool.webp',
      title: 'Ryans @ Rockies'
    },
    {
      href: '/ryan-meetup/st-ryans-day',
      src: '/ryan-meetup/stryan.webp',
      title: 'Ryans @ Rockies'
    },
    {
      href: '/ryan-meetup/rytoberfest',
      src: '/ryan-meetup/rytoberfest.webp',
      title: 'Ryans @ Rockies'
    },
    {
      href: '/ryan-meetup/ryan-rave',
      src: '/ryan-meetup/rave.webp',
      title: 'Ryans @ Rockies'
    },
  ];

  return (
    <Layout fullscreen>
      <div className={`text-center ${margins}`}>
        <h1 className='font-cooper text-5xl xl:text-8xl'>RYAN MEETUP</h1>
        <h2 className='text-3xl text-gray-400 italic mt-2'>has been featured in:</h2>
      </div>

      <FeaturedIn 
        outlets={outlets as Outlet[]} 
        className='my-8'
      />

      <div className={`text-gray-400 tracking-wide text-xl ${margins}`}>
        <Divider />

        <h1 className='text-center text-3xl xl:text-5xl text-white font-bold mb-8'>About the Ryan Meetup</h1>

        <div className='space-y-4'>
          <p>
            I&apos;m Co-Founder and Chief Operations Ryan of a non-profit organization called Ryan Meetup, which specializes in hosting exclusive events for people named Ryan. What started as 3 Ryans meeting because of a flyer has grown into a worldwide movement — with over 20,000 Ryans in over 60 countries. 
          </p>
          <p>
            If your name is Ryan, please join our group <NextLink className={emphasis} href='https://www.ryanmeetup.com/'>here</NextLink>. If your name is not Ryan, please change it to Ryan <NextLink href='https://www.nycourts.gov/forms/Name-SexDesignationChange/AdultName-SexDesignationChangePetition-fillable.pdf' className={emphasis}>here</NextLink>. If your name is Bryan, please leave my site and never come back. Below are some highlights from the past two years:
          </p>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-4 mt-8'>
          {tiles.map((tile) => (
            <MediaTile 
              key={tile.title}
              href={tile.href}
              src={tile.src}
              title={tile.title}
            />
          ))}
        </div>

        <Divider />

        <h1 className='text-center text-3xl xl:text-5xl text-white font-bold mb-8'>Why are we doing this?</h1>

        <div className='space-y-4'>
          <p>
            In February 2023, Ryan Rose wanted to make friends in her Brooklyn neighborhood, so she hung up the original Ryan Meetup flyers. What she didn&apos;t know at the time was that she would be kickstarting a worldwide movement
            and creating a community of Ryans from all over. Now, we at Ryan Meetup are all united in our goal to eventually break the world record for the <NextLink href='https://www.guinnessworldrecords.com/world-records/largest-same-name-gathering-first-name' className={emphasis}>largest same name gathering</NextLink>, and we&apos;ll stop at nothing to get there.
          </p>
          <p>
            Two years and 15+ events later, we&apos;ve built something incredibly special and are still moving full speed ahead in our pursuit of that world record. It also helps that these events are very fun to host and attend.
          </p>
        </div>
      </div>
    </Layout>
  );
};  

export default RyanMeetupPage;
