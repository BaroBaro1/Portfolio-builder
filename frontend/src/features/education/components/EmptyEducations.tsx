import { GraduationCap, Plus } from "lucide-react";

type Props = {
  onCreate: () => void;
};

export default function EmptyEducations({
  onCreate,
}: Props) {
  return (
    <div className="rounded-[30px] border bg-card p-16 shadow-sm">

      <div className="flex flex-col items-center text-center">

        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">

          <GraduationCap
            size={46}
            className="text-emerald-600"
          />

        </div>

        <h2 className="mt-8 text-3xl font-bold">

          No education yet

        </h2>

        <p className="mt-4 max-w-lg leading-7 text-muted-foreground">

          Add your educational background to help
          visitors understand your academic journey.

        </p>

        <button
          onClick={onCreate}
          className="mt-10 flex items-center gap-2 rounded-2xl bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
        >
          <Plus size={20} />

          Add Education

        </button>

      </div>

    </div>
  );
}