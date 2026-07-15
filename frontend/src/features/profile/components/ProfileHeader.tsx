import { UserRound, Eye } from "lucide-react";
import { Link } from "react-router-dom";

interface ProfileHeaderProps {
  slug: string;
}

export default function ProfileHeader({
  slug,
}: ProfileHeaderProps) {
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-emerald-600 via-emerald-500 to-cyan-500 p-10 text-white shadow-2xl">

      <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">

            <UserRound size={18} />

            Professional Identity

          </div>

          <h1 className="mt-6 text-5xl font-black tracking-tight">
            My Profile
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/90">
            Complete your professional identity.
            Everything you add here will appear
            on your public portfolio.
          </p>

        </div>

        <div className="flex flex-wrap gap-4">

          <Link
            to={`/portfolio/${slug}`}
            className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-emerald-700 transition hover:bg-slate-100"
          >
            <Eye size={18} />
            Preview Portfolio
          </Link>

        </div>

      </div>

    </section>
  );
}