import { Award, ExternalLink } from "lucide-react";

import type { Certificate } from "@/types/certificate";

interface Props {
  certificates: Certificate[];
}

export default function PortfolioCertificates({
  certificates,
}: Props) {
  if (certificates.length === 0) return null;

  return (
    <section className="space-y-10">

      <div className="text-center">

        <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
          Achievements
        </span>

        <h2 className="mt-5 text-4xl font-black">
          Certificates
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
          Professional certifications that validate my knowledge
          and continuous learning journey.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {certificates.map((certificate) => (

          <article
            key={certificate.id}
            className="group overflow-hidden rounded-[30px] border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl"
          >

            {certificate.image ? (

              <img
                src={certificate.image}
                alt={certificate.title}
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
              />

            ) : (

              <div className="flex h-52 items-center justify-center bg-gradient-to-br from-emerald-500 to-cyan-500">

                <Award
                  size={70}
                  className="text-white"
                />

              </div>

            )}

            <div className="space-y-5 p-7">

              <div>

                <h3 className="text-xl font-bold">

                  {certificate.title}

                </h3>

                <p className="mt-2 font-medium text-emerald-600">

                  {certificate.issuer}

                </p>

              </div>

              <div className="inline-flex rounded-full bg-muted px-4 py-2 text-sm">

                {certificate.issue_date}

              </div>

              {certificate.credential_url && (

                <a
                  href={certificate.credential_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
                >

                  <ExternalLink size={18} />

                  View Certificate

                </a>

              )}

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}