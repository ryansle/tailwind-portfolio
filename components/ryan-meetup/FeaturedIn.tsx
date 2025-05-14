'use client';

// Components
import NextImage from 'next/image';
import NextLink from 'next/link';
import Marquee from 'react-fast-marquee';

// Types
import type { ContentfulImage, Outlet } from '@/lib/types';

// Utilities
import { convertImageUrl } from '@/utils/convert';

type FeaturedInProps = {
  outlets: Outlet[];
  className?: string;
}

const FeaturedIn = (props: FeaturedInProps) => {
  const { outlets, className} = props;

  return (
    <div className={`${className}`}>
      <Marquee speed={50} gradient={false}>
        {outlets.map((outlet, idx) => (
          <div key={idx} className="mx-8 flex items-center justify-center">
            <NextLink href={outlet.href} className='transition duration-300 ease-in-out hover:scale-105'>
              <NextImage
                src={convertImageUrl(outlet.logo as ContentfulImage)}
                alt={outlet.outlet}
                width={0}
                height={40}
                className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto object-contain"
                sizes="(max-width: 768px) 100px, 300px"
              />
            </NextLink>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export { FeaturedIn };