import SkillCard from "./SkillCard";

import type { ProfileSkill } from "@/types/skill";

type Props = {

    skills: ProfileSkill[];

    onEdit: (skill: ProfileSkill) => void;

    onDelete: (id: number) => void;

};

export default function SkillsGrid({

    skills,

    onEdit,

    onDelete,

}: Props) {

    if (skills.length === 0) {

        return (

            <div className="rounded-3xl border p-16 text-center">

                <h2 className="text-2xl font-semibold">

                    No skills yet

                </h2>

                <p className="mt-3 text-muted-foreground">

                    Add your first professional skill.

                </p>

            </div>

        );

    }

    return (

        <div className="grid gap-6 lg:grid-cols-2">

            {skills.map((skill) => (

                <SkillCard

                    key={skill.id}

                    skill={skill}

                    onEdit={onEdit}

                    onDelete={() => onDelete(skill.id)}

                />

            ))}

        </div>

    );

}