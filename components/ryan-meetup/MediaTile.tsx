// Components
import NextImage from 'next/image';
import NextLink from 'next/link';

type MediaTileProps = {
  href: string;
  src: string;
  title: string;
};

const MediaTile = (props: MediaTileProps) => {
    const { href, src, title } = props;

  return (
    <NextLink href={href}>
      <div className='border flex flex-col items-center justify-center shadow-xl border-gray-700 rounded-xl h-full transition duration-300 ease-in-out hover:border-white hover:scale-102'>
        <div className='relative w-full flex items-center justify-center rounded-xl h-52 xl:h-80 overflow-hidden bg-center'>
          <div className='w-full h-full brightness-30'>
            <NextImage
              src={src}
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </NextLink>
  );
};

export { MediaTile };
