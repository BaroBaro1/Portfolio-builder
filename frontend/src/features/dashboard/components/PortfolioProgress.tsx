import { Sparkles, CheckCircle2 } from "lucide-react";
import { useDashboard } from "../hooks/useDashboard";

export default function PortfolioProgress() {
  const { dashboard } = useDashboard();

  const progress = dashboard.completion;

  return (
    <div className="overflow-hidden rounded-3xl border border-emerald-200/50 bg-gradient-to-br from-white to-emerald-50 p-8 shadow-lg dark:border-emerald-900/30 dark:from-slate-900 dark:to-slate-950">

      <div className="flex items-start justify-between">

        <div>

          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">

            <Sparkles size={16} />

            Portfolio Progress

          </div>

          <h2 className="text-3xl font-bold">
            {progress}% Completed
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground leading-7">
            Complete your professional identity before publishing your portfolio.
            The more sections you complete, the more attractive your public portfolio becomes.
          </p>

        </div>

        <div className="hidden rounded-2xl bg-emerald-500/10 p-5 text-emerald-500 lg:block">

          <CheckCircle2 size={36} />

        </div>

      </div>

      <div className="mt-10">

        <div className="mb-3 flex justify-between text-sm">

          <span className="font-medium">
            Completion
          </span>

          <span className="font-semibold text-emerald-600">
            {progress}%
          </span>

        </div>

        <div className="h-4 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">

          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-cyan-500 transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}