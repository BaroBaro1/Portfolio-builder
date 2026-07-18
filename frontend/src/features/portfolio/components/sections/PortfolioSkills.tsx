
import { Code2 } from "lucide-react";

import type { Skill } from "@/types/skill";

interface Props {
  skills: Skill[];
}

export default function PortfolioSkills({
  skills,
}: Props) {
  if (skills.length === 0) return null;

  return (
    <section className="space-y-10">

      <div className="text-center">

        <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
          Expertise
        </span>

        <h2 className="mt-5 text-4xl font-black">

          Skills

        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">

          Technologies and professional skills that I use
          to build reliable and modern applications.

        </p>

      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {skills.map((skill) => (

          <div
            key={skill.id}
            className="group rounded-[28px] border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl"
          >

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-900/30 dark:text-emerald-300">

              <Code2 size={30} />

            </div>

            <h3 className="text-xl font-bold">

              {skill.name}

            </h3>

            {skill.category && (

              <p className="mt-2 text-sm text-muted-foreground">

                {skill.category}

              </p>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}
