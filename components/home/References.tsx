// Components
import NextImage from 'next/image';
import NextLink from 'next/link';
import { FaLinkedin as Linkedin } from 'react-icons/fa';
import { HiOutlineMailOpen as Mail } from 'react-icons/hi';

// Types
import type { Reference } from '@/lib/types';

// Utilities
import { convertImageUrl } from '@/utils/convert';

type ReferencesProps = {
  references: Reference[];
}

const Testimony = (props: Reference) => {
  const { name, jobTitle, avatar, testimony, linkedinUrl, email } = props;

  return (
    <div className='rounded border border-gray-700 p-4 mb-4 break-inside-avoid-column'>
      <div className='flex space-x-4 mb-4'>
        <div className='relative w-12 h-12 aspect-square'>
          <NextImage
            className='rounded-full shadow'
            src={convertImageUrl(avatar)}
            fill
            alt={`Avatar for ${name}`}
          />
        </div>

        <div>
          <div className='flex space-x-3'>
            <h3 className='font-medium mb-1 text-base'>
              {name}
            </h3>

            {linkedinUrl && (
              <NextLink className='pt-[5px]' href={linkedinUrl}>
                <Linkedin />
              </NextLink>
            )}

            {email && (
              <NextLink className='pt-[5px]' href={`mailto:${email}`}>
                <Mail />
              </NextLink>
            )}
          </div>
          <p className='font-light text-xs'>
            {jobTitle}
          </p>
        </div>
      </div>

      <p className='font-normal text-sm'>
        {testimony}
      </p>
    </div >
  );
};

const References = (props: ReferencesProps) => {
  const { references } = props;

  return (
    <div className='tracking-wide flex flex-col items-center h-full'>
      <h1 className='text-display3 font-bold tracking-wider mb-4'>
        Professional References
      </h1>

      <p className='text-gray-400 font-medium mb-10'>
        Don&apos;t believe me? Hear from people I&apos;ve worked with in the past:
      </p>

      <div className='columns-1 sm:columns-2 xl:columns-3'>
        {references.map((reference) => (
          <Testimony
            key={reference.name}
            name={reference.name}
            jobTitle={reference.jobTitle}
            avatar={reference.avatar}
            testimony={reference.testimony}
            linkedinUrl={reference.linkedinUrl}
            email={reference.email}
          />
        ))}
      </div>
    </div>
  );
};

export { References };
