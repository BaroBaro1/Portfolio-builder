import {
  FolderKanban,
  Wrench,
  Briefcase,
  Rocket,
} from "lucide-react";

import { Link } from "react-router-dom";

const actions = [
  {
    title: "New Project",
    description: "Show your latest work",
    icon: FolderKanban,
    href: "/studio/projects",
  },
  {
    title: "Add Skill",
    description: "Keep your profile updated",
    icon: Wrench,
    href: "/studio/skills",
  },
  {
    title: "Experience",
    description: "Update your career",
    icon: Briefcase,
    href: "/studio/experiences",
  },
  {
    title: "Publish Portfolio",
    description: "Share your identity",
    icon: Rocket,
    href: "/portfolio",
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg dark:border-slate-800 dark:bg-slate-900">

      <h2 className="text-2xl font-bold">
        Quick Actions
      </h2>

      <p className="mt-2 text-sm text-muted-foreground">
        Jump directly to the most common tasks.
      </p>

      <div className="mt-8 space-y-4">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              to={action.href}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-50 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              <div className="rounded-2xl bg-emerald-500/10 p-4 text-emerald-500 transition group-hover:scale-110">
                <Icon size={22} />
              </div>

              <div className="flex-1">

                <h3 className="font-semibold">
                  {action.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {action.description}
                </p>

              </div>

            </Link>
          );
        })}

      </div>

    </div>
  );
}