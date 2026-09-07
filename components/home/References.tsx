import { PageIntro } from '@/components/global';
import { EmptyContent } from '@/components/global/EmptyContent';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin as Linkedin } from 'react-icons/fa';
import { HiOutlineMailOpen as Mail } from 'react-icons/hi';

import type { Reference } from '@/lib/types';

import { convertImageUrl } from '@/utils/convert';

type ReferencesProps = {
  references: Reference[];
}

// Contentful stores this as one free-text line, usually "Role @ Company". Split
// on the first `@` so the company can carry the accent; entries without one
// render as a single role.
const splitJobTitle = (jobTitle: string) => {
  const [role, ...rest] = jobTitle.split('@');

  return { role: role.trim(), company: rest.join('@').trim() };
};

const Testimony = (props: Reference) => {
  const { name, jobTitle, avatar, testimony, linkedinUrl, email } = props;

  const avatarUrl = convertImageUrl(avatar);
  const { role, company } = splitJobTitle(jobTitle);

  return (
    <article className='mb-4 break-inside-avoid-column rounded-[1.25rem] border border-white/10 bg-[rgba(9,16,30,0.52)] p-5 shadow-[0_18px_40px_rgba(2,6,23,0.16)]'>
      <div className='mb-4 flex items-start gap-4'>
        {avatarUrl && (
          <div className='relative h-12 w-12 aspect-square'>
            <Image
              className='rounded-full shadow-sm'
              src={avatarUrl}
              fill
              sizes='48px'
              alt={`Avatar for ${name}`}
            />
          </div>
        )}

        <div className='min-w-0'>
          <div className='mb-1 flex flex-wrap items-center gap-x-2.5 gap-y-1.5'>
            <h3 className='text-lg font-semibold leading-tight text-white'>
              {name}
            </h3>

            <div className='flex items-center gap-1.5'>
              {linkedinUrl && (
                <Link
                  className='ui-icon-button h-7 w-7 rounded-lg! p-0! text-sm'
                  href={linkedinUrl}
                  aria-label={`${name}'s LinkedIn Profile`}
                >
                  <Linkedin />
                </Link>
              )}

              {email && (
                <Link
                  className='ui-icon-button h-7 w-7 rounded-lg! p-0! text-sm'
                  href={`mailto:${email}`}
                  aria-label={`Contact ${name} via email`}
                >
                  <Mail />
                </Link>
              )}
            </div>
          </div>
          <p className='text-[0.9375rem]'>
            <span className='font-medium text-slate-200'>
              {role}
            </span>

            {company && (
              <>
                <span className='mx-1.5 inline-block text-muted'>@</span>
                <span className='font-semibold text-accent'>
                  {company}
                </span>
              </>
            )}
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
      <PageIntro
        as='h2'
        eyebrow='References'
        title="What it's like to work with me."
        subtitle='The clearest proof usually comes from collaborators, managers, and partners who have seen the work in real delivery environments.'
      />

      {references.length === 0 && <EmptyContent>No testimonials are published yet. Get in touch if you would like references.</EmptyContent>}
      <div>
        <div className='columns-1 gap-4 sm:columns-2 xl:columns-3'>
          {references.map((reference) => (
            <Testimony
              key={reference.id}
              {...reference}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { References };
