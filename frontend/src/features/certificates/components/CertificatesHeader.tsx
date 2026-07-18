import { Award, Plus } from "lucide-react";

type Props = {
  total: number;
  onCreate: () => void;
};

export default function CertificatesHeader({
  total,
  onCreate,
}: Props) {
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-emerald-600 via-emerald-500 to-cyan-500 p-10 text-white shadow-2xl">

      {/* Background Effects */}

      <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 backdrop-blur">

            <Award size={18} />

            <span className="font-medium">
              Professional Certificates
            </span>

          </div>

          <h1 className="mt-6 text-5xl font-black tracking-tight">

            Certificates

          </h1>

          <p className="mt-5 text-lg leading-8 text-white/90">

            Showcase your certifications and professional
            achievements to strengthen your professional profile.

          </p>

        </div>

        {/* Right */}

        <div className="flex flex-col items-end gap-5">

          {/* Counter */}

          <div className="min-w-[160px] rounded-2xl bg-white/10 px-8 py-5 text-center backdrop-blur-md">

            <div className="text-5xl font-black">

              {total}

            </div>

            <div className="mt-2 text-sm font-medium text-white/80">

              Certificates

            </div>

          </div>

          {/* Button */}

          <button
            onClick={onCreate}
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-emerald-700 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
          >
            <Plus size={18} />

            Add Certificate

          </button>

        </div>

      </div>

    </section>
  );
}