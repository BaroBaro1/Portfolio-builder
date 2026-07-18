
import { X, Upload, ImagePlus, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { projectService } from "../services/projectService";
import type { Project } from "@/types/project";

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
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");

  const [githubUrl, setGithubUrl] = useState("");
  const [liveUrl, setLiveUrl] = useState("");

  const [featured, setFeatured] = useState(false);
  const [status, setStatus] = useState("draft");

  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const fileInputRef =
    useRef<HTMLInputElement>(null);

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

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">

      <div className="flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-slate-900">

        {/* Header */}

        <div className="flex items-center justify-between border-b p-7">

          <div>

            <h2 className="text-3xl font-bold">

              {project
                ? "Edit Project"
                : "Create Project"}

            </h2>

            <p className="mt-2 text-muted-foreground">

              Fill the project information.

            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-3 hover:bg-muted"
          >
            <X size={22} />
          </button>

        </div>

        {/* Body */}

        <div className="flex-1 overflow-y-auto p-8">

          <div className="grid gap-8 lg:grid-cols-2">

            {/* LEFT */}

            <div className="space-y-6">

              <div>

                <label className="mb-2 block font-medium">
                  Project Title
                </label>

                <input
                  value={title}
                  onChange={(e) =>
                    setTitle(e.target.value)
                  }
                  className="h-12 w-full rounded-2xl border px-4 transition focus:border-emerald-500 focus:outline-none"
                />

              </div>

              <div>

                <label className="mb-2 block font-medium">
                  Slug
                </label>

                <input
                  value={slug}
                  onChange={(e) =>
                    setSlug(e.target.value)
                  }
                  className="h-12 w-full rounded-2xl border px-4 transition focus:border-emerald-500 focus:outline-none"
                />

              </div>

              <div>

                <label className="mb-2 block font-medium">
                  Description
                </label>

                <textarea
                  rows={7}
                  value={description}
                  onChange={(e) =>
                    setDescription(
                      e.target.value
                    )
                  }
                  className="w-full rounded-2xl border p-4 transition focus:border-emerald-500 focus:outline-none"
                />

              </div>

              <div>

                <label className="mb-2 block font-medium">
                  GitHub
                </label>

                <input
                  value={githubUrl}
                  onChange={(e) =>
                    setGithubUrl(
                      e.target.value
                    )
                  }
                  className="h-12 w-full rounded-2xl border px-4"
                />

              </div>

              <div>

                <label className="mb-2 block font-medium">
                  Live Demo
                </label>

                <input
                  value={liveUrl}
                  onChange={(e) =>
                    setLiveUrl(
                      e.target.value
                    )
                  }
                  className="h-12 w-full rounded-2xl border px-4"
                />

              </div>

            </div>

            {/* RIGHT */}

            <div className="space-y-6">

              <div>

                <label className="mb-3 block font-medium">

                  Thumbnail

                </label>

                <input
                  hidden
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (!e.target.files?.length)
                      return;

                    setThumbnail(
                      e.target.files[0]
                    );
                  }}
                />

                <button
                  type="button"
                  onClick={() =>
                    fileInputRef.current?.click()
                  }
                  className="group flex h-72 w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-emerald-300 transition hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-slate-800"
                >

                  <ImagePlus
                    size={55}
                    className="text-emerald-500"
                  />

                  <p className="mt-5 font-semibold">
                    Click to upload image
                  </p>

                  <p className="mt-2 text-sm text-muted-foreground">
                    PNG • JPG • WEBP
                  </p>

                </button>

                {thumbnail && (
                  <div className="mt-4 rounded-2xl bg-emerald-50 p-4 dark:bg-emerald-950/30">

                    <div className="flex items-center gap-3">

                      <Upload
                        size={18}
                      />

                      {thumbnail.name}

                    </div>

                  </div>
                )}

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-2 block font-medium">

                    Status

                  </label>

                  <select
                    value={status}
                    onChange={(e) =>
                      setStatus(
                        e.target.value
                      )
                    }
                    className="h-12 w-full rounded-2xl border px-4"
                  >
                    <option value="draft">
                      Draft
                    </option>

                    <option value="published">
                      Published
                    </option>

                  </select>

                </div>

                <div>

                  <label className="mb-2 block font-medium">
                    Featured
                  </label>

                  <button
                    type="button"
                    onClick={() =>
                      setFeatured(
                        !featured
                      )
                    }
                    className={`flex h-12 w-full items-center justify-center gap-2 rounded-2xl border transition ${
                      featured
                        ? "border-yellow-400 bg-yellow-50 text-yellow-700"
                        : ""
                    }`}
                  >
                    <Star size={18} />

                    {featured
                      ? "Featured"
                      : "Normal"}

                  </button>

                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Footer */}

        <div className="mt-10 flex items-center justify-end gap-4 border-t pt-8">

          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl border px-7 py-3 font-medium transition hover:bg-muted"
          >
            Cancel
          </button>

          <button
            type="button"
            disabled={loading}
            onClick={handleSubmit}
            className="rounded-2xl bg-emerald-600 px-8 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Saving..."
              : project
              ? "Update Project"
              : "Create Project"}
          </button>

        </div>

      </div>

    </div>
  );

  async function handleSubmit() {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", title);
      formData.append("slug", slug);
      formData.append("description", description);

      formData.append(
        "github_url",
        githubUrl
      );

      formData.append(
        "live_url",
        liveUrl
      );

      formData.append(
        "status",
        status
      );

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

      alert(
        "Unable to save the project."
      );

    } finally {

      setLoading(false);

    }
  }
}
