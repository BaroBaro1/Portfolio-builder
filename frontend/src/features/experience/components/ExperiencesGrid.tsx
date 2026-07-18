import ExperienceCard from "./ExperienceCard";
import type { Experience } from "@/types/experience";

type Props = {
  experiences: Experience[];

  onEdit: (experience: Experience) => void;

  onDelete: (id: number) => void;
};

export default function ExperiencesGrid({
  experiences,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="grid gap-8 md:grid-cols-2 2xl:grid-cols-3">

      {experiences.map((experience) => (

        <ExperienceCard
          key={experience.id}
          experience={experience}
          onEdit={onEdit}
          onDelete={() => onDelete(experience.id)}
        />

      ))}

    </div>
  );
}