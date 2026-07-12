import { useEffect, useState } from "react";

import { skillService } from "../services/skillService";

import type { ProfileSkill } from "@/types/skill";

import type { Skill } from "@/types/skill";

export function useSkills() {

    const [skills, setSkills] = useState<ProfileSkill[]>([]);
    const [catalog, setCatalog] = useState<Skill[]>([]);
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    async function loadSkills() {

        try {

            setLoading(true);

            const data = await skillService.getSkills();

            setSkills(data);

        } catch {

            setError("Failed to load skills");

        } finally {

            setLoading(false);

        }

    }
    async function loadCatalog() {
    const data = await skillService.getCatalog();
    setCatalog(data);
}
   useEffect(() => {
    loadSkills();
    loadCatalog();
}, []);

    return {
    skills,
    catalog,
    loading,
    error,
    reload: loadSkills,
    setSkills,
};
}