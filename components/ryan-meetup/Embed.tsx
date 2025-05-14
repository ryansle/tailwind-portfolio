'use client';
import { YouTubeEmbed, InstagramEmbed } from 'react-social-media-embed';

type EmbedProps = {
  variant: 'youtube' | 'instagram';
  href: string;
  height?: string;
  width?: string;
}

const Embed = (props: EmbedProps) => {
  const { variant, href, height, width } = props;

  return (
    <div>
      {variant === 'youtube' && (
        <YouTubeEmbed
          url={href} 
          height={height}
          width={width}
        />
      )}

      {variant === 'instagram' && (
        <InstagramEmbed 
          url={href}
        />
      )}
    </div>
  )
};

export { Embed };