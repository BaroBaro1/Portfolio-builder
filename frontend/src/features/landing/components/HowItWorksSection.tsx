import {
  UserPlus,
  PencilRuler,
  Share2,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create your account",
    description:
      "Sign up in seconds and access your personal dashboard.",
  },
  {
    icon: PencilRuler,
    title: "Build your portfolio",
    description:
      "Add your profile, projects, skills and experience with ease.",
  },
  {
    icon: Share2,
    title: "Publish & share",
    description:
      "Publish your portfolio and share one professional link anywhere.",
  },
];

export default function HowItWorksSection() {
  return (
<section
  id="how-it-works"
  className="py-28 bg-slate-50 dark:bg-slate-950"
>
        <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            How Portfoido Works
          </h2>

          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
            From creating an account to sharing your professional identity,
            everything takes only a few simple steps.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-3">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-3xl border border-slate-200 bg-white p-10 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white shadow-lg">
                  {index + 1}
                </div>

                <div className="mb-6 mt-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">
                  <Icon className="h-7 w-7 text-emerald-500" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}