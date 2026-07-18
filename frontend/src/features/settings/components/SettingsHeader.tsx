import { Palette } from "lucide-react";

type Props = {
  total: number;
};

export default function SettingsHeader({
  total,
}: Props) {
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-emerald-600 via-emerald-500 to-cyan-500 p-10 text-white shadow-2xl">

      <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">

            <Palette size={18} />

            Portfolio Settings

          </div>

          <h1 className="mt-6 text-5xl font-black tracking-tight">

            Settings

          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/90">

            Customize your portfolio appearance and control
            what visitors can see.

          </p>

          <p className="mt-5 text-white/80">

            {total} section{total !== 1 ? "s" : ""} enabled

          </p>

        </div>

      </div>

    </section>
  );
}