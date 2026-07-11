import { useEffect, useState } from "react";
import { projectService } from "../services/projectService";
import type { Project } from "@/types/project";

export function useProjects() {

    const [projects, setProjects] = useState<Project[]>([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    async function loadProjects() {

        try {

            setLoading(true);

            const data =
                await projectService.getProjects();

            setProjects(data);

        } catch {

            setError("Failed to load projects");

        } finally {

            setLoading(false);

        }

    }

    useEffect(() => {

        loadProjects();

    }, []);

    return {

        projects,

        loading,

        error,

        reload: loadProjects,

        setProjects,

    };

}