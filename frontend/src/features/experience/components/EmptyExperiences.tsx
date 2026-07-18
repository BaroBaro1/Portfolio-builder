import {
  BriefcaseBusiness,
  Plus,
} from "lucide-react";

type Props = {
  onCreate: () => void;
};

export default function EmptyExperience({
  onCreate,
}: Props) {
  return (
    <div className="rounded-3xl border bg-card p-14 shadow-sm">

      <div className="flex flex-col items-center text-center">

        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">

          <BriefcaseBusiness
            size={48}
            className="text-emerald-600"
          />

        </div>

        <h2 className="mt-8 text-3xl font-bold">
          No experience yet
        </h2>

        <p className="mt-4 max-w-lg leading-7 text-muted-foreground">

          Add your professional experience to strengthen your portfolio.

        </p>

        <button
          onClick={onCreate}
          className="mt-10 flex items-center gap-2 rounded-2xl bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
        >
          <Plus size={20} />

          Add Experience

        </button>

      </div>

    </div>
  );
}