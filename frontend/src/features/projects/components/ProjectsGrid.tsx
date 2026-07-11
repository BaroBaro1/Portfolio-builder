import ProjectCard from "./ProjectCard";
import type { Project } from "@/types/project";

type Props = {
    projects: Project[];

    onEdit: (project: Project) => void;

    onDelete: (id: number) => void;
};

export default function ProjectsGrid({
  projects,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="grid gap-8 md:grid-cols-2 2xl:grid-cols-3">

      {projects.map((project) => (
        <ProjectCard
    key={project.id}
    project={project}
    onEdit={onEdit}
    onDelete={() => onDelete(project.id)}
/>
      ))}

    </div>
  );
}