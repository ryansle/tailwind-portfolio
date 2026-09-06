// Components
import NextImage from 'next/image';

// Types
import { ContentfulImage } from '@/lib/types';

// Utilities
import { convertImageUrl } from '@/utils/convert';

type TechLabelProps = {
  name: string;
  icon?: ContentfulImage;
  radii: boolean;
}

const TechLabel = (props: TechLabelProps) => {
  const { name, icon, radii } = props;

  const iconUrl = convertImageUrl(icon);

  return (
    <div className='ui-badge ui-badge-brand mt-1 mr-2'>
      {iconUrl && (
        <NextImage
          className={radii ? 'rounded-full' : 'rounded-none'}
          src={iconUrl}
          width={15}
          height={15}
          alt={name}
        />
      )}
      <p className={`text-white ${iconUrl ? 'ml-1.5' : ''}`}>{name}</p>
    </div>
  );
};

export { TechLabel };
