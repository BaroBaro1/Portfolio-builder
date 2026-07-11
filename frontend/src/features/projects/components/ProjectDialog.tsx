import { X } from "lucide-react";
import { useRef, useState } from "react";
import { projectService } from "../services/projectService";
import type { Project } from "@/types/project";
import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;

  project?: Project | null;
};

export default function ProjectDialog({
  open,
  onClose,
  onSuccess,
    project,

}: Props) {
  if (!open) return null;

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");

  const [githubUrl, setGithubUrl] = useState("");
  const [liveUrl, setLiveUrl] = useState("");

  const [featured, setFeatured] = useState(false);
  const [status, setStatus] = useState("draft");

  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {

    if (!project) {

        setTitle("");
        setSlug("");
        setDescription("");
        setGithubUrl("");
        setLiveUrl("");
        setFeatured(false);
        setStatus("draft");
        setThumbnail(null);

        return;
    }

    setTitle(project.title);

    setSlug(project.slug);

    setDescription(project.description);

    setGithubUrl(project.github_url ?? "");

    setLiveUrl(project.live_url ?? "");

    setFeatured(project.featured);

    setStatus(project.status);

    setThumbnail(null);

}, [project, open]);

async function handleSubmit() {

    try {

        setLoading(true);

        const formData = new FormData();

        formData.append("title", title);

        formData.append("slug", slug);

        formData.append("description", description);

        formData.append("github_url", githubUrl);

        formData.append("live_url", liveUrl);

        formData.append("status", status);

        formData.append(
            "featured",
            featured ? "1" : "0"
        );

        if (thumbnail) {

            formData.append(
                "thumbnail",
                thumbnail
            );

        }

        if (project) {

    await projectService.updateProject(
        project.id,
        formData
    );

} else {

    await projectService.createProject(
        formData
    );

}

        onSuccess();

        onClose();

    } catch (error) {

        console.error(error);

        alert("Failed to create project.");

    } finally {

        setLoading(false);

    }

}
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">

<div className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-slate-900">
        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">

          <h2 className="text-2xl font-bold">
    {project ? "Edit Project" : "New Project"}
</h2>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X size={22} />
          </button>

        </div>

        {/* Body */}

<div className="flex-1 space-y-8 overflow-y-auto p-8">
          {/* Title + Slug */}

          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <label className="mb-2 block font-medium">
                Title
              </label>

              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="h-12 w-full rounded-xl border px-4"
                placeholder="Portfolio Builder"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium">
                Slug
              </label>

              <input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="h-12 w-full rounded-xl border px-4"
                placeholder="portfolio-builder"
              />

            </div>

          </div>

          {/* Description */}

          <div>

            <label className="mb-2 block font-medium">
              Description
            </label>

            <textarea
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-xl border p-4"
            />

          </div>

          {/* Links */}

          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <label className="mb-2 block font-medium">
                GitHub URL
              </label>

              <input
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                className="h-12 w-full rounded-xl border px-4"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium">
                Live URL
              </label>

              <input
                value={liveUrl}
                onChange={(e) => setLiveUrl(e.target.value)}
                className="h-12 w-full rounded-xl border px-4"
              />

            </div>

          </div>

          {/* Thumbnail */}

          <div>

            <label className="mb-2 block font-medium">
              Thumbnail
            </label>

            <input
              ref={fileInputRef}
              hidden
              type="file"
              accept="image/*"
              onChange={(e) => {

                if (!e.target.files?.length) return;

                setThumbnail(e.target.files[0]);

              }}
            />

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="rounded-xl border px-5 py-3"
            >
              Upload Thumbnail
            </button>

            {thumbnail && (

              <p className="mt-3 text-sm text-slate-500">

                {thumbnail.name}

              </p>

            )}

          </div>

          {/* Status */}

          <div>

            <label className="mb-2 block font-medium">
              Status
            </label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="h-12 w-full rounded-xl border px-4"
            >
              <option value="draft">
                Draft
              </option>

              <option value="published">
                Published
              </option>

            </select>

          </div>

          {/* Featured */}

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
            />

            Featured Project

          </label>

        </div>

        {/* Footer */}

<div className="flex justify-end gap-4 border-t bg-white p-6 dark:bg-slate-900">
          <button
            onClick={onClose}
            className="rounded-xl border px-6 py-3"
          >
            Cancel
          </button>

          <button
    onClick={handleSubmit}
    disabled={loading}
    className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
>
{loading
    ? "Saving..."
    : project
    ? "Update Project"
    : "Save Project"}
    </button>

        </div>

      </div>

    </div>
  );
}