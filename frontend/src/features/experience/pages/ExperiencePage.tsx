import { useState } from "react";

import type { Experience } from "@/types/experience";

import { useExperiences } from "../hooks/useExperiences";
import { experienceService } from "../services/experienceService";

import ExperienceHeader from "../components/ExperienceHeader";
import ExperiencesGrid from "../components/ExperiencesGrid";
import EmptyExperiences from "../components/EmptyExperiences";
import ExperienceDialog from "../components/ExperienceDialog";

export default function ExperiencePage() {

    const {
        experiences,
        loading,
        error,
        reload,
    } = useExperiences();

    const [open, setOpen] = useState(false);

    const [selectedExperience, setSelectedExperience] =
        useState<Experience | null>(null);

    async function handleDelete(id: number) {

        const confirmed = window.confirm(
            "Are you sure you want to delete this experience?"
        );

        if (!confirmed) return;

        try {

            await experienceService.deleteExperience(id);

            reload();

        } catch {

            alert("Failed to delete experience.");

        }

    }

    if (loading) {

        return (
            <div className="p-10 text-center">
                Loading experiences...
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

            <ExperienceHeader
                total={experiences.length}
                onCreate={() => {

                    setSelectedExperience(null);

                    setOpen(true);

                }}
            />

            {experiences.length === 0 ? (

                <EmptyExperiences
                    onCreate={() => {

                        setSelectedExperience(null);

                        setOpen(true);

                    }}
                />

            ) : (

                <ExperiencesGrid
                    experiences={experiences}
                    onEdit={(experience) => {

                        setSelectedExperience(experience);

                        setOpen(true);

                    }}
                    onDelete={handleDelete}
                />

            )}

            <ExperienceDialog
                open={open}
                experience={selectedExperience}
                onClose={() => {

                    setOpen(false);

                    setSelectedExperience(null);

                }}
                onSuccess={reload}
            />

        </div>

    );

}