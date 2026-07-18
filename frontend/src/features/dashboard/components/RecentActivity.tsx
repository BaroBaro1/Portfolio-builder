import { Clock3, Sparkles } from "lucide-react";

import { useDashboard } from "../hooks/useDashboard";

export default function RecentActivity() {
  const { dashboard } = useDashboard();

  const total =
    dashboard.projects +
    dashboard.skills +
    dashboard.experiences +
    dashboard.educations +
    dashboard.certificates +
    dashboard.social_links;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg dark:border-slate-800 dark:bg-slate-900">

      <div className="flex items-center gap-3">

        <Sparkles className="text-emerald-500" />

        <h2 className="text-2xl font-bold">
Recent Activity
        </h2>

      </div>

      {total === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-10 text-center dark:border-slate-700">

          <Clock3
            className="mx-auto text-muted-foreground"
            size={42}
          />

          <h3 className="mt-5 text-xl font-semibold">
            Your workspace is empty
          </h3>

          <p className="mt-3 text-muted-foreground leading-7">
            Start by creating your first project or adding your
            professional information.
          </p>

        </div>
      ) : (
        <div className="mt-8 space-y-4">

          <div className="rounded-2xl bg-emerald-50 p-5 dark:bg-emerald-950/30">

            <p className="font-semibold">
              Great progress 🎉
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              You currently have{" "}
              <span className="font-semibold">
                {total}
              </span>{" "}
              portfolio items.
            </p>

          </div>

        </div>
      )}

    </div>
  );
}