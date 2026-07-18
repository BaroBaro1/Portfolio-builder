import {
  Eye,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

interface ProfileHeaderProps {
  slug: string;
}

export default function ProfileHeader({
  slug,
}: ProfileHeaderProps) {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-emerald-400/20 bg-gradient-to-br from-emerald-600 via-emerald-500 to-cyan-500 p-10 text-white shadow-2xl">

      {/* Background */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative z-10">

        <div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">

          {/* Left */}

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">

              <Sparkles size={16} />

              Professional Identity

            </div>

            <h1 className="mt-6 text-5xl font-black tracking-tight">

              My Profile

            </h1>

            <p className="mt-5 text-lg leading-8 text-white/90">

              Build a professional identity that represents your
              experience, projects and achievements.

              Everything you complete here will automatically
              appear on your public portfolio.

            </p>

          </div>

          {/* Right */}

          <div className="flex flex-col gap-4">

            <Link
              to={`/portfolio/${slug}`}
              target="_blank"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 font-semibold text-emerald-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100"
            >
              <Eye size={20} />

              Preview Portfolio

            </Link>

          </div>

        </div>

        {/* Bottom Stats */}

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">

            <p className="text-sm text-white/80">
              Public Portfolio
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Ready to Publish
            </h3>

          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">

            <p className="text-sm text-white/80">
              Visibility
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Professional
            </h3>

          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">

            <p className="text-sm text-white/80">
              Personal Brand
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Growing
            </h3>

          </div>

        </div>

      </div>

    </section>
  );
}