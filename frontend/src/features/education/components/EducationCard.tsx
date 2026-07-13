import { Pencil, Trash2, GraduationCap } from "lucide-react";

import type { Education } from "@/types/education";

type Props = {
    education: Education;

    onEdit: (education: Education) => void;

    onDelete: () => void;
};

export default function EducationCard({

    education,

    onEdit,

    onDelete,

}: Props) {

    return (

        <div className="rounded-3xl border bg-card p-6 shadow-sm transition hover:shadow-md">

            <div className="flex items-start justify-between">

                <div>

                    <h2 className="text-xl font-bold">

                        {education.degree}

                    </h2>

                    <p className="mt-1 text-muted-foreground">

                        {education.institution}

                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">

                        {education.field_of_study}

                    </p>

                </div>

                <GraduationCap
                    className="text-emerald-600"
                    size={22}
                />

            </div>

            <div className="mt-6 text-sm text-muted-foreground">

                {education.start_date}

                {" - "}

                {education.is_current
                    ? "Present"
                    : education.end_date}

            </div>

            {education.description && (

                <p className="mt-4 line-clamp-3 text-sm">

                    {education.description}

                </p>

            )}

            <div className="mt-8 flex items-center justify-end gap-2 border-t pt-6">

                <button

                    onClick={() => onEdit(education)}

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