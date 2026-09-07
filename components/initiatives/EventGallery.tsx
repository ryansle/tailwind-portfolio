'use client';

import Image from 'next/image';
import { Fragment, useState } from 'react';
import { DialogTitle } from '@headlessui/react';

import { EventVideo } from './EventVideo';
import { DialogFrame } from '@/components/global/DialogFrame';
import {
  FaArrowUpRightFromSquare as ExternalLink,
  FaExpand as Expand,
  FaLocationDot as Pin,
  FaRegCalendar as Calendar,
} from 'react-icons/fa6';

import type { EventHighlight } from '@/lib/events';

type EventGalleryProps = {
  events: EventHighlight[];
};

const EventGallery = (props: EventGalleryProps) => {
  const { events } = props;

  /*
    `open` is tracked apart from the index so the panel keeps rendering the
    event it was showing while the close transition plays out.
  */
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  if (events.length === 0) return null;

  const activeEvent = events[activeIndex] ?? events[0];

  const openEvent = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  return (
    <>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {events.map((event, index) => (
          <button
            key={event.src}
            type='button'
            aria-haspopup='dialog'
            className='ui-card motion-parent ui-focus-inset group relative overflow-hidden text-left transition duration-(--duration-base) hover:-translate-y-0.5'
            onClick={() => openEvent(index)}
          >
            <div className='relative aspect-video overflow-hidden'>
              <Image
                fill
                className='motion-media object-cover'
                src={event.src}
                alt={event.alt}
                sizes='(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'
              />
              <div className='absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent' />

              <span className='ui-icon-button absolute right-3 top-3 p-2 opacity-0 transition duration-(--duration-base) group-hover:opacity-100 group-focus-visible:opacity-100'>
                <Expand className='h-3 w-3' aria-hidden />
              </span>

              <span className='absolute inset-x-4 bottom-4 text-sm font-semibold tracking-wide text-white'>
                {event.label}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/*
        Capped to the viewport with the scroll on the inside, so a long
        write-up never runs past the fold. The close button and resource
        footer stay put while the event content scrolls.
      */}
      <DialogFrame
        open={open}
        onClose={() => setOpen(false)}
        closeLabel='Close'
        className='ui-card max-h-[90vh] max-w-4xl'
        footer={activeEvent.sources && activeEvent.sources.length > 0 && (
          <footer className='shrink-0 border-t border-white/10 bg-(--surface-strong) px-6 py-3 sm:px-8 lg:px-10'>
            <nav aria-label='Event articles and useful links' className='flex flex-wrap gap-x-6'>
              {activeEvent.sources.map((source) => (
                <a
                  key={source.href}
                  className='interactive-link inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-white hover:text-teal-300'
                  href={source.href}
                  target='_blank'
                  rel='noreferrer'
                >
                  {source.label}
                  <ExternalLink className='h-3 w-3 shrink-0' aria-hidden />
                </a>
              ))}
            </nav>
          </footer>
        )}
      >
        {/*
          These are posters, not photographs, so cropping one to fill a
          short banner cuts the artwork up. The poster sits whole on a
          blurred copy of itself instead, which fills the width without
          losing anything.
        */}
        {/* Every poster is roughly 16:9, so the middle box matches the artwork rather than cropping it. */}
        <div className='relative flex h-52 w-full shrink-0 items-center justify-center overflow-hidden bg-slate-950 sm:h-60 lg:h-64'>
          <div className='poster-bleed-left relative aspect-video h-full shrink-0'>
            <Image
              fill
              aria-hidden
              className='object-cover blur-lg transform-[scaleX(-1.15)_scaleY(1.15)]'
              src={activeEvent.src}
              alt=''
              sizes='(min-width: 768px) 30rem, 100vw'
            />
          </div>

          <div className='relative aspect-video h-full shrink-0'>
            <Image
              fill
              className='object-cover'
              src={activeEvent.src}
              alt={activeEvent.alt}
              sizes='(min-width: 768px) 30rem, 100vw'
            />
          </div>

          <div className='poster-bleed-right relative aspect-video h-full shrink-0'>
            <Image
              fill
              aria-hidden
              className='object-cover blur-lg transform-[scaleX(-1.15)_scaleY(1.15)]'
              src={activeEvent.src}
              alt=''
              sizes='(min-width: 768px) 30rem, 100vw'
            />
          </div>
        </div>

        <div className='p-6 sm:p-8 lg:p-10'>
          <DialogTitle className='type-section-title pr-10 text-white'>
            {activeEvent.label}
          </DialogTitle>

          <div className='mt-4 flex flex-wrap gap-2'>
            <span className='ui-badge gap-1.5'>
              <Calendar className='h-3 w-3' aria-hidden />
              {activeEvent.date}
            </span>
            <span className='ui-badge gap-1.5'>
              <Pin className='h-3 w-3' aria-hidden />
              {activeEvent.city}
            </span>
            <span className='ui-badge'>{activeEvent.venue}</span>
          </div>

          <div className='mt-5 space-y-4 type-body'>
            {activeEvent.summary.map((paragraph, index) => (
              <Fragment key={paragraph}>
                <p>{paragraph}</p>
                {index === 0 && activeEvent.summaryCallout && (
                  <div className='rounded-surface border border-teal-300/25 bg-teal-300/[0.07] p-5 sm:p-6'>
                    <p className='text-4xl font-black tracking-tight text-teal-300 sm:text-6xl'>
                      {activeEvent.summaryCallout.title}
                    </p>
                    <p className='mt-3 text-base leading-7 text-white'>
                      {activeEvent.summaryCallout.description}
                    </p>
                  </div>
                )}
              </Fragment>
            ))}
          </div>

          <p className='type-meta mt-7'>{activeEvent.factsTitle}</p>

          <ul className='mt-3 space-y-3'>
            {activeEvent.facts.map((fact) => (
              <li key={fact} className='flex gap-3 text-sm leading-7 text-soft'>
                <span className='mt-3 h-1 w-1 shrink-0 rounded-full bg-teal-300' aria-hidden />
                {fact}
              </li>
            ))}
          </ul>

          {activeEvent.videos && activeEvent.videos.length > 0 && (
            <>
              <p className='type-meta mt-7'>Watch</p>

              <div className='mt-3 grid gap-4 sm:grid-cols-2'>
                {activeEvent.videos.map((video) => (
                  <EventVideo
                    key={video.id}
                    channel={video.channel}
                    id={video.id}
                    title={video.title}
                  />
                ))}
              </div>
              {activeEvent.videoNote && (
                <p className='mt-4 text-sm leading-7 text-soft'>{activeEvent.videoNote}</p>
              )}
            </>
          )}
        </div>
      </DialogFrame>
    </>
  );
};

export { EventGallery };
