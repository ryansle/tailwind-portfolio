// Components
import NextImage from 'next/image';
import { MdVerified as Check } from 'react-icons/md';
import { FaGraduationCap as Grad } from 'react-icons/fa6';

const Education = () => {
  const accomplishments = [
    'First Generation College Student',
    'George Beadle Scholar (2017 - 2021)',
    'Out of State Student Leader (2018 - 2019)',
    'Grace Hopper Conference Scholar 2020',
    'Named to Deans\' List five semesters',
    'Vice President of Communications, Engineering Student Advisory Board (2020 - 2021)',
  ];

  const emphasis = 'text-teal-500 font-semibold';
  return (
    <div>
      <div className='mb-6'>
        <p className='ui-eyebrow mb-3'>Education</p>
        <h2 className='page-title mb-4'>Built on engineering fundamentals and early leadership.</h2>
      </div>

      <div className='grid grid-cols-12 gap-6 xl:items-center'>
        <div className='flex items-center justify-center col-span-12 xl:col-span-5'>
          <NextImage
            src='/Nebraska.png'
            alt='University of Nebraska-Lincoln'
            height='300'
            width='300'
          />
        </div>

        <div className='col-span-12 xl:col-span-7'>
          <h3 className='type-section-title mb-4'>
            University of Nebraska-Lincoln
          </h3>

          <div className='mb-5 space-y-1 text-base tracking-wide text-soft'>
            <p>
              B.S. in <span className={emphasis}>Software Engineering</span>, with a minor in <span className={emphasis}>Mathematics.</span>
            </p>
            <p>
              <span className={emphasis}>GPA</span>: 3.64 / 4.00
            </p>
            <p className='flex'>
              <span className={emphasis}>Graduated</span>: May 8, 2021 <Grad className='mt-1 ml-2' />
            </p>
          </div>

          <h4 className='type-meta mb-3'>
            Accomplishments
          </h4>
          <ul className='space-y-2 border-t border-white/10 pt-4 text-soft list-inside'>
            {accomplishments.map((accomplishment) => (
              <li key={accomplishment} className='flex'>
                <Check className='fill-teal-500 w-4 h-4 flex-shrink-0 mt-1' />
                <p className='ml-3 tracking-wide'>
                  {accomplishment}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Education };
