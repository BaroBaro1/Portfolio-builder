import { Share2, Plus } from "lucide-react";

type Props = {
  onCreate: () => void;
};

export default function EmptySocialLinks({
  onCreate,
}: Props) {
  return (
    <section className="rounded-[30px] border border-dashed bg-card p-16 text-center">

      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400">

        <Share2 size={42} />

      </div>

      <h2 className="mt-8 text-3xl font-bold">

        No social links yet

      </h2>

      <p className="mx-auto mt-4 max-w-xl leading-7 text-muted-foreground">

        Connect your professional profiles such as LinkedIn,
        GitHub, X, Facebook, Instagram, Behance, Dribbble,
        YouTube and more.

      </p>

      <button
        onClick={onCreate}
        className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl"
      >
        <Plus size={20} />

        Add First Social Link

      </button>

    </section>
  );
}