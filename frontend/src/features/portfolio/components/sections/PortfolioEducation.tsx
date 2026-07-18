import { GraduationCap } from "lucide-react";

import type { Education } from "@/types/education";

interface Props {
  educations: Education[];
}

export default function PortfolioEducation({
  educations,
}: Props) {
  if (educations.length === 0) return null;

  return (
    <section className="space-y-10">

      <div className="text-center">

        <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
          Education
        </span>

        <h2 className="mt-5 text-4xl font-black">
          Academic Background
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
          My educational journey and academic qualifications.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {educations.map((education) => (

          <article
            key={education.id}
            className="group rounded-[30px] border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl"
          >

            <div className="flex items-start justify-between">

              <div>

                <h3 className="text-2xl font-bold">

                  {education.degree}

                </h3>

                <p className="mt-2 font-medium text-emerald-600">

                  {education.institution}

                </p>

                {education.field_of_study && (

                  <p className="mt-2 text-muted-foreground">

                    {education.field_of_study}

                  </p>

                )}

              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-900/30 dark:text-emerald-300">

                <GraduationCap size={30} />

              </div>

            </div>

            <div className="mt-8 inline-flex rounded-full bg-muted px-4 py-2 text-sm">

              {education.start_date}
              {" — "}
              {education.is_current
                ? "Present"
                : education.end_date}

            </div>

            {education.description && (

              <p className="mt-6 leading-8 text-muted-foreground">

                {education.description}

              </p>

            )}

          </article>

        ))}

      </div>

    </section>
  );
}
