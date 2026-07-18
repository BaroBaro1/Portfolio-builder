import {
  Pencil,
  Trash2,
  MapPin,
  CalendarDays,
  Building2,
  BriefcaseBusiness,
} from "lucide-react";

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
    <div className="group rounded-[28px] border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-start justify-between">

        <div className="space-y-2">

          <div className="flex items-center gap-2 text-emerald-600">

            <BriefcaseBusiness size={18} />

            <span className="text-sm font-semibold uppercase tracking-wide">
              Experience
            </span>

          </div>

          <h2 className="text-2xl font-bold">
            {experience.position}
          </h2>

          <div className="flex items-center gap-2 text-muted-foreground">

            <Building2 size={17} />

            <span className="font-medium">
              {experience.company}
            </span>

          </div>

          {experience.location && (

            <div className="flex items-center gap-2 text-sm text-muted-foreground">

              <MapPin size={16} />

              {experience.location}

            </div>

          )}

        </div>

      </div>

      {experience.description && (

        <div className="mt-6 rounded-2xl bg-muted/50 p-5 leading-7 text-muted-foreground">

          {experience.description}

        </div>

      )}

      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-muted-foreground">

        <CalendarDays size={16} />

        <span>

          {experience.start_date}

          {" — "}

          {experience.is_current
            ? "Present"
            : experience.end_date}

        </span>

      </div>

      <div className="mt-8 flex items-center justify-end gap-3 border-t pt-6">

        <button
          onClick={() => onEdit(experience)}
          className="rounded-2xl border p-3 transition hover:bg-muted"
        >
          <Pencil size={18} />
        </button>

        <button
          onClick={onDelete}
          className="rounded-2xl border p-3 text-red-600 transition hover:bg-red-50 dark:hover:bg-red-950/20"
        >
          <Trash2 size={18} />
        </button>

      </div>

    </div>
  );
}