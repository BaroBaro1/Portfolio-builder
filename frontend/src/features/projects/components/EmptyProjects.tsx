import {
  FolderKanban,
  Plus,
  Sparkles,
} from "lucide-react";

type Props = {
  onCreate: () => void;
};

export default function EmptyProjects({
  onCreate,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-dashed border-emerald-300 bg-gradient-to-br from-white to-emerald-50 p-16 shadow-lg dark:border-emerald-800 dark:from-slate-900 dark:to-slate-950">

      <div className="mx-auto flex max-w-xl flex-col items-center text-center">

        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">

          <FolderKanban size={56} />

        </div>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600">

          <Sparkles size={16} />

          Your portfolio starts here

        </div>

        <h2 className="mt-8 text-4xl font-extrabold tracking-tight">

          No projects yet

        </h2>

        <p className="mt-6 leading-8 text-muted-foreground">

          Projects are the most important part of your professional
          portfolio.

          Add your first project to start building your professional
          identity.

        </p>

        <button
          onClick={onCreate}
          className="mt-12 inline-flex items-center gap-3 rounded-2xl bg-emerald-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl"
        >

          <Plus size={22} />

          Create First Project

        </button>

      </div>

    </div>
  );
}