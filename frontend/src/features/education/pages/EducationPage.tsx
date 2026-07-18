import { useState } from "react";

import type { Education } from "@/types/education";

import { useEducations } from "../hooks/useEducations";
import { educationService } from "../services/educationService";

import EducationHeader from "../components/EducationHeader";
import EmptyEducations from "../components/EmptyEducations";
import EducationsGrid from "../components/EducationsGrid";
import EducationDialog from "../components/EducationDialog";

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

  async function handleDelete(id: number) {

    const confirmed = window.confirm(
      "Delete this education?"
    );

    if (!confirmed) return;

    try {

      await educationService.deleteEducation(id);

      reload();

    } catch {

      alert("Failed to delete education.");

    }

  }

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

      <EducationHeader
        total={educations.length}
        onCreate={() => {

          setSelectedEducation(null);

          setOpen(true);

        }}
      />

      {educations.length === 0 ? (

        <EmptyEducations
          onCreate={() => {

            setSelectedEducation(null);

            setOpen(true);

          }}
        />

      ) : (

        <EducationsGrid
          educations={educations}
          onCreate={() => {

            setSelectedEducation(null);

            setOpen(true);

          }}
          onEdit={(education) => {

            setSelectedEducation(education);

            setOpen(true);

          }}
          onDelete={handleDelete}
        />

      )}

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