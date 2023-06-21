// Built-in Types
import type { ReactNode } from 'react';

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
type Route = {
  text: string;
  href: string;
  icon: ReactNode;
}

type Skill = {
  technology: string;
  icon: ContentfulImage,
  confidence: number;
  radii: boolean;
  visibility: boolean;
  primary: string;
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
// #endregion

export type {
  ContentfulImage,
  Skill,
  Route,
  Reference,
};