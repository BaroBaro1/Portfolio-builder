import { Pencil, Trash2, Star } from "lucide-react";

import type { ProfileSkill } from "@/types/skill";

type Props = {
    skill: ProfileSkill;

    onEdit: (skill: ProfileSkill) => void;

    onDelete: () => void;
};

export default function SkillCard({

    skill,

    onEdit,

    onDelete,

}: Props) {

    return (

        <div className="rounded-3xl border bg-card p-6 shadow-sm transition hover:shadow-md">

            <div className="flex items-center justify-between">

                <div>

                    <h2 className="text-xl font-bold">

                        {skill.skill.name}

                    </h2>

                    <p className="mt-2 text-muted-foreground">

                        Level {skill.level}/5

                    </p>

                </div>

                <Star
                    className="fill-yellow-400 text-yellow-400"
                    size={20}
                />

            </div>

            <div className="mt-8 flex items-center justify-end gap-2 border-t pt-6">

                <button
                    onClick={() => onEdit(skill)}
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