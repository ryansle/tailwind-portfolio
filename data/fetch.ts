import client from './contentful';

// Types
import type { Experience, Project, Reference, Skill } from '@/lib/types';

/**
 * Contentful returns loosely-typed entries, so the cast happens once here at the
 * boundary rather than at every call site.
 */
const fetchEntries = async <T>(contentType: string): Promise<T[]> => {
  const data = await client.getEntries({ content_type: contentType });

  return data.items.map((entry) => entry.fields as T);
};

const fetchExperience = () => fetchEntries<Experience>('experience');

const fetchSkills = () => fetchEntries<Skill>('skills');

const fetchTestimonies = () => fetchEntries<Reference>('testimonies');

const fetchProjects = () => fetchEntries<Project>('projects');

export {
  fetchExperience,
  fetchSkills,
  fetchTestimonies,
  fetchProjects,
};
