// Components
import { Heading } from '@/components/global';
import NextImage from 'next/image';
import NextLink from 'next/link';

// Utilities
import { fetchSkills } from '@/data/fetch';
import { convertImageUrl } from '@/utils/convert';

// Types
import type { ContentfulImage } from '@/lib/types';

const Hero = async () => {
  const skills = await fetchSkills();

  const currentStack = skills.filter((skill) => skill.primary);

  return (
    <div>
      <div className='grid grid-cols-12 flex items-center flex-wrap-reverse'>
        <div className='col-span-12 order-last xl:col-span-7 xl:order-first'>
          {/* TODO: animate hand wave */}
          <Heading className='text-teal-500'>👋🏼 Hey there, I&apos;m...</Heading>
          <Heading
            size='3xl'
            bold
          >
            Ryan Le.
          </Heading>
          <Heading size='sm'>
            I&apos;m currently a <span className='text-teal-500 font-semibold'>UI Engineer II</span> at <NextLink className='text-red-500 hover:underline' href='https://www.crowdstrike.com/'>CrowdStrike</NextLink>, working on all things front-end.
          </Heading>

          <Heading className='mt-8 mb-1' size='xs' bold>
            A little about me...
          </Heading>

          <div className='text-gray-500 tracking-wide space-y-1 font-medium'>
            <p>🚀 &nbsp; Always exploring opportunities, side projects, freelancing and more.</p>
            <p>🎓 &nbsp; University of Nebraska-Lincoln Alumni. Degree in Software Engineering.</p>
            <p>🤝🏼 &nbsp; Cofounder of the <NextLink className='text-blue-400 hover:underline' href='https://ryanmeetup.com'>Ryan Meetup</NextLink>.</p>
            <p>🏙️ &nbsp; Currently based out of New York City.</p>
          </div>
        </div>
        <div className='col-span-0 xl:col-span-1' />
        <div className='col-span-12 flex items-center justify-center mb-10 xl:col-span-4 xl:mt-10 xl:mb-0'>
          {/* TODO: animate image */}
          {/* TODO: fix image on breakpoints */}
          <div className='relative aspect-square h-96 xl:w-full xl:max-h-[400px]'>
            <NextImage
              className='rounded-full drop-shadow-2xl'
              src='/headshot.png'
              fill
              alt='Ryan Le - Headshot'
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      <div className='flex items-start mt-8 flex-col xl:flex-row xl:items-center'>
        <Heading className='mb-2 xl:mb-0' size='xs'>
          Currently Working With
        </Heading>
        <div className='mx-8 mb-4 w-0.5 border border-white h-10 hidden xl:block xl:mb-0' />
        <div className='flex space-x-8 flex-wrap'>
          {currentStack.map((skill) => (
            <div
              key={skill.technology as string}
              className='relative w-10 h-10'
            >
              <NextImage
                src={convertImageUrl(skill.icon as ContentfulImage)}
                fill
                alt={skill.technology as string}
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div >
  );
};

export { Hero };
