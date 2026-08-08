import {
  ArrowRight,
  CheckCircle,
  ExternalLink,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { demoData } from "@/features/portfolio/data/demoData";

export default function HeroSection() {
  const { profile, skills, projects } = demoData;

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">

      {/* Background decoration */}

      <div className="absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="absolute right-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

          {/* LEFT SIDE */}

          <div className="space-y-8">

            {/* Badge */}

            <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
              Portfoido · Professional Portfolio Builder
            </div>

            {/* Heading */}

            <div className="space-y-6">

              <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-6xl lg:text-7xl">
                Build your professional
                <br />
                identity.
                <br />
                Stand out everywhere.
              </h1>

              <p className="max-w-lg text-lg leading-8 text-slate-600 dark:text-slate-400">
                Create a beautiful professional portfolio, showcase your
                projects, skills and experience, then share one powerful link
                with the world.
              </p>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4">

              <Link to="/register">
                <Button size="lg" className="gap-2">
                  Get Started
                  <ArrowRight size={18} />
                </Button>
              </Link>

              <Link to="/demo">
                <Button size="lg" variant="outline">
                  Live Demo
                </Button>
              </Link>

            </div>

            {/* Benefits */}

            <div className="flex flex-col gap-3 pt-2 text-sm text-slate-600 dark:text-slate-400 sm:flex-row sm:flex-wrap sm:gap-6">

              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                No Coding
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                Professional Design
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                Free to Start
              </div>

            </div>

          </div>

          {/* RIGHT SIDE - MOBILE PORTFOLIO PREVIEW */}

          <div className="flex justify-center lg:justify-end">

            <div className="relative w-[320px] sm:w-[340px]">

              {/* Phone */}

              <div className="relative h-[620px] overflow-hidden rounded-[42px] border-[9px] border-slate-900 bg-slate-950 shadow-[0_40px_80px_rgba(0,0,0,.28)]">

                {/* Dynamic island */}

                <div className="absolute left-1/2 top-3 z-30 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />

                {/* Portfolio */}

                <div className="h-full overflow-hidden rounded-[33px] bg-white dark:bg-slate-950">

                  {/* Portfolio Hero */}

                  <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-500 to-cyan-500 px-6 pb-8 pt-14 text-white">

                    <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

                    <div className="absolute -right-16 bottom-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

                    <div className="relative z-10">

                      {/* Avatar */}

                      <div className="flex justify-center">

                        <div className="rounded-full border-2 border-white/30 p-1.5">

                          <img
                            src={
                              profile.avatar ??
                              "https://ui-avatars.com/api/?name=Portfolio"
                            }
                            alt={profile.display_name}
                            className="h-24 w-24 rounded-full object-cover"
                          />

                        </div>

                      </div>

                      {/* Identity */}

                      <div className="mt-5 text-center">

                        <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold backdrop-blur">
                          Professional Portfolio
                        </span>

                        <h2 className="mt-3 text-2xl font-black">
                          {profile.display_name}
                        </h2>

                        {profile.headline && (
                          <p className="mt-1 text-sm font-medium text-white/90">
                            {profile.headline}
                          </p>
                        )}

                        {profile.location && (
                          <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-white/80">
                            <MapPin size={12} />
                            {profile.location}
                          </div>
                        )}

                      </div>

                    </div>

                  </div>

                  {/* Portfolio Content */}

                  <div className="space-y-7 px-5 py-7">

                    {/* About */}

                    {profile.bio && (
                      <div>

                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                          About
                        </span>

                        <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-400">
                          {profile.bio}
                        </p>

                      </div>
                    )}

                    {/* Skills */}

                    {skills.length > 0 && (
                      <div>

                        <div className="flex items-center justify-between">

                          <h3 className="text-lg font-black text-slate-900 dark:text-white">
                            Skills
                          </h3>

                          <span className="text-[10px] text-muted-foreground">
                            Expertise
                          </span>

                        </div>

                        <div className="mt-3 flex flex-wrap gap-2">

                          {skills.slice(0, 6).map((skill) => (
                            <span
                              key={skill.id}
                              className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                            >
                              {skill.name}
                            </span>
                          ))}

                        </div>

                      </div>
                    )}

                    {/* Projects */}

                    {projects.length > 0 && (
                      <div>

                        <h3 className="text-lg font-black text-slate-900 dark:text-white">
                          Featured Projects
                        </h3>

                        <div className="mt-4 space-y-4">

                          {projects.slice(0, 2).map((project) => (
                            <article
                              key={project.id}
                              className="overflow-hidden rounded-2xl border bg-card shadow-sm"
                            >

                              {project.thumbnail ? (
                                <img
                                  src={project.thumbnail}
                                  alt={project.title}
                                  className="h-28 w-full object-cover"
                                />
                              ) : (
                                <div className="flex h-28 items-center justify-center bg-gradient-to-br from-emerald-500 to-cyan-500 text-3xl font-black text-white">
                                  {project.title.charAt(0)}
                                </div>
                              )}

                              <div className="p-4">

                                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                                  {project.title}
                                </h4>

                                {project.description && (
                                  <p className="mt-1.5 line-clamp-2 text-[10px] leading-4 text-muted-foreground">
                                    {project.description}
                                  </p>
                                )}

                                <div className="mt-3 flex gap-2">

                                  {project.live_url && (
                                    <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-2.5 py-1.5 text-[9px] font-semibold text-white">
                                      Live Demo
                                      <ExternalLink size={10} />
                                    </span>
                                  )}

                                </div>

                              </div>

                            </article>
                          ))}

                        </div>

                      </div>
                    )}

                    {/* Social */}

                    <div className="border-t pt-5">

                      <div className="flex items-center justify-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-xl border text-muted-foreground">
                          <ExternalLink size={16} />
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}