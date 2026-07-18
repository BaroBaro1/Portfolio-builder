import { useEffect, useState } from "react";
import { X, Building2, BriefcaseBusiness } from "lucide-react";

import { experienceService } from "../services/experienceService";
import type { Experience } from "@/types/experience";

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  experience: Experience | null;
};

export default function ExperienceDialog({
  open,
  onClose,
  onSuccess,
  experience,
}: Props) {

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isCurrent, setIsCurrent] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    if (!open) return;

    if (!experience) {

      setCompany("");
      setPosition("");
      setLocation("");
      setDescription("");
      setStartDate("");
      setEndDate("");
      setIsCurrent(false);

      return;
    }

    setCompany(experience.company);
    setPosition(experience.position);
    setLocation(experience.location ?? "");
    setDescription(experience.description ?? "");
    setStartDate(experience.start_date);
    setEndDate(experience.end_date ?? "");
    setIsCurrent(experience.is_current);

  }, [experience, open]);

  async function handleSave() {

    try {

      setLoading(true);

      const payload = {

        company,
        position,
        location: location || null,
        description: description || null,
        start_date: startDate,
        end_date: isCurrent ? null : endDate || null,
        is_current: isCurrent,
        display_order: 0,

      };

      if (experience) {

        await experienceService.updateExperience(
          experience.id,
          payload
        );

      } else {

        await experienceService.createExperience(
          payload
        );

      }

      onSuccess();
      onClose();

    } catch (error) {

      console.error(error);

      alert("Failed to save experience.");

    } finally {

      setLoading(false);

    }

  }

  if (!open) return null;

  return (    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">

      <div className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-[30px] bg-background shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">

          <div>

            <h2 className="text-2xl font-bold">

              {experience
                ? "Edit Experience"
                : "New Experience"}

            </h2>

            <p className="mt-1 text-sm text-muted-foreground">

              Add your professional experience.

            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 transition hover:bg-muted"
          >
            <X size={22} />
          </button>

        </div>

        {/* Body */}

        <div className="flex-1 space-y-8 overflow-y-auto p-8">

          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <label className="mb-2 block text-sm font-medium">
                Company
              </label>

              <div className="relative">

                <Building2
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                />

                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="h-12 w-full rounded-xl border pl-11 pr-4"
                  placeholder="Google"
                />

              </div>

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Position
              </label>

              <div className="relative">

                <BriefcaseBusiness
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                />

                <input
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className="h-12 w-full rounded-xl border pl-11 pr-4"
                  placeholder="Frontend Developer"
                />

              </div>

            </div>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Location
            </label>

            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="h-12 w-full rounded-xl border px-4"
              placeholder="Algeria"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Description
            </label>

            <textarea
              rows={6}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-2xl border p-4 leading-7"
              placeholder="Describe your responsibilities..."
            />

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <label className="mb-2 block text-sm font-medium">
                Start Date
              </label>

              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="h-12 w-full rounded-xl border px-4"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                End Date
              </label>

              <input
                type="date"
                value={endDate}
                disabled={isCurrent}
                onChange={(e) => setEndDate(e.target.value)}
                className="h-12 w-full rounded-xl border px-4 disabled:opacity-50"
              />

            </div>

          </div>

          <label className="flex items-center gap-3 rounded-2xl border p-4">

            <input
              type="checkbox"
              checked={isCurrent}
              onChange={(e) => setIsCurrent(e.target.checked)}
            />

            <span>I currently work here</span>

          </label>

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 border-t bg-background p-6">

          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-xl border px-6 py-3"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            disabled={loading}
            className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
          >
            {loading
              ? "Saving..."
              : experience
              ? "Update Experience"
              : "Save Experience"}
          </button>

        </div>

      </div>

    </div>

  );

}