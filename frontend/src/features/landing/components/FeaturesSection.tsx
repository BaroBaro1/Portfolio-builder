import {
  User,
  FolderKanban,
  Sparkles,
  Briefcase,
  Smartphone,
  Link2,
} from "lucide-react";

const features = [
  {
    icon: User,
    title: "Professional Profile",
    description:
      "Create a modern profile that highlights your professional identity.",
  },
  {
    icon: FolderKanban,
    title: "Projects",
    description:
      "Showcase your best work with beautiful project pages.",
  },
  {
    icon: Sparkles,
    title: "Skills",
    description:
      "Present your technical and professional skills clearly.",
  },
  {
    icon: Briefcase,
    title: "Experience",
    description:
      "Display your work experience in a structured timeline.",
  },
  {
    icon: Smartphone,
    title: "Responsive",
    description:
      "Looks perfect on desktop, tablet and mobile devices.",
  },
  {
    icon: Link2,
    title: "One Shareable Link",
    description:
      "Share your entire portfolio using a single professional URL.",
  },
];

export default function FeaturesSection() {
  return (
<section
  id="features"
  className="py-28"
>      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Everything you need to build
            <br />
            your professional identity.
          </h2>

          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
            Simple tools designed to help you create, manage and publish
            your portfolio with confidence.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">
                  <Icon className="h-7 w-7 text-emerald-500" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}