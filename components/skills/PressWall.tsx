// Components
import NextImage from 'next/image';
import NextLink from 'next/link';

type PressFeature = {
  outlet: string;
  href: string;
  logo: string;
  /** Logos have wildly different proportions, so each one gets its own display height. */
  height: string;
  width: number;
  intrinsicHeight: number;
}

type PressWallProps = {
  features: PressFeature[];
  moreHref: string;
  moreLabel: string;
}

const PressWall = (props: PressWallProps) => {
  const { features, moreHref, moreLabel } = props;

  return (
    <div className='subtle-panel px-5 py-6 sm:px-6'>
      <div className='mb-5 flex flex-wrap items-baseline justify-between gap-3'>
        <p className='text-base font-semibold uppercase tracking-[0.18em] text-teal-300'>Featured in</p>
        <NextLink
          className='text-sm text-teal-200 transition hover:text-teal-100'
          href={moreHref}
        >
          {moreLabel}
        </NextLink>
      </div>

      <div className='grid grid-cols-2 gap-3 sm:grid-cols-4'>
        {features.map((feature) => (
          <NextLink
            key={feature.outlet}
            aria-label={`${feature.outlet} coverage of Ryan Meetup`}
            className='interactive-link flex h-24 items-center sm:h-28 justify-center rounded-md border-2 border-white/12 bg-white/2 px-4 transition hover:border-white/20 hover:bg-white/5'
            href={feature.href}
          >
            <NextImage
              className={`${feature.height} w-auto object-contain opacity-80 transition`}
              src={feature.logo}
              width={feature.width}
              height={feature.intrinsicHeight}
              alt={feature.outlet}
            />
          </NextLink>
        ))}
      </div>
    </div>
  );
};

export { PressWall };
export type { PressFeature };
