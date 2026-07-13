import { useState } from "react";

import { useEducations } from "../hooks/useEducations";

import EducationsGrid from "../components/EducationsGrid";
import EducationDialog from "../components/EducationDialog";

import { educationService } from "../services/educationService";

import type { Education } from "@/types/education";

export default function EducationPage() {

    const {

        educations,

        loading,

        error,

        reload,

    } = useEducations();

    const [open, setOpen] = useState(false);

    const [selectedEducation, setSelectedEducation] =
        useState<Education | null>(null);

    if (loading) {

        return (

            <div className="p-10 text-center">

                Loading education...

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

                        Education

                    </h1>

                    <p className="text-muted-foreground">

                        Manage your education history.

                    </p>

                </div>

                <button

                    onClick={() => {

                        setSelectedEducation(null);

                        setOpen(true);

                    }}

                    className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"

                >

                    Add Education

                </button>

            </div>

            <EducationsGrid

                educations={educations}

                onEdit={(education) => {

                    setSelectedEducation(education);

                    setOpen(true);

                }}

                onDelete={async (id) => {

                    if (!confirm("Delete this education?")) {

                        return;

                    }

                    try {

                        await educationService.deleteEducation(id);

                        reload();

                    } catch (error) {

                        console.error(error);

                    }

                }}

            />

            <EducationDialog

                open={open}

                education={selectedEducation}

                onClose={() => {

                    setOpen(false);

                    setSelectedEducation(null);

                }}

                onSuccess={reload}

            />

        </div>

    );

}