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
      <div className='grid grid-cols-12 flex items-center'>
        <div className='xl:col-span-5 flex items-center justify-center'>
          <NextImage
            src='/Nebraska.png'
            alt='University of Nebraska-Lincoln'
            height='300'
            width='300'
          />
        </div>

        <div className='xl:col-span-1' />

        <div className='xl:col-span-6'>
          <h1 className='font-bold text-display2 mb-6'>
            Education
          </h1>

          <h2 className='text-3xl font-bold mb-4'>
            University of Nebraska-Lincoln
          </h2>

          <div className='text-lg mb-4'>
            <p>
              Bachelor of Science Degree in <span className={emphasis}>Software Engineering</span>; Minor in <span className={emphasis}>Mathematics.</span>
            </p>
            <p>
              <span className={emphasis}>Cumulative GPA</span>: 3.64 / 4.00
            </p>
            <p className='flex'>
              <span className={emphasis}>Graduation Date</span>: May 8th, 2021 <Grad className='mt-1 ml-2' />
            </p>
          </div>

          <h3 className='font-semibold text-xl mb-2'>
            Accomplishments
          </h3>
          <ul className='space-y-1 text-gray-500 list-inside'>
            {accomplishments.map((accomplishment) => (
              <li key={accomplishment} className='flex'>
                <Check className='fill-teal-500 w-4 h-4 flex-shrink-0 mt-1' />
                <p className='ml-3'>
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
