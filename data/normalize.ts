import type { ContentfulImage, Experience, Project, Reference, Skill } from '@/lib/types';

const object = (value: unknown): Record<string, unknown> =>
  value !== null && typeof value === 'object' ? value as Record<string, unknown> : {};
const string = (value: unknown) => typeof value === 'string' ? value : '';
const strings = (value: unknown): string[] =>
  Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];

/** sys.id is the only stable identity a CMS record has; titles and names repeat. */
const entryId = (value: unknown) => string(object(object(value).sys).id).trim();

const normalizeImage = (value: unknown): ContentfulImage | undefined => {
  const fields = object(object(value).fields);
  const file = object(fields.file);
  const url = string(file.url);
  if (!url || !/^(https?:\/\/|\/)/.test(url)) return undefined;
  const dimensions = object(object(file.details).image);
  const image = typeof dimensions.width === 'number' && dimensions.width > 0
    && typeof dimensions.height === 'number' && dimensions.height > 0
    ? { width: dimensions.width, height: dimensions.height } : undefined;
  return { fields: { title: string(fields.title), file: { url, details: { image } } } };
};

const normalizeSkill = (entry: unknown): Skill | null => {
  const id = entryId(entry);
  const f = object(object(entry).fields);
  if (!id || !string(f.technology).trim() || (f.type !== 'web' && f.type !== 'creative')) return null;
  return {
    id, technology: string(f.technology), type: f.type, icon: normalizeImage(f.icon),
    confidence: typeof f.confidence === 'number' ? f.confidence : 0,
    radii: f.radii === true, visibility: f.visibility === true, primary: f.primary === true,
    uses: string(f.uses), experiences: strings(f.experiences),
  };
};

const normalizeTechStack = (value: unknown): Project['techStack'] => {
  if (!Array.isArray(value)) return [];
  return value.flatMap((entry) => {
    const fields = normalizeSkill(entry);
    return fields ? [{ fields }] : [];
  });
};

const normalizeProject = (entry: unknown): Project | null => {
  const id = entryId(entry);
  const f = object(object(entry).fields);
  if (!id || !string(f.title).trim()
    || !['Professional', 'Personal', 'Freelance'].includes(string(f.category))) return null;
  return {
    id, title: string(f.title), subtitle: string(f.subtitle), summary: string(f.summary),
    category: f.category as Project['category'], featured: f.featured === true,
    image: normalizeImage(f.image), techStack: normalizeTechStack(f.techStack),
    github: string(f.github), url: string(f.url),
  };
};

const normalizeExperience = (entry: unknown): Experience | null => {
  const id = entryId(entry);
  const f = object(object(entry).fields);
  if (!id || !string(f.company).trim() || !string(f.title).trim()) return null;
  return {
    id, company: string(f.company), title: string(f.title), datesEmployed: string(f.datesEmployed),
    summary: string(f.summary), header: string(f.header), image: normalizeImage(f.image),
    responsibilities: strings(f.responsibilities), techStack: normalizeTechStack(f.techStack),
    companyUrl: string(f.companyUrl),
  };
};

const normalizeReference = (entry: unknown): Reference | null => {
  const id = entryId(entry);
  const f = object(object(entry).fields);
  if (!id || !string(f.name).trim() || !string(f.testimony).trim()) return null;
  return {
    id, name: string(f.name), testimony: string(f.testimony), jobTitle: string(f.jobTitle),
    avatar: normalizeImage(f.avatar), linkedinUrl: string(f.linkedinUrl), email: string(f.email),
  };
};

type Content = { skills: Skill; projects: Project; experience: Experience; testimonies: Reference };
type ContentType = keyof Content;
const normalizers = {
  skills: normalizeSkill, projects: normalizeProject,
  experience: normalizeExperience, testimonies: normalizeReference,
};

export { normalizers, normalizeImage, normalizeTechStack };
export type { Content, ContentType };
