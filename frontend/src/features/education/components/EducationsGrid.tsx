import type { Education } from "@/types/education";

import EducationCard from "./EducationCard";

type Props = {
  educations: Education[];

  onCreate: () => void;

  onEdit: (education: Education) => void;

  onDelete: (id: number) => void;
};

export default function EducationsGrid({
  educations,
  onEdit,
  onDelete,
}: Props) {

  return (

    <div className="space-y-8">

      

      <div className="grid gap-6 lg:grid-cols-2">

        {educations.map((education) => (

          <EducationCard
            key={education.id}
            education={education}
            onEdit={onEdit}
            onDelete={() => onDelete(education.id)}
          />

        ))}

      </div>

    </div>

  );

}