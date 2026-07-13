import type { Profile } from "@/types/profile";

interface Props {
  profile: Profile;
}

export default function PortfolioHero({
  profile,
}: Props) {
  return (
    <section className="rounded-xl border bg-card p-8">
      <div className="flex flex-col items-center text-center gap-4">
        {profile.avatar && (
          <img
            src={profile.avatar}
            alt={profile.full_name}
            className="h-32 w-32 rounded-full object-cover border"
          />
        )}

        <div>
          <h1 className="text-4xl font-bold">
            {profile.full_name}
          </h1>

          {profile.headline && (
            <p className="mt-2 text-lg text-muted-foreground">
              {profile.headline}
            </p>
          )}
        </div>

        {profile.bio && (
          <p className="max-w-2xl text-muted-foreground">
            {profile.bio}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          {profile.location && (
            <span>{profile.location}</span>
          )}

          {profile.website && (
            <a
              href={profile.website}
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Website
            </a>
          )}

          {profile.phone && (
            <span>{profile.phone}</span>
          )}
        </div>
      </div>
    </section>
  );
}