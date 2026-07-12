import { useEffect, useState } from "react";

import type { ProfileSkill, Skill } from "@/types/skill";
import RatingStars from "@/components/common/RatingStars";

import { skillService } from "../services/skillService";

type Props = {
    open: boolean;
    onClose: () => void;
    onSuccess: () => void;
    skill: ProfileSkill | null;
    catalog: Skill[];
};

export default function SkillDialog({
    open,
    onClose,
    onSuccess,
    skill,
    catalog,
}: Props) {

    const [skillId, setSkillId] = useState<number>(0);
    const [level, setLevel] = useState<number>(3);
    const [saving, setSaving] = useState(false);

    useEffect(() => {

        if (!open) return;

        if (skill) {

            setSkillId(skill.skill.id);
            setLevel(skill.level);

        } else {

            setSkillId(0);
            setLevel(3);

        }

    }, [skill, open]);

    async function handleSave() {

        if (!skillId) {

            alert("Please select a skill.");

            return;

        }

        try {

            setSaving(true);

            if (skill) {

                await skillService.updateSkill(skill.id, {
                    level,
                });

            } else {

                await skillService.createSkill({
                    skill_id: skillId,
                    level,
                });

            }

            onSuccess();
            onClose();

        } catch (error) {

            console.error(error);

            alert("Failed to save skill.");

        } finally {

            setSaving(false);

        }

    }

    if (!open) return null;

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

            <div className="w-full max-w-lg rounded-3xl bg-background p-8 shadow-2xl">

                <h2 className="text-2xl font-bold">

                    {skill ? "Edit Skill" : "Add Skill"}

                </h2>

                <div className="mt-8 space-y-6">

                    <div>

                        <label className="mb-2 block text-sm font-medium">

                            Skill

                        </label>

                        <select
                            value={skillId}
                            onChange={(e) =>
                                setSkillId(Number(e.target.value))
                            }
                            disabled={!!skill}
                            className="w-full rounded-xl border px-4 py-3"
                        >

                            <option value={0}>

                                Select Skill...

                            </option>

                            {catalog.map((item) => (

                                <option
                                    key={item.id}
                                    value={item.id}
                                >
                                    {item.name}
                                </option>

                            ))}

                        </select>

                    </div>

                    <div>

                        <label className="mb-2 block text-sm font-medium">

                            Level

                        </label>

                        <RatingStars
                            value={level}
                            onChange={setLevel}
                        />

                    </div>

                </div>

                <div className="mt-10 flex justify-end gap-3">

                    <button
                        onClick={onClose}
                        disabled={saving}
                        className="rounded-xl border px-5 py-3"
                    >

                        Cancel

                    </button>

                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
                    >

                        {saving ? "Saving..." : "Save"}

                    </button>

                </div>

            </div>

        </div>

    );

}