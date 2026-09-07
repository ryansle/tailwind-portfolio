/** The resolved asset fields consumed by the UI; unpublished assets are optional. */
type ContentfulImage = {
  fields: {
    title?: string;
    description?: string;
    file: {
      url: string;
      details?: { image?: { height: number; width: number } };
    };
  };
};

type SkillLink = { fields: Skill };

/** Normalized entry shapes the UI renders, keyed by the `sys.id` carried through `data/normalize.ts`. */
type Skill = {
  id: string;
  technology: string;
  icon?: ContentfulImage;
  confidence: number;
  type: 'web' | 'creative';
  radii: boolean;
  visibility: boolean;
  primary: boolean;
  uses: string;
  experiences: string[];
}

type Reference = {
  id: string;
  name: string;
  jobTitle: string;
  avatar?: ContentfulImage;
  testimony: string;
  linkedinUrl: string;
  email: string;
}

type Experience = {
  id: string;
  company: string;
  title: string;
  datesEmployed: string;
  summary: string;
  header: string;
  image?: ContentfulImage;
  responsibilities: string[];
  techStack: SkillLink[];
  companyUrl: string;
}

type Project = {
  id: string;
  title: string;
  subtitle?: string;
  summary: string;
  image?: ContentfulImage;
  github?: string;
  url?: string;
  category: 'Professional' | 'Freelance' | 'Personal';
  techStack: SkillLink[];
  featured: boolean;
}

export type {
  ContentfulImage,
  Skill,
  Reference,
  Experience,
  Project,
};