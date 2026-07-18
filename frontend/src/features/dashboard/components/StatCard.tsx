import type { ReactNode } from "react";

type Props = {
  title: string;
  value: number | string;
  icon: ReactNode;
};

export default function StatCard({
  title,
  value,
  icon,
}: Props) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-medium text-muted-foreground">
            {title}
          </p>

          <h2 className="mt-4 text-4xl xl:text-5xl font-extrabold tracking-tight">
            {value}
          </h2>

        </div>

        <div className="rounded-2xl bg-emerald-500/10 p-5 text-emerald-500 transition group-hover:scale-110">

          {icon}

        </div>

      </div>

    </div>
  );
}