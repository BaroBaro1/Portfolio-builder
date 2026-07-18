import { Award, Plus } from "lucide-react";

type Props = {
  onCreate: () => void;
};

export default function EmptyCertificates({
  onCreate,
}: Props) {

  return (

    <section className="rounded-[30px] border border-dashed bg-card p-16 text-center">

      <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">

        <Award
          size={52}
          className="text-emerald-600"
        />

      </div>

      <h2 className="mt-8 text-3xl font-bold">

        No Certificates Yet

      </h2>

      <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-muted-foreground">

        Showcase your certifications to increase credibility and
        demonstrate your professional qualifications.

      </p>

      <button
        onClick={onCreate}
        className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
      >
        <Plus size={18} />

        Add Your First Certificate

      </button>

    </section>

  );

}