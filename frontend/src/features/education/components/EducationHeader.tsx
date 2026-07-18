import { GraduationCap, Plus } from "lucide-react";

type Props = {
  total: number;
  onCreate: () => void;
};

export default function EducationHeader({
  total,
  onCreate,
}: Props) {
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-emerald-600 via-emerald-500 to-cyan-500 p-10 text-white shadow-2xl">

      <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">

            <GraduationCap size={18} />

            Education History

          </div>

          <h1 className="mt-6 text-5xl font-black tracking-tight">
            Education
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/90">
            Showcase your academic journey, degrees,
            certifications and educational background.
          </p>

          <p className="mt-4 text-white/80">
            {total} education{total !== 1 ? "s" : ""}
          </p>

        </div>

        <button
          onClick={onCreate}
          className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-emerald-700 transition hover:bg-slate-100"
        >
          <Plus size={18} />

          Add Education

        </button>

      </div>

    </section>
  );
}