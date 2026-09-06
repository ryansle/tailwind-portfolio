'use client';

// Components
import NextImage from 'next/image';
import { useState } from 'react';
import { FaPlay as Play } from 'react-icons/fa6';

// Types
type EventVideoProps = {
  channel?: string;
  id: string;
  title: string;
};

/*
  A click-to-load facade. Showing the thumbnail until someone asks to watch
  keeps YouTube's player and cookies out of the page for everyone who doesn't.
*/
const EventVideo = (props: EventVideoProps) => {
  const { channel, id, title } = props;

  const [playing, setPlaying] = useState(false);

  return (
    <figure className='subtle-panel overflow-hidden'>
      <div className='relative aspect-video w-full bg-slate-950'>
        {playing ? (
          <iframe
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='absolute inset-0 h-full w-full'
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
          />
        ) : (
          <button
            type='button'
            aria-label={`Play ${title}`}
            className='motion-parent ui-focus-inset group absolute inset-0 h-full w-full'
            onClick={() => setPlaying(true)}
          >
            <NextImage
              fill
              className='motion-media object-cover opacity-80 transition-opacity duration-(--duration-base) group-hover:opacity-100'
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              sizes='(min-width: 640px) 20rem, 100vw'
              alt=''
            />
            <span className='absolute inset-0 bg-slate-950/30' />
            <span className='ui-icon-button absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 text-white group-hover:text-accent'>
              <Play className='h-3.5 w-3.5 translate-x-px' aria-hidden />
            </span>
          </button>
        )}
      </div>

      <figcaption className='px-4 py-3'>
        <p className='text-sm font-semibold leading-6 text-white'>{title}</p>
        {channel && <p className='mt-0.5 text-xs text-muted'>{channel}</p>}
      </figcaption>
    </figure>
  );
};

export { EventVideo };
export type { EventVideoProps };
