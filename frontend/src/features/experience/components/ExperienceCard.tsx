import { Pencil, Trash2, MapPin } from "lucide-react";

import type { Experience } from "@/types/experience";

type Props = {
    experience: Experience;

    onEdit: (experience: Experience) => void;

    onDelete: () => void;
};

export default function ExperienceCard({

    experience,

    onEdit,

    onDelete,

}: Props) {

    return (

        <div className="rounded-3xl border bg-card p-6 shadow-sm transition hover:shadow-md">

            <div className="flex items-start justify-between">

                <div>

                    <h2 className="text-xl font-bold">

                        {experience.position}

                    </h2>

                    <p className="font-medium text-primary">

                        {experience.company}

                    </p>

                    {experience.location && (

                        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">

                            <MapPin size={16} />

                            {experience.location}

                        </div>

                    )}

                </div>

            </div>

            {experience.description && (

                <p className="mt-5 whitespace-pre-line text-muted-foreground">

                    {experience.description}

                </p>

            )}

            <div className="mt-6 text-sm text-muted-foreground">

                {experience.start_date}

                {" — "}

                {experience.is_current
                    ? "Present"
                    : experience.end_date}

            </div>

            <div className="mt-8 flex items-center justify-end gap-2 border-t pt-6">

                <button
                    onClick={() => onEdit(experience)}
                    className="rounded-xl border p-3 hover:bg-muted"
                >
                    <Pencil size={18} />
                </button>

                <button
                    onClick={onDelete}
                    className="rounded-xl border p-3 text-red-600 hover:bg-red-50"
                >
                    <Trash2 size={18} />
                </button>

            </div>

        </div>

    );

}