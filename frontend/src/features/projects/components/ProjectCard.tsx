import {
  ExternalLink,
  GitBranch,
  Globe,
  Pencil,
  Star,
  Trash2,
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
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900">

      {/* Image */}

      <div className="relative">

        {project.thumbnail ? (

          <img
            src={`http://127.0.0.1:8000/storage/${project.thumbnail}`}
            alt={project.title}
            className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
          />

        ) : (

          <div className="flex h-60 items-center justify-center bg-gradient-to-br from-emerald-100 to-cyan-100 dark:from-slate-800 dark:to-slate-900">

            <FolderIcon />

          </div>

        )}

        {/* Featured */}

        {project.featured && (

          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-black shadow">

            <Star
              size={15}
              className="fill-current"
            />

            Featured

          </div>

        )}

        {/* Status */}

        <div className="absolute right-5 top-5">

          <span
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide shadow ${
              project.status === "published"
                ? "bg-emerald-500 text-white"
                : "bg-slate-900 text-white"
            }`}
          >
            {project.status}
          </span>

        </div>

      </div>

      {/* Content */}

      <div className="space-y-6 p-7">

        <div>

          <h2 className="text-2xl font-bold transition group-hover:text-emerald-600">

            {project.title}

          </h2>

          <p className="mt-2 text-sm text-muted-foreground">

            {project.slug}

          </p>

        </div>

        <p className="line-clamp-3 leading-7 text-muted-foreground">

          {project.description}

        </p>

        {/* Links */}

        <div className="flex flex-wrap gap-3">

          {project.github_url && (

            <a
              href={project.github_url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-3 transition hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-slate-800"
            >

              <GitBranch size={18} />

              GitHub

            </a>

          )}

          {project.live_url && (

            <a
              href={project.live_url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-3 transition hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-slate-800"
            >

              <Globe size={18} />

              Live Demo

              <ExternalLink size={16} />

            </a>

          )}

        </div>

        {/* Footer */}

        <div className="flex items-center justify-between border-t pt-6">

          <div className="text-sm text-muted-foreground">

            ID #{project.id}

          </div>

          <div className="flex gap-3">

            <button
              onClick={() => onEdit(project)}
              className="rounded-xl border p-3 transition hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-slate-800"
            >

              <Pencil size={18} />

            </button>

            <button
              onClick={onDelete}
              className="rounded-xl border p-3 text-red-600 transition hover:border-red-400 hover:bg-red-50 dark:hover:bg-red-950/30"
            >

              <Trash2 size={18} />

            </button>

          </div>

        </div>

      </div>

    </article>
  );
}

function FolderIcon() {
  return (
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/60 dark:bg-slate-800">

      <Globe
        size={42}
        className="text-emerald-500"
      />

    </div>
  );
}