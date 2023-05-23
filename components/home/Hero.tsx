// Components
import { Heading } from '@/components/global';
import NextImage from 'next/image';
import NextLink from 'next/link';

// Utilities
import { fetchSkills } from '@/data/fetch';
import { convertImageUrl } from '@/utils/convert';

// Types
import type { Skill } from '@/lib/types';

const Hero = async () => {
  const skills = await fetchSkills();

  const currentStack = skills.filter((skill) => skill.primary);
  console.log(currentStack[0].icon)

  return (
    <div>
      <div className='grid grid-cols-12 flex items-center'>
        <div className='col-span-12 xl:col-span-7'>
          {/* TODO: animate hand wave */}
          <Heading>👋🏼 Hey there, I&apos;m...</Heading>
          <div className='hidden lg:block'>
            <Heading
              size='3xl'
              bold
            >
              Ryan Le.
            </Heading>
          </div>
          <div className='block lg:hidden'>
            <Heading
              size='2xl'
              bold
            >
              Ryan Le.
            </Heading>
          </div>
          <Heading className='mt-4' size='sm'>
            I&apos;m currently a <span className='text-teal-500 font-semibold'>UI Engineer II</span> at CrowdStrike, working on all things front-end.
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
        <div className='col-span-0 sm:col-span-1' />
        <div className='col-span-12 mt-10 xl:col-span-4 xl:mt-0'>
          {/* TODO: animate image */}
          {/* TODO: fix image on breakpoints */}
          <div className='relative w-full h-[500px] object-bottom md:h-[700px] lg:h-[400px] lg:object-center'>
            <NextImage
              className='rounded-full w-full object-right'
              src='/headshot.png'
              fill
              alt='Ryan Le - Headshot'
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      <div className='flex items-center mt-8'>
        <Heading size='xs'>
          Currently Working With
        </Heading>
        <Heading size='xs' className='mx-8'>
          |
        </Heading>
        <div className='flex space-x-8'>
          {currentStack.map((skill) => (
            <div
              key={skill.technology}
              className='relative w-10 h-10'
            >
              <NextImage
                src={convertImageUrl(skill.icon)}
                fill
                alt={skill.technology}
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Hero };
