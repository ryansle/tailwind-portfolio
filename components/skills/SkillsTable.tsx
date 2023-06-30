// Components
import NextImage from 'next/image';
import { CompanyTag } from '@/components/skills';
import { AiFillStar as Star } from 'react-icons/ai';

// Types
import type { Skill } from '@/lib/types';

// Utilities
import { convertImageUrl } from '@/utils/convert';

type TableRowProps = {
  skill: Skill;
}

type SkillsTableProps = {
  skills: Skill[];
}

const TableRow = (props: TableRowProps) => {
  const {
    technology,
    icon,
    confidence,
    radii,
    experiences,
    primary,
    uses,
  } = props.skill;

  return (
    <tr className='border-b border-b-gray-700'>
      <th scope='col' className='px-6 py-3 whitespace-nowrap flex items-center space-x-3 h-full'>
        <NextImage
          className={radii ? 'rounded-full' : ''}
          src={convertImageUrl(icon)}
          height={30}
          width={30}
          alt={`${technology} Icon`}
        />

        <p className='font-semibold tracking-wide text-base text-white'>
          {technology}
        </p>
      </th>
      <td className='w-[300px] text-xs'>
        <p className='pr-3'>{uses}</p>
      </td>
      <td className='py-2'>
        <div className='flex flex-wrap'>
          {experiences.map((company) => (
            <CompanyTag
              key={company}
              company={company}
            />
          ))}
        </div>
      </td>
      <td>
        <div className='flex'>
          {Array(confidence).fill('').map((_, index) => (
            <Star
              key={index}
              className='fill-teal-500 w-4 h-4'
            />
          ))}

          {Array(5 - confidence).fill('').map((_, index) => (
            <Star
              key={index}
              className='w-4 h-4'
            />
          ))}
        </div>
      </td>
    </tr>
  );
};

const SkillsTable = (props: SkillsTableProps) => {
  const { skills } = props;

  const headers = [
    'Technology',
    'My Uses',
    'Experiences',
    'Confidence'
  ];

  return (
    <div className='relative overflow-x-auto'>
      <table className='w-full text-sm text-left text-gray-400'>
        <thead className='text-xs text-gray-400 uppercase tracking-widest'>
          <tr>
            {headers.map((title, index) => (
              <th
                key={title}
                scope='col'
                className={`${index === 0 && 'px-6'} py-3`}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {skills.map((skill) => (
            <>
              {skill.visibility && (
                <TableRow
                  key={skill.technology}
                  skill={skill}
                />
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { SkillsTable };
