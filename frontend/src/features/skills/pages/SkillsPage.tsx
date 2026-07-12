import { useState } from "react";

import { useSkills } from "../hooks/useSkills";

import SkillsGrid from "../components/SkillsGrid";
import SkillDialog from "../components/SkillDialog";

import type { ProfileSkill } from "@/types/skill";
import { skillService } from "../services/skillService";
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

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-3xl font-bold">
                        Skills
                    </h1>

                    <p className="text-muted-foreground">
                        Manage your professional skills.
                    </p>

                </div>

                <button
                    onClick={() => {

                        setSelectedSkill(null);

                        setOpen(true);

                    }}
                    className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"
                >
                    Add Skill
                </button>

            </div>

            <SkillsGrid
    skills={skills}
    onEdit={(skill) => {

        setSelectedSkill(skill);

        setOpen(true);

    }}
    onDelete={async (id) => {

    if (!confirm("Delete this skill?")) return;

    try {

        console.log("Deleting:", id);

        await skillService.deleteSkill(id);

        console.log("Deleted successfully");

        reload();

    } catch (error) {

        console.error(error);

    }

}}
/>

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