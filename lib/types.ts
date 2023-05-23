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
  icon: ContentfulImage,
  confidence: number;
  radii: boolean;
  visibility: boolean;
  primary: string;
  experiences: string[];
}
// #endregion

export type {
  ContentfulImage,
  Skill,
};