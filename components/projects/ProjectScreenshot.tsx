'use client';

import { useState } from 'react';
import NextImage from 'next/image';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { HiOutlineZoomIn, HiX } from 'react-icons/hi';
import type { Project } from '@/lib/types';
import { convertImageUrl } from '@/utils/convert';

type ProjectScreenshotProps = {
  title: string;
  image: Project['image'];
  featured?: boolean;
};

const ProjectScreenshot = ({ title, image, featured = false }: ProjectScreenshotProps) => {
  const [open, setOpen] = useState(false);
  const src = convertImageUrl(image);
  const dimensions = image?.fields?.file?.details?.image;

  if (!src) return null;

  return (
    <>
      <button
        type='button'
        onClick={() => setOpen(true)}
        aria-label={`Enlarge ${title} screenshot`}
        aria-haspopup='dialog'
        className={`group/screenshot relative block w-full cursor-zoom-in overflow-hidden focus-visible:outline-solid focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-teal-300 ${featured ? 'rounded-xl' : 'h-full'}`}
      >
        <NextImage
          src={src}
          alt={`${title} project preview`}
          {...(featured
            ? { width: dimensions?.width ?? 1600, height: dimensions?.height ?? 900 }
            : { fill: true })}
          sizes={featured
            ? '(min-width: 1550px) 640px, (min-width: 1024px) calc(50vw - 112px), (min-width: 640px) calc(100vw - 128px), calc(100vw - 80px)'
            : '(min-width: 1550px) 700px, (min-width: 768px) 50vw, 100vw'}
          className={`transition duration-300 group-hover/screenshot:brightness-110 group-focus-visible/screenshot:brightness-110 motion-safe:group-hover/screenshot:scale-[1.02] motion-safe:group-focus-visible/screenshot:scale-[1.02] ${featured ? 'h-auto w-full' : 'object-cover'}`}
        />
        {!featured && (
          <span aria-hidden className='pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/20 to-transparent' />
        )}
        <span aria-hidden className='pointer-events-none absolute bottom-3 right-3 flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/85 px-3 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-xs transition duration-200 sm:opacity-0 sm:group-hover/screenshot:opacity-100 sm:group-focus-visible/screenshot:opacity-100'>
          <HiOutlineZoomIn className='h-4 w-4' />
          View screenshot
        </span>
      </button>

      <Dialog open={open} onClose={() => setOpen(false)} className='fixed inset-0 z-60'>
        <DialogBackdrop transition className='fixed inset-0 bg-slate-950/90 backdrop-blur-xs transition duration-200 data-closed:opacity-0 motion-reduce:transition-none' />
        <div className='fixed inset-0 overflow-y-auto p-3 sm:p-6'>
          <div className='flex min-h-full items-center justify-center'>
            <DialogPanel transition className='flex max-h-[calc(100dvh-1.5rem)] w-full max-w-[1600px] flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950 shadow-2xl transition duration-200 data-closed:opacity-0 motion-reduce:transition-none sm:max-h-[calc(100dvh-3rem)]'>
              <div className='flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5'>
                <DialogTitle className='min-w-0 text-sm font-semibold text-white wrap-anywhere sm:text-base'>
                  {title}
                </DialogTitle>
                <button
                  type='button'
                  onClick={() => setOpen(false)}
                  aria-label='Close screenshot'
                  className='ui-icon-button h-11 w-11 shrink-0'
                >
                  <HiX className='h-5 w-5' aria-hidden />
                </button>
              </div>
              <div className='min-h-0 overflow-y-auto overscroll-contain'>
                {/* Load the original asset only when opened, preserving screenshot text and detail. */}
                <NextImage
                  unoptimized
                  src={src}
                  alt={`${title} full-resolution screenshot`}
                  width={dimensions?.width ?? 1600}
                  height={dimensions?.height ?? 900}
                  className='mx-auto block h-auto w-full'
                />
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export { ProjectScreenshot };
