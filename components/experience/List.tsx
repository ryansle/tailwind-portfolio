// Components
import { FaGear as Gear } from 'react-icons/fa6';

type ListProps = {
  list: string[];
};

const List = (props: ListProps) => {
  const { list } = props;

  return (
    <div>
      <ul className='space-y-2 text-gray-500 list-inside'>
        {list.map((bullet) => (
          <li key={bullet} className='flex'>
            <Gear className='fill-teal-500 w-3 h-3 flex-shrink-0 mt-[5px]' />
            <p className='ml-3'>
              {bullet}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { List };