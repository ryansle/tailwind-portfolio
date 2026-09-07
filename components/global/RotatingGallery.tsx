'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import { FaChevronLeft as ChevronLeft, FaChevronRight as ChevronRight } from 'react-icons/fa6';

import type { GalleryItem } from '@/lib/gallery';

type RotatingGalleryProps = {
  className?: string;
  items: GalleryItem[];
  priority?: boolean;
  sizes?: string;
};

const transitionClasses = {
  enter: 'transition duration-700 ease-out',
  enterFrom: 'opacity-0 translate-x-8',
  enterTo: 'opacity-100 translate-x-0',
  leave: 'transition duration-700 ease-in',
  leaveFrom: 'opacity-100 translate-x-0',
  leaveTo: 'opacity-0 -translate-x-8',
};

/* Solid enough to stay readable over a bright photo, which `ui-badge` alone isn't. */
const overlayChrome = 'border-white/20 bg-slate-950/75 backdrop-blur-sm';

const RotatingGallery = (props: RotatingGalleryProps) => {
  const {
    className,
    items,
    priority = false,
    sizes = '(min-width: 1024px) 62vw, 100vw',
  } = props;

  const [activeSlide, setActiveSlide] = useState(0);

  const slideCount = items.length;

  if (slideCount === 0) return null;

  const step = (delta: number) => {
    setActiveSlide((current) => (current + delta + slideCount) % slideCount);
  };

  // Clamped on read so a shorter `items` list can never point past the end.
  const currentIndex = activeSlide % slideCount;
  const activeItem = items[currentIndex];

  return (
    <div
      className={clsx('relative isolate overflow-hidden', className ?? 'ui-card h-60 sm:h-80 lg:h-[380px]')}
      role='group'
      aria-roledescription='carousel'
      aria-label='Community photos'
    >
      {items.map((slide, index) => (
        <Transition key={slide.src} appear show={currentIndex === index} {...transitionClasses}>
          <div className='absolute inset-0'>
            <Image
              fill
              priority={priority && index === 0}
              className='object-cover'
              src={slide.src}
              sizes={sizes}
              alt={slide.alt}
            />
            <div className='absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/10 to-transparent' />
          </div>
        </Transition>
      ))}

      <p className='sr-only' aria-live='polite' aria-atomic='true'>
        Photo {currentIndex + 1} of {slideCount}: {activeItem.alt}
      </p>

      {(activeItem.title || activeItem.city) && (
        <div className='pointer-events-none absolute bottom-4 left-4 z-20 flex flex-wrap items-center gap-2 sm:bottom-5 sm:left-5'>
          {activeItem.title && (
            <span className={clsx('ui-badge font-semibold text-white', overlayChrome)}>{activeItem.title}</span>
          )}
          {activeItem.city && (
            <span className={clsx('ui-badge gap-1.5 text-white/70', overlayChrome)}>
              <span aria-hidden>📍</span>
              {activeItem.city}
            </span>
          )}
        </div>
      )}

      {slideCount > 1 && (
        <>
          <div className='pointer-events-none absolute inset-x-3 top-1/2 z-30 flex -translate-y-1/2 justify-between sm:inset-x-4'>
            <button
              type='button'
              aria-label='Show the previous photo'
              className='ui-icon-button pointer-events-auto'
              onClick={() => step(-1)}
            >
              <ChevronLeft className='h-3.5 w-3.5' aria-hidden />
            </button>

            <button
              type='button'
              aria-label='Show the next photo'
              className='ui-icon-button pointer-events-auto'
              onClick={() => step(1)}
            >
              <ChevronRight className='h-3.5 w-3.5' aria-hidden />
            </button>
          </div>

          <div
            className={clsx(
              /* A dozen dots do not fit beside the caption on a narrow card, so below `md` the arrows carry it. */
              'absolute bottom-4 right-4 z-20 hidden items-center gap-1.5 rounded-full border px-2.5 py-2 sm:bottom-5 sm:right-5 md:flex',
              overlayChrome,
            )}
          >
            {items.map((slide, index) => (
              <button
                key={slide.src}
                type='button'
                aria-label={`Show photo ${index + 1} of ${slideCount}`}
                aria-current={currentIndex === index}
                className='group/dot flex h-3 items-center justify-center rounded-full px-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-300/70'
                onClick={() => setActiveSlide(index)}
              >
                <span
                  className={clsx(
                    'h-1.5 rounded-full transition-all duration-(--duration-base)',
                    currentIndex === index ? 'w-5 bg-teal-300' : 'w-1.5 bg-white/40 group-hover/dot:bg-white/80',
                  )}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export { RotatingGallery };
