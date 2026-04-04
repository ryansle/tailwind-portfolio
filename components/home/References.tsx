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
    <article className='mb-4 break-inside-avoid-column rounded-[1.25rem] border border-white/10 bg-[rgba(9,16,30,0.52)] p-5 shadow-[0_18px_40px_rgba(2,6,23,0.16)]'>
      <div className='mb-4 flex items-start gap-4'>
        <div className='relative h-12 w-12 aspect-square'>
          <NextImage
            className='rounded-full shadow'
            src={convertImageUrl(avatar)}
            fill
            alt={`Avatar for ${name}`}
          />
        </div>

        <div className='min-w-0'>
          <div className='mb-1 flex flex-wrap items-center gap-3'>
            <h3 className='text-base font-semibold text-white'>
              {name}
            </h3>

            {linkedinUrl && (
              <NextLink
                className='ui-icon-button !rounded-[0.7rem] !p-2'
                href={linkedinUrl}
                aria-label={`${name}'s LinkedIn Profile`}
              >
                <Linkedin />
              </NextLink>
            )}

            {email && (
              <NextLink
                className='ui-icon-button !rounded-[0.7rem] !p-2'
                href={`mailto:${email}`}
                aria-label={`Contact ${name} via email`}
              >
                <Mail />
              </NextLink>
            )}
          </div>
          <p className='text-sm text-soft'>
            {jobTitle}
          </p>
        </div>
      </div>

      <p className='text-sm leading-7 text-soft'>
        {testimony}
      </p>
    </article>
  );
};

const References = (props: ReferencesProps) => {
  const { references } = props;

  return (
    <section className='space-y-10 tracking-wide'>
      <div className='max-w-4xl'>
        <p className='ui-eyebrow mb-3'>References</p>
        <h2 className='page-title mb-4'>What it&apos;s like to work with me.</h2>
        <p className='type-body'>
          The strongest signal usually comes from the people who have seen the work up close: collaborators, managers, and partners who know how I operate in real product environments.
        </p>
      </div>

      <div>
        <div className='columns-1 gap-4 sm:columns-2 xl:columns-3'>
          {references.map((reference) => (
            <Testimony
              key={reference.name}
              {...reference}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { References };
