import type { UpdateSettingsPayload } from "@/types/settings";

type Props = {
  form: UpdateSettingsPayload;
  update: <K extends keyof UpdateSettingsPayload>(
    key: K,
    value: UpdateSettingsPayload[K]
  ) => void;
};

export default function SettingsSectionsCard({
  form,
  update,
}: Props) {
  const sections = [
    {
      key: "show_projects",
      title: "Projects",
      description: "Display your portfolio projects.",
    },
    {
      key: "show_skills",
      title: "Skills",
      description: "Display your professional skills.",
    },
    {
      key: "show_experiences",
      title: "Experience",
      description: "Display your work experience.",
    },
    {
      key: "show_certificates",
      title: "Certificates",
      description: "Display your certificates.",
    },
  ] as const;

  return (
    <section className="rounded-3xl border bg-card p-8 shadow-sm">

      <div className="mb-8">

        <h2 className="text-2xl font-bold">

          Portfolio Sections

        </h2>

        <p className="mt-2 text-muted-foreground">

          Choose which sections are visible on your portfolio.

        </p>

      </div>

      <div className="space-y-5">

        {sections.map((section) => (

          <div
            key={section.key}
            className="flex items-center justify-between rounded-2xl border p-5 transition hover:border-emerald-300"
          >

            <div>

              <h3 className="font-semibold">

                {section.title}

              </h3>

              <p className="mt-1 text-sm text-muted-foreground">

                {section.description}

              </p>

            </div>

            <input
              type="checkbox"
              checked={form[section.key]}
              onChange={(e) =>
                update(section.key, e.target.checked)
              }
              className="h-5 w-5"
            />

          </div>

        ))}

      </div>

    </section>
  );
}