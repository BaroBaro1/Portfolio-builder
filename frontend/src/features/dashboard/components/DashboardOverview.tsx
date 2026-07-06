import {
  FolderKanban,
  GraduationCap,
  Briefcase,
  Award,
  Wrench,
  Link2,
} from "lucide-react";

import StatsCard from "./StatsCard";

export default function DashboardOverview() {
  return (
    <section className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Welcome back 👋
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your professional identity from one place.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        <StatsCard
          title="Projects"
          value={0}
          icon={<FolderKanban size={28} />}
        />

        <StatsCard
          title="Skills"
          value={0}
          icon={<Wrench size={28} />}
        />

        <StatsCard
          title="Experience"
          value={0}
          icon={<Briefcase size={28} />}
        />

        <StatsCard
          title="Education"
          value={0}
          icon={<GraduationCap size={28} />}
        />

        <StatsCard
          title="Certificates"
          value={0}
          icon={<Award size={28} />}
        />

        <StatsCard
          title="Social Links"
          value={0}
          icon={<Link2 size={28} />}
        />

      </div>

    </section>
  );
}