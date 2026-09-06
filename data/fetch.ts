import client from './contentful';

// Types
import type { Experience, Project, Reference, Skill } from '@/lib/types';

// Utilities
import { convertStartDate } from '@/utils/convert';

/**
 * Contentful returns loosely-typed entries, so the cast happens once here at the
 * boundary rather than at every call site.
 */
const fetchEntries = async <T>(contentType: string): Promise<T[]> => {
  const data = await client.getEntries({ content_type: contentType });

  return data.items.map((entry) => entry.fields as T);
};

/**
 * Contentful hands entries back in `-sys.updatedAt` order, so touching an old
 * role would shove it to the top of the timeline. Sort by when each role
 * actually started instead, newest first.
 */
const fetchExperience = async () => {
  const experiences = await fetchEntries<Experience>('experience');

  return experiences.sort((a, b) => convertStartDate(b.datesEmployed) - convertStartDate(a.datesEmployed));
};

const fetchSkills = () => fetchEntries<Skill>('skills');

const fetchTestimonies = () => fetchEntries<Reference>('testimonies');

const fetchProjects = () => fetchEntries<Project>('projects');

export {
  fetchExperience,
  fetchSkills,
  fetchTestimonies,
  fetchProjects,
};
