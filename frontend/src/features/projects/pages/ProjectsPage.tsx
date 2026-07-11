import { useState } from "react";
import type { Project } from "@/types/project";
import { useProjects } from "../hooks/useProjects";
import { projectService } from "../services/projectService";

import ProjectCard from "../components/ProjectCard";
import ProjectDialog from "../components/ProjectDialog";

export default function ProjectsPage() {

    const {

        projects,

        loading,

        error,

        reload,

    } = useProjects();

    const [open, setOpen] = useState(false);
const [selectedProject, setSelectedProject] = useState<Project | null>(null);
async function handleDelete(id: number) {

    const confirmed = window.confirm(
        "Are you sure you want to delete this project?"
    );

    if (!confirmed) return;

    try {

        await projectService.deleteProject(id);

        reload();

    } catch {

        alert("Failed to delete project.");

    }

}
    if (loading) {

        return (

            <div className="p-10 text-center">

                Loading projects...

            </div>

        );

    }

    if (error) {

        return (

            <div className="p-10 text-red-500">

                {error}

            </div>

        );

    }

    return (

        <div className="space-y-8">

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-3xl font-bold">

                        Projects

                    </h1>

                    <p className="text-muted-foreground">

                        Manage your portfolio projects.

                    </p>

                </div>

                <button
onClick={() => {

    setSelectedProject(null);

    setOpen(true);

}}
                    className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"
                >
                    New Project
                </button>

            </div>

            {projects.length === 0 ? (

                <div className="rounded-3xl border p-16 text-center">

                    <h2 className="text-2xl font-semibold">

                        No projects yet

                    </h2>

                    <p className="mt-3 text-muted-foreground">

                        Create your first project.

                    </p>

                </div>

            ) : (

                <div className="grid gap-6 lg:grid-cols-2">

                    {projects.map((project) => (

                      

<ProjectCard
    key={project.id}
    project={project}
    onEdit={(project) => {

        setSelectedProject(project);

        setOpen(true);

    }}
    onDelete={() => handleDelete(project.id)}
/>

                    ))}

                </div>

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
        </div>

    );

}