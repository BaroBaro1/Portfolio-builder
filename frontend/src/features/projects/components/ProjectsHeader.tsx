import { Plus } from "lucide-react";

type Props = {
  total: number;
  onCreate: () => void;
};

export default function ProjectsHeader({
  total,
  onCreate,
}: Props) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

      <div>

        <h1 className="text-4xl font-bold tracking-tight">
          Projects
        </h1>

        <p className="mt-3 text-muted-foreground">
          Manage your portfolio projects.
        </p>

        <p className="mt-2 text-sm text-muted-foreground">
          {total} project{total !== 1 ? "s" : ""}
        </p>

      </div>

      <button
        onClick={onCreate}
        className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 font-semibold text-white transition hover:bg-emerald-700"
      >
        <Plus size={20} />

        New Project
      </button>

    </div>
  );
}