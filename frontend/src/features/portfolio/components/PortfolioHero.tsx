import {
  MapPin,
  Phone,
  Globe,
} from "lucide-react";

import type { Profile } from "@/types/profile";

interface Props {
  profile: Profile;
}

export default function PortfolioHero({
  profile,
}: Props) {
  return (
    <section className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-emerald-600 via-emerald-500 to-cyan-500 p-10 text-white shadow-2xl">

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center">

        {/* Avatar */}

        <div className="flex justify-center lg:justify-start">

          <div className="rounded-full border-4 border-white/30 p-2">

            <img
              src={
                profile.avatar ??
                "https://ui-avatars.com/api/?name=Portfolio"
              }
              alt={profile.display_name}
              className="h-52 w-52 rounded-full object-cover"
            />

          </div>

        </div>

        {/* Content */}

        <div className="flex-1">

          <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold backdrop-blur">

            Professional Portfolio

          </span>

          <h1 className="mt-6 text-5xl font-black">

            {profile.display_name}

          </h1>

          {profile.headline && (

            <p className="mt-3 text-2xl font-medium text-white/90">

              {profile.headline}

            </p>

          )}

          {profile.bio && (

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90">

              {profile.bio}

            </p>

          )}

          <div className="mt-8 flex flex-wrap gap-4">

            {profile.location && (

              <div className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 backdrop-blur">

                <MapPin size={18} />

                {profile.location}

              </div>

            )}

            {profile.phone && (

              <div className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 backdrop-blur">

                <Phone size={18} />

                {profile.phone}

              </div>

            )}

            {profile.website && (

              <a
                href={profile.website}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 backdrop-blur transition hover:bg-white/20"
              >

                <Globe size={18} />

                Website

              </a>

            )}

          </div>

        </div>

      </div>

    </section>
  );
}