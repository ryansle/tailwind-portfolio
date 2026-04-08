// Components
import NextImage from 'next/image';
// import { CompanyTag } from '@/components/skills';
import { AiFillStar as Star } from 'react-icons/ai';

// Types
import type { Skill } from '@/lib/types';

// Utilities
import { convertImageUrl } from '@/utils/convert';

type TableRowProps = {
  skill: Skill;
  renderBottomBorder: boolean;
}

type SkillsTableProps = {
  skills: Skill[];
  header: string;
}

const TableRow = (props: TableRowProps) => {
  const {
    technology,
    icon,
    confidence,
    radii,
    // experiences,
    uses,
  } = props.skill;
  const { renderBottomBorder } = props;

  return (
    <tr className={`${renderBottomBorder && 'border-b border-white/10'} transition-colors hover:bg-white/[0.02]`}>
      <td className='h-full px-5 py-5 pr-4 align-middle'>
        <div className='flex items-center space-x-3 '>
          {icon && (
            <NextImage
              className={radii ? 'rounded-full' : ''}
              src={convertImageUrl(icon)}
              height={30}
              width={30}
              alt={`${technology} Icon`}
            />
          )}
          

          <p className='pr-10 text-base font-semibold tracking-wide text-white'>
            {technology}
          </p>
        </div>
        <p className='mt-2 block w-48 text-sm leading-6 text-soft sm:hidden'>
          {uses}
        </p>
      </td>
      <td className='hidden w-[300px] px-5 align-middle text-xs sm:table-cell'>
        <p className='pr-3 text-sm leading-6 text-soft'>{uses}</p>
      </td>
      {/* <td className='py-2 w-[1000px]'>
        <div className='flex flex-wrap'>
          {experiences.map((company) => (
            <CompanyTag
              key={company}
              company={company}
            />
          ))}
        </div>
      </td> */}
      <td className='px-5 align-middle'>
        <div className='flex items-center'>
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
  const { skills, header } = props;

  const headers = [
    header,
    'My Uses',
    // 'Experiences',
    'Confidence'
  ];

  return (
    <div className='ui-card relative overflow-x-auto'>
      <table className='w-full text-left text-sm text-gray-400'>
        <thead className='border-b border-white/10 text-xs uppercase tracking-widest text-gray-400'>
          <tr>
            {headers.map((title) => (
              <th
                key={title}
                scope='col'
                className={`${title === 'My Uses' && 'hidden sm:block'} w-40 px-5 py-4 pr-4 first:pl-5 last:pr-5`}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {skills.map((skill, index) => (
            skill.visibility ? (
              <TableRow
                key={skill.technology}
                skill={skill}
                renderBottomBorder={index !== skills.filter((item) => item.visibility).length - 1}
              />
            ) : null
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { SkillsTable };
