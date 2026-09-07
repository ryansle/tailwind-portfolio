import Link from 'next/link';
import { AiFillGithub as GitHub } from 'react-icons/ai';
import { HiExternalLink as ExternalLink } from 'react-icons/hi';
import type { Project } from '@/lib/types';

type ProjectLinksProps = Pick<Project, 'title' | 'github' | 'url'>;

const ProjectLinks = ({ title, github, url }: ProjectLinksProps) => {
  if (!github && !url) return null;

  return (
    <div className='ml-auto flex shrink-0 items-center gap-2'>
      {github && (
        <Link href={github} aria-label={`GitHub for ${title}`} className='ui-icon-button interactive-link'>
          <GitHub className='h-5 w-5' aria-hidden />
        </Link>
      )}
      {url && (
        <Link href={url} aria-label={`External Deployment for ${title}`} className='ui-icon-button interactive-link'>
          <ExternalLink className='h-5 w-5' aria-hidden />
        </Link>
      )}
    </div>
  );
};

export { ProjectLinks };
