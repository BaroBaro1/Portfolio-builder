import ExperienceCard from "./ExperienceCard";

import type { Experience } from "@/types/experience";

type Props = {

    experiences: Experience[];

    onEdit: (experience: Experience) => void;

    onDelete: (id: number) => void;

};

export default function ExperiencesGrid({

    experiences,

    onEdit,

    onDelete,

}: Props) {

    if (experiences.length === 0) {

        return (

            <div className="rounded-3xl border p-16 text-center">

                <h2 className="text-2xl font-semibold">

                    No experiences yet

                </h2>

                <p className="mt-3 text-muted-foreground">

                    Add your first professional experience.

                </p>

            </div>

        );

    }

    return (

        <div className="grid gap-6 lg:grid-cols-2">

            {experiences.map((experience) => (

                <ExperienceCard

                    key={experience.id}

                    experience={experience}

                    onEdit={onEdit}

                    onDelete={() => onDelete(experience.id)}

                />

            ))}

        </div>

    );

}