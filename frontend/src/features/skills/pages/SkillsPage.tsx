
import { useState } from "react";

import { useSkills } from "../hooks/useSkills";
import { skillService } from "../services/skillService";

import type { ProfileSkill } from "@/types/skill";

import SkillsHeader from "../components/SkillsHeader";
import SkillsGrid from "../components/SkillsGrid";
import EmptySkills from "../components/EmptySkills";
import SkillDialog from "../components/SkillDialog";

export default function SkillsPage() {

  const {
    skills,
    catalog,
    loading,
    error,
    reload,
  } = useSkills();

  const [open, setOpen] = useState(false);

  const [selectedSkill, setSelectedSkill] =
    useState<ProfileSkill | null>(null);

  async function handleDelete(id: number) {

    const confirmed = window.confirm(
      "Delete this skill?"
    );

    if (!confirmed) return;

    try {

      await skillService.deleteSkill(id);

      reload();

    } catch {

      alert("Failed to delete skill.");

    }

  }

  if (loading) {

    return (
      <div className="p-10 text-center">
        Loading skills...
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

      <SkillsHeader
        total={skills.length}
        onCreate={() => {

          setSelectedSkill(null);

          setOpen(true);

        }}
      />

      {skills.length === 0 ? (

        <EmptySkills
          onCreate={() => {

            setSelectedSkill(null);

            setOpen(true);

          }}
        />

      ) : (

       <SkillsGrid
  skills={skills}
  onCreate={() => {
    setSelectedSkill(null);
    setOpen(true);
  }}
  onEdit={(skill) => {
    setSelectedSkill(skill);
    setOpen(true);
  }}
  onDelete={handleDelete}
/>

      )}

      <SkillDialog
        open={open}
        skill={selectedSkill}
        catalog={catalog}
        onClose={() => {

          setOpen(false);

          setSelectedSkill(null);

        }}
        onSuccess={reload}
      />

    </div>

  );

}