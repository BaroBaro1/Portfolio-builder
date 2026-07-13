import { useEffect, useState } from "react";

import { experienceService } from "../services/experienceService";

import type { Experience } from "@/types/experience";

export function useExperiences() {

    const [experiences, setExperiences] = useState<Experience[]>([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    async function loadExperiences() {

        try {

            setLoading(true);

            const data = await experienceService.getExperiences();

            setExperiences(data);

        } catch {

            setError("Failed to load experiences");

        } finally {

            setLoading(false);

        }

    }

    useEffect(() => {

        loadExperiences();

    }, []);

    return {

        experiences,

        loading,

        error,

        reload: loadExperiences,

        setExperiences,

    };

}