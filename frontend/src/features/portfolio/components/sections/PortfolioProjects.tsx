import { ArrowUpRight, Star } from "lucide-react";

import type { Project } from "@/types/project";

interface Props {
  projects: Project[];
}

export default function PortfolioProjects({
  projects,
}: Props) {
  if (projects.length === 0) return null;

  return (
    <section className="space-y-10">

      <div className="text-center">

        <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
          Portfolio
        </span>

        <h2 className="mt-5 text-4xl font-black tracking-tight">
          Featured Projects
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
          A collection of projects demonstrating my experience,
          problem-solving skills and passion for building modern web
          applications.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {projects.map((project) => (

          <article
            key={project.id}
            className="group overflow-hidden rounded-[30px] border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >

            <div className="relative">

              {project.thumbnail ? (

                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />

              ) : (

                <div className="flex h-72 items-center justify-center bg-gradient-to-br from-emerald-500 via-emerald-400 to-cyan-500 text-6xl font-black text-white">

                  {project.title.charAt(0)}

                </div>

              )}

              {project.featured && (

                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-emerald-700 backdrop-blur">

                  <Star
                    size={16}
                    fill="currentColor"
                  />

                  Featured

                </div>

              )}

            </div>

            <div className="space-y-6 p-8">

              <div>

                <h3 className="text-2xl font-bold">

                  {project.title}

                </h3>

                {project.description && (

                  <p className="mt-4 leading-7 text-muted-foreground">

                    {project.description}

                  </p>

                )}

              </div>

              <div className="flex flex-wrap gap-4">

                {project.live_url && (

                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
                  >

                    Live Demo

                    <ArrowUpRight size={18} />

                  </a>

                )}

                {project.github_url && (

                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border px-5 py-3 font-semibold transition hover:bg-muted"
                  >

                    Source Code

                    <ArrowUpRight size={18} />

                  </a>

                )}

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}