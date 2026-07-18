import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { useAuth } from "@/context/AuthContext";
import { useProfile } from "@/features/profile/hooks/useProfile";

export default function WelcomeSection() {
  const { user } = useAuth();

  const { profile } = useProfile();

  const portfolioUrl =
  profile?.profile?.slug
    ? `/portfolio/${profile.profile.slug}`
    : null;

  return (
    <section className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-emerald-600 via-emerald-500 to-cyan-500 p-10 text-white shadow-2xl">

      {/* Decorations */}

      <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="max-w-3xl">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">

            <Sparkles size={16} />

            Welcome to Portfoido

          </div>

          <h1 className="text-5xl font-extrabold tracking-tight">

            Welcome back,
            <br />
            {user?.name ?? "User"} 👋

          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">

            Continue building your professional identity,
            manage your projects, skills and experience,
            then publish a beautiful portfolio to share with the world.

          </p>

        </div>

        {/* Right */}

        <div className="flex flex-col gap-4">

          {portfolioUrl ? (
            <Link
              to={portfolioUrl}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-emerald-700 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-slate-100"
            >
              Preview Portfolio

              <ArrowRight size={18} />
            </Link>
          ) : (
            <button
              disabled
              className="cursor-not-allowed rounded-2xl bg-white/30 px-7 py-4 font-semibold text-white backdrop-blur"
            >
              Complete Profile First
            </button>
          )}

          <p className="text-center text-sm text-white/80">
            Your public portfolio is one click away.
          </p>

        </div>

      </div>

    </section>
  );
}