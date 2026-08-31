// #region Contentful Types
type ContentfulSys = {
  id: string;
  type: string;
  linkType: string;
}

type ContentfulFile = {
  contentType: string;
  details: {
    image: {
      height: number;
      width: number;
    }
    size: number;
  }
  fileName: string;
  url: string;
}

type ContentfulImage = {
  fields: {
    title: string;
    description: string;
    file: ContentfulFile;
  }
  metaData: {
    tags: string[]
  }
  sys: {
    createdAt: string;
    environment: {
      sys: ContentfulSys;
    }
  }
  id: string;
  locale: string;
  revision: number;
  space: {
    sys: ContentfulSys;
    type: string;
    updatedAt: string;
  }
}
// #endregion

// #region Custom Types
type Skill = {
  technology: string;
  icon: ContentfulImage;
  confidence: number;
  type: 'web' | 'creative';
  radii: boolean;
  visibility: boolean;
  primary: boolean;
  uses: string;
  experiences: string[];
}

type Reference = {
  name: string;
  jobTitle: string;
  avatar: ContentfulImage;
  testimony: string;
  linkedinUrl: string;
  email: string;
}

type Experience = {
  company: string;
  title: string;
  datesEmployed: string;
  summary: string;
  header: string;
  image: ContentfulImage;
  responsibilities: string[];
  techStack: {
    metadata: {
      tags: string[];
    }
    sys: ContentfulSys;
    fields: Skill;
  }[];
  companyUrl: string;
}

type Project = {
  title: string;
  subtitle?: string;
  summary: string;
  image: ContentfulImage;
  github?: string;
  url?: string;
  category: 'Professional' | 'Freelance' | 'Personal';
  techStack: {
    metadata: {
      tags: string[];
    }
    sys: ContentfulSys;
    fields: Skill;
  }[];
  featured: boolean;
}

// #endregion

export type {
  ContentfulImage,
  Skill,
  Reference,
  Experience,
  Project,
};