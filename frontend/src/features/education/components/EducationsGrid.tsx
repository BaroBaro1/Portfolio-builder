import EducationCard from "./EducationCard";

import type { Education } from "@/types/education";

type Props = {
    educations: Education[];

    onEdit: (education: Education) => void;

    onDelete: (id: number) => void;
};

export default function EducationsGrid({

    educations,

    onEdit,

    onDelete,

}: Props) {

    if (educations.length === 0) {

        return (

            <div className="rounded-3xl border p-16 text-center">

                <h2 className="text-2xl font-semibold">

                    No education yet

                </h2>

                <p className="mt-3 text-muted-foreground">

                    Add your first education.

                </p>

            </div>

        );

    }

    return (

        <div className="grid gap-6 lg:grid-cols-2">

            {educations.map((education) => (

                <EducationCard

                    key={education.id}

                    education={education}

                    onEdit={onEdit}

                    onDelete={() => onDelete(education.id)}

                />

            ))}

        </div>

    );

}