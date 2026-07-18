import { BriefcaseBusiness } from "lucide-react";

import type { Experience } from "@/types/experience";

interface Props {
  experiences: Experience[];
}

export default function PortfolioExperience({
  experiences,
}: Props) {
  if (experiences.length === 0) return null;

  return (
    <section className="space-y-10">

      <div className="text-center">

        <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
          Career
        </span>

        <h2 className="mt-5 text-4xl font-black">
          Professional Experience
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
          My professional journey and the companies where I
          contributed through software development.
        </p>

      </div>

      <div className="relative mx-auto max-w-4xl">

        <div className="absolute left-6 top-0 h-full w-px bg-border" />

        <div className="space-y-10">

          {experiences.map((experience) => (

            <div
              key={experience.id}
              className="relative pl-20"
            >

              <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg">

                <BriefcaseBusiness size={20} />

              </div>

              <div className="rounded-[28px] border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-xl">

                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">

                  <div>

                    <h3 className="text-2xl font-bold">
                      {experience.position}
                    </h3>

                    <p className="mt-1 font-medium text-emerald-600">
                      {experience.company}
                    </p>

                  </div>

                  <div className="rounded-full bg-muted px-4 py-2 text-sm">

                    {experience.start_date}
                    {" — "}
                    {experience.is_current
                      ? "Present"
                      : experience.end_date}

                  </div>

                </div>

                {experience.location && (

                  <p className="mt-4 text-sm text-muted-foreground">

                    📍 {experience.location}

                  </p>

                )}

                {experience.description && (

                  <p className="mt-6 leading-8 text-muted-foreground">

                    {experience.description}

                  </p>

                )}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
