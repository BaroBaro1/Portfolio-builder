import {
  GraduationCap,
  Pencil,
  Trash2,
  CalendarDays,
  Building2,
} from "lucide-react";

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

    <div className="group rounded-[28px] border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-start justify-between gap-4">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/30">

            <GraduationCap
              size={30}
              className="text-emerald-600"
            />

          </div>

          <div>

            <h2 className="text-xl font-bold">

              {education.degree}

            </h2>

            <div className="mt-2 flex items-center gap-2 text-muted-foreground">

              <Building2 size={16} />

              {education.institution}

            </div>

          </div>

        </div>

        <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">

          Education

        </div>

      </div>

      {education.field_of_study && (

        <div className="mt-6">

          <span className="rounded-full bg-slate-100 px-3 py-2 text-sm dark:bg-slate-800">

            {education.field_of_study}

          </span>

        </div>

      )}

      {education.description && (

        <p className="mt-6 whitespace-pre-line leading-7 text-muted-foreground">

          {education.description}

        </p>

      )}

      <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">

        <CalendarDays size={16} />

        {education.start_date}

        {" — "}

        {education.is_current
          ? "Present"
          : education.end_date}

      </div>

      <div className="mt-8 flex items-center justify-end gap-3 border-t pt-6">

        <button
          onClick={() => onEdit(education)}
          className="flex items-center gap-2 rounded-xl border px-4 py-2 transition hover:bg-muted"
        >
          <Pencil size={16} />

          Edit

        </button>

        <button
          onClick={onDelete}
          className="flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2 text-red-600 transition hover:bg-red-50 dark:border-red-900 dark:hover:bg-red-950/30"
        >
          <Trash2 size={16} />

          Delete

        </button>

      </div>

    </div>

  );

}