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
    <div className='ui-badge ui-badge-brand mt-1 mr-2'>
      <NextImage
        className={radii ? 'rounded-full' : 'rounded-none'}
        src={convertImageUrl(icon)}
        width={15}
        height={15}
        alt={name}
      />
      <p className='ml-1.5 text-white'>{name}</p>
    </div>
  );
};

export { TechLabel };
