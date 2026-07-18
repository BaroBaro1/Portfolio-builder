import type { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

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
    <section>

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Your Projects
        </h2>

        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
          {projects.length} Project{projects.length !== 1 ? "s" : ""}
        </span>

      </div>

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

    </section>
  );
}