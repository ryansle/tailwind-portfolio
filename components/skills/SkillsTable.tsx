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
    <tr className={`${renderBottomBorder ? 'border-b border-white/10' : ''} block px-4 py-5 transition-colors hover:bg-white/[0.02] lg:table-row lg:px-0 lg:py-0`}>
      <td className='block h-full px-0 py-0 align-middle lg:table-cell lg:px-5 lg:py-5 lg:pr-4'>
        <div className='flex items-center space-x-3'>
          {icon && (
            <NextImage
              className={radii ? 'rounded-full' : ''}
              src={convertImageUrl(icon)}
              height={30}
              width={30}
              alt={`${technology} Icon`}
            />
          )}
          

          <p className='text-base font-semibold tracking-wide text-white lg:pr-10'>
            {technology}
          </p>
        </div>
        <p className='mt-3 block max-w-none pr-2 text-sm leading-6 text-soft lg:hidden'>
          {uses}
        </p>
      </td>
      <td className='hidden w-[300px] px-5 align-middle text-xs lg:table-cell'>
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
      <td className='mt-4 block px-0 align-middle lg:mt-0 lg:table-cell lg:px-5'>
        <div className='mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted lg:hidden'>
          Confidence
        </div>
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
    <div className='ui-card relative overflow-hidden'>
      <table className='w-full text-left text-sm text-gray-400'>
        <thead className='hidden border-b border-white/10 text-xs uppercase tracking-widest text-gray-400 lg:table-header-group'>
          <tr>
            {headers.map((title) => (
              <th
                key={title}
                scope='col'
                className={`${title === 'My Uses' ? 'hidden lg:table-cell' : 'table-cell'} w-40 px-5 py-4 pr-4 first:pl-5 last:pr-5`}
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
