import clsx from 'clsx';
import Image from 'next/image';

import type { ContentfulImage } from '@/lib/types';

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
        <Image
          className={clsx(radii ? 'rounded-full' : 'rounded-none')}
          src={iconUrl}
          width={15}
          height={15}
          alt={name}
        />
      )}
      <p className={clsx('text-white', iconUrl && 'ml-1.5')}>{name}</p>
    </div>
  );
};

export { TechLabel };
