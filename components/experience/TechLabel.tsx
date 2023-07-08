// Components
import NextImage from 'next/image';

// Types
import { ContentfulImage } from '@/lib/types';

// Utilities
import { convertImageUrl } from '@/utils/convert';

type TechLabelProps = {
  name: string;
  icon: ContentfulImage;
  radii: boolean;
}

const TechLabel = (props: TechLabelProps) => {
  const { name, icon, radii } = props;

  return (
    <div className='mt-1 bg-gray-800 text-xs font-medium px-2 py-1 rounded flex items-center mr-2'>
      <NextImage
        className={radii ? 'rounded-full' : 'rounded-none'}
        src={convertImageUrl(icon)}
        width={15}
        height={15}
        alt={name}
      />
      <p className='text-white ml-1.5'>{name}</p>
    </div>
  );
};

export { TechLabel };
