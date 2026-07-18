import SkillCard from "./SkillCard";
import EmptySkills from "./EmptySkills";

import type { ProfileSkill } from "@/types/skill";

type Props = {
  skills: ProfileSkill[];
  onEdit: (skill: ProfileSkill) => void;
  onDelete: (id: number) => void;
  onCreate: () => void;
};

export default function SkillsGrid({
  skills,
  onEdit,
  onDelete,
  onCreate,
}: Props) {
  if (skills.length === 0) {
    return <EmptySkills onCreate={onCreate} />;
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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