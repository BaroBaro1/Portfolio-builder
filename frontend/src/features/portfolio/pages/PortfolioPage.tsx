import { useParams } from "react-router-dom";

import PortfolioHero from "../components/PortfolioHero";
import { usePortfolio } from "../hooks/usePortfolio";

export default function PortfolioPage() {
  const { slug = "" } = useParams();

  const {
    portfolio,
    loading,
    error,
  } = usePortfolio(slug);

  if (loading) {
    return (
      <div className="p-10 text-center">
        Loading portfolio...
      </div>
    );
  }

  if (error || !portfolio) {
    return (
      <div className="p-10 text-center">
        Portfolio not found.
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-6xl space-y-8 px-6 py-10">
      <PortfolioHero profile={portfolio.profile} />


{/* Skills */}

{portfolio.skills.length > 0 && (
  <section className="rounded-xl border bg-card p-8">
    <h2 className="mb-6 text-2xl font-bold">
      Skills
    </h2>

    <div className="flex flex-wrap gap-3">
      {portfolio.skills.map((skill) => (
        <span
          key={skill.id}
          className="rounded-full border px-4 py-2 text-sm font-medium"
        >
          {skill.name}
        </span>
      ))}
    </div>
  </section>
)}
{/* Experience */}

{portfolio.experiences.length > 0 && (
  <section className="rounded-xl border bg-card p-8">
    <h2 className="mb-6 text-2xl font-bold">
      Experience
    </h2>

    <div className="space-y-6">
      {portfolio.experiences.map((experience) => (
        <div
          key={experience.id}
          className="border-l-4 border-primary pl-5"
        >
          <h3 className="text-lg font-semibold">
            {experience.position}
          </h3>

          <p className="text-sm text-muted-foreground">
            {experience.company}
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            {experience.start_date}
            {" - "}
            {experience.end_date ?? "Present"}
          </p>

          {experience.description && (
            <p className="mt-3 leading-7">
              {experience.description}
            </p>
          )}
        </div>
      ))}
    </div>
  </section>
)}
{/* Education */}

{portfolio.educations.length > 0 && (
  <section className="rounded-xl border bg-card p-8">
    <h2 className="mb-6 text-2xl font-bold">
      Education
    </h2>

    <div className="space-y-6">
      {portfolio.educations.map((education) => (
        <div
          key={education.id}
          className="border-l-4 border-primary pl-5"
        >
          <h3 className="text-lg font-semibold">
            {education.degree}
          </h3>

          <p className="text-sm text-muted-foreground">
{education.institution}
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            {education.start_date}
            {" - "}
            {education.end_date ?? "Present"}
          </p>

          {education.description && (
            <p className="mt-3 leading-7">
              {education.description}
            </p>
          )}
        </div>
      ))}
    </div>
  </section>
)}
{/* Projects */}

{portfolio.projects.length > 0 && (
  <section className="rounded-xl border bg-card p-8">
    <h2 className="mb-6 text-2xl font-bold">
      Projects
    </h2>

    <div className="grid gap-6 md:grid-cols-2">
      {portfolio.projects.map((project) => (
        <div
          key={project.id}
          className="rounded-lg border p-5"
        >
          {project.thumbnail && (
  <img
    src={project.thumbnail}
    alt={project.title}
    className="mb-4 h-48 w-full rounded-lg object-cover"
  />
)}
          <h3 className="text-xl font-semibold">
            {project.title}
          </h3>

          {project.description && (
            <p className="mt-3 text-muted-foreground">
              {project.description}
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-3">
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                Live Demo
              </a>
            )}

            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
)}
{/* Certificates */}

{portfolio.certificates.length > 0 && (
  <section className="rounded-xl border bg-card p-8">
    <h2 className="mb-6 text-2xl font-bold">
      Certificates
    </h2>

    <div className="grid gap-6 md:grid-cols-2">
      {portfolio.certificates.map((certificate) => (
        <div
          key={certificate.id}
          className="rounded-lg border p-5"
        >
          <h3 className="text-lg font-semibold">
            {certificate.title}
          </h3>

          <p className="text-sm text-muted-foreground">
            {certificate.issuer}
          </p>

          <p className="mt-2 text-sm text-muted-foreground">
            {certificate.issue_date}
          </p>

          {certificate.credential_url && (
            <a
              href={certificate.credential_url}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-primary underline"
            >
              View Certificate
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
)}
{/* Social Links */}

{portfolio.social_links.length > 0 && (
  <section className="rounded-xl border bg-card p-8">
    <h2 className="mb-6 text-2xl font-bold">
      Connect
    </h2>

    <div className="flex flex-wrap gap-4">
      {portfolio.social_links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border px-4 py-2 hover:bg-muted"
        >
          {link.platform}
        </a>
      ))}
    </div>
  </section>
)}    </main>
  );
}