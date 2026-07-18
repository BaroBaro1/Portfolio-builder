import { useState } from "react";

import type { Project } from "@/types/project";

import { useProjects } from "../hooks/useProjects";
import { projectService } from "../services/projectService";

import ProjectsHeader from "../components/ProjectsHeader";
import ProjectsGrid from "../components/ProjectsGrid";
import EmptyProjects from "../components/EmptyProjects";
import ProjectDialog from "../components/ProjectDialog";
import DeleteProjectDialog from "../components/DeleteProjectDialog";

export default function ProjectsPage() {

  const {
    projects,
    loading,
    error,
    reload,
  } = useProjects();

  const [open, setOpen] = useState(false);

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [deleteProject, setDeleteProject] =
    useState<Project | null>(null);

  const [deleting, setDeleting] =
    useState(false);

  async function confirmDelete() {

    if (!deleteProject) return;

    try {

      setDeleting(true);

      await projectService.deleteProject(
        deleteProject.id
      );

      reload();

      setDeleteProject(null);

    } catch {

      alert("Failed to delete project.");

    } finally {

      setDeleting(false);

    }

  }

  if (loading) {

    return (
      <div className="flex justify-center py-24">

        <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent" />

      </div>
    );

  }

  if (error) {

    return (
      <div className="rounded-3xl border border-red-500/30 bg-red-500/10 p-8 text-red-600">

        {error}

      </div>
    );

  }

  return (

    <div className="space-y-10">

      <ProjectsHeader
        total={projects.length}
        onCreate={() => {

          setSelectedProject(null);

          setOpen(true);

        }}
      />

      {projects.length === 0 ? (

        <EmptyProjects
          onCreate={() => {

            setSelectedProject(null);

            setOpen(true);

          }}
        />

      ) : (

        <ProjectsGrid
          projects={projects}
          onEdit={(project) => {

            setSelectedProject(project);

            setOpen(true);

          }}
          onDelete={(id) => {

            const project =
              projects.find(
                (item) => item.id === id
              ) ?? null;

            setDeleteProject(project);

          }}
        />

      )}

      <ProjectDialog
        open={open}
        project={selectedProject}
        onClose={() => {

          setOpen(false);

          setSelectedProject(null);

        }}
        onSuccess={reload}
      />

      <DeleteProjectDialog
        open={!!deleteProject}
        loading={deleting}
        onClose={() => setDeleteProject(null)}
        onConfirm={confirmDelete}
      />

    </div>

  );

}