import { useEffect, useState } from "react";

import { educationService } from "../services/educationService";

import type { Education } from "@/types/education";

export function useEducations() {
    const [educations, setEducations] = useState<Education[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function loadEducations() {
        try {
            setLoading(true);

            const data = await educationService.getEducations();

            setEducations(data);
        } catch {
            setError("Failed to load education");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadEducations();
    }, []);

    return {
        educations,
        loading,
        error,
        reload: loadEducations,
        setEducations,
    };
}