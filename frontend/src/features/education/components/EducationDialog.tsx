import { useEffect, useState } from "react";

import {
  GraduationCap,
  Building2,
  CalendarDays,
  BookOpen,
} from "lucide-react";

import type { Education } from "@/types/education";

import { educationService } from "../services/educationService";

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  education: Education | null;
};

export default function EducationDialog({
  open,
  onClose,
  onSuccess,
  education,
}: Props) {

  const [institution, setInstitution] = useState("");

  const [degree, setDegree] = useState("");

  const [fieldOfStudy, setFieldOfStudy] = useState("");

  const [description, setDescription] = useState("");

  const [startDate, setStartDate] = useState("");

  const [endDate, setEndDate] = useState("");

  const [isCurrent, setIsCurrent] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    if (!open) return;

    if (!education) {

      setInstitution("");
      setDegree("");
      setFieldOfStudy("");
      setDescription("");
      setStartDate("");
      setEndDate("");
      setIsCurrent(false);

      return;

    }

    setInstitution(education.institution);

    setDegree(education.degree);

    setFieldOfStudy(
      education.field_of_study
    );

    setDescription(
      education.description ?? ""
    );

    setStartDate(
      education.start_date
    );

    setEndDate(
      education.end_date ?? ""
    );

    setIsCurrent(
      education.is_current
    );

  }, [education, open]);

  async function handleSave() {

    try {

      setLoading(true);

      const payload = {

        institution,

        degree,

        field_of_study: fieldOfStudy,

        description:
          description || null,

        start_date: startDate,

        end_date: isCurrent
          ? null
          : endDate || null,

        is_current: isCurrent,

        display_order: 0,

      };

      if (education) {

        await educationService.updateEducation(
          education.id,
          payload
        );

      } else {

        await educationService.createEducation(
          payload
        );

      }

      onSuccess();

      onClose();

    } catch (error) {

      console.error(error);

      alert(
        "Failed to save education."
      );

    } finally {

      setLoading(false);

    }

  }

  if (!open) return null;

  return (
<div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm">
<div className="flex min-h-full items-center justify-center p-6">
<div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[30px] border bg-background shadow-2xl">

        <div className="border-b bg-gradient-to-r from-emerald-600 via-emerald-500 to-cyan-500 p-8 text-white">

          <div className="flex items-center gap-4">

            <div className="rounded-2xl bg-white/20 p-4">

              <GraduationCap size={34} />

            </div>

            <div>

              <h2 className="text-3xl font-bold">

                {education
                  ? "Edit Education"
                  : "Add Education"}

              </h2>

              <p className="mt-2 text-white/90">

                Add your academic history and qualifications.

              </p>

            </div>

          </div>

        </div>

        <div className="space-y-8 p-8">

          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <label className="mb-2 flex items-center gap-2 text-sm font-medium">

                <Building2 size={16} />

                Institution

              </label>

              <input
                value={institution}
                onChange={(e) =>
                  setInstitution(e.target.value)
                }
                className="h-12 w-full rounded-xl border px-4 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                placeholder="Harvard University"
              />

            </div>

            <div>

              <label className="mb-2 flex items-center gap-2 text-sm font-medium">

                <GraduationCap size={16} />

                Degree

              </label>

              <input
                value={degree}
                onChange={(e) =>
                  setDegree(e.target.value)
                }
                className="h-12 w-full rounded-xl border px-4 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                placeholder="Bachelor of Computer Science"
              />

            </div>

          </div>

          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-medium">

              <BookOpen size={16} />

              Field of Study

            </label>

            <input
              value={fieldOfStudy}
              onChange={(e) =>
                setFieldOfStudy(e.target.value)
              }
              className="h-12 w-full rounded-xl border px-4 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              placeholder="Software Engineering"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">

              Description

            </label>

            <textarea
              rows={5}
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              className="w-full rounded-xl border p-4 leading-7 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              placeholder="Describe your studies, achievements, activities..."
            />

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <label className="mb-2 flex items-center gap-2 text-sm font-medium">

                <CalendarDays size={16} />

                Start Date

              </label>

              <input
                type="date"
                value={startDate}
                onChange={(e) =>
                  setStartDate(e.target.value)
                }
                className="h-12 w-full rounded-xl border px-4"
              />

            </div>

            <div>

              <label className="mb-2 flex items-center gap-2 text-sm font-medium">

                <CalendarDays size={16} />

                End Date

              </label>

              <input
                type="date"
                value={endDate}
                disabled={isCurrent}
                onChange={(e) =>
                  setEndDate(e.target.value)
                }
                className="h-12 w-full rounded-xl border px-4 disabled:bg-muted"
              />

            </div>

          </div>

          <label className="flex items-center gap-3 rounded-xl border p-4">

            <input
              type="checkbox"
              checked={isCurrent}
              onChange={(e) =>
                setIsCurrent(e.target.checked)
              }
            />

            <span>I am currently studying here</span>

          </label>

        </div>

        <div className="flex justify-end gap-3 border-t p-6">

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="rounded-xl border px-6 py-3"
          >
            Cancel
          </button>

          <button
            type="button"
            disabled={loading}
            onClick={handleSave}
            className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
          >
            {loading
              ? "Saving..."
              : education
              ? "Update Education"
              : "Create Education"}
          </button>

        </div>

      </div>
</div>
    </div>

  );

}