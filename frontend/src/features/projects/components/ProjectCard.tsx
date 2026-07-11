import {
  GitBranch,
  Globe,
  Pencil,
  Trash2,
  Star,
} from "lucide-react";

import type { Project } from "@/types/project";
type Props = {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: () => void;
};

export default function ProjectCard({
    project,
    onEdit,
    onDelete,
}: Props) {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm transition hover:shadow-md">

      {/* Thumbnail */}

      {project.thumbnail ? (
        <img
          src={`http://127.0.0.1:8000/storage/${project.thumbnail}`}
          alt={project.title}
          className="mb-6 h-52 w-full rounded-2xl object-cover"
        />
      ) : (
        <div className="mb-6 flex h-52 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 dark:bg-slate-800">
          No Image
        </div>
      )}

      {/* Header */}

      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-xl font-bold">
            {project.title}
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            {project.slug}
          </p>

        </div>

        {project.featured && (
          <Star
            size={20}
            className="fill-yellow-400 text-yellow-400"
          />
        )}

      </div>

      {/* Description */}

      <p className="mt-4 line-clamp-3 text-muted-foreground">
        {project.description}
      </p>

      {/* Links */}

      <div className="mt-6 flex gap-4">

        {project.github_url && (
          <a
            href={project.github_url}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border p-3 transition hover:bg-muted"
          >
            <GitBranch size={18} />
          </a>
        )}

        {project.live_url && (
          <a
            href={project.live_url}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border p-3 transition hover:bg-muted"
          >
            <Globe size={18} />
          </a>
        )}

      </div>

      {/* Footer */}

      <div className="mt-8 flex items-center justify-between border-t pt-6">

        <span
          className={`rounded-full px-4 py-2 text-sm font-medium ${
            project.status === "published"
              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
              : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
          }`}
        >
          {project.status}
        </span>

        <div className="flex gap-2">

          <button
            onClick={() => onEdit(project)}
            className="rounded-xl border p-3 transition hover:bg-muted"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={onDelete}
            className="rounded-xl border p-3 text-red-600 transition hover:bg-red-50 dark:hover:bg-red-950/20"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </div>

    </div>
  );
}