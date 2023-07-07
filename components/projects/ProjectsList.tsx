// Components
import { FeaturedProject } from '@/components/projects';

// Types
import type { Project } from '@/lib/types';

type ProjectsListProps = {
  projects: Project[];
}

const ProjectsList = (props: ProjectsListProps) => {
  const { projects } = props;

  return (
    <div>
      {projects.map((project: Project, index: number) => (
        <FeaturedProject
          key={project.title}
          project={project}
          index={index}
        />
      ))}
    </div>
  );
};

export { ProjectsList };
