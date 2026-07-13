import { useState } from "react";

import { useExperiences } from "../hooks/useExperiences";

import ExperiencesGrid from "../components/ExperiencesGrid";
import ExperienceDialog from "../components/ExperienceDialog";

import { experienceService } from "../services/experienceService";

import type { Experience } from "@/types/experience";

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

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-3xl font-bold">

                        Experience

                    </h1>

                    <p className="text-muted-foreground">

                        Manage your work experience.

                    </p>

                </div>

                <button

                    onClick={() => {

                        setSelectedExperience(null);

                        setOpen(true);

                    }}

                    className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"

                >

                    Add Experience

                </button>

            </div>

            <ExperiencesGrid

                experiences={experiences}

                onEdit={(experience) => {

                    setSelectedExperience(experience);

                    setOpen(true);

                }}

                onDelete={async (id) => {

                    if (!confirm("Delete this experience?")) {

                        return;

                    }

                    try {

                        await experienceService.deleteExperience(id);

                        reload();

                    } catch (error) {

                        console.error(error);

                    }

                }}

            />

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
