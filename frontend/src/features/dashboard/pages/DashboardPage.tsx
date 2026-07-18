import {
  Award,
  Briefcase,
  FolderKanban,
  GraduationCap,
  Link2,
  Wrench,
} from "lucide-react";

import WelcomeSection from "../components/WelcomeSection";
import StatCard from "../components/StatCard";
import PortfolioProgress from "../components/PortfolioProgress";
import QuickActions from "../components/QuickActions";
import RecentActivity from "../components/RecentActivity";

import { useDashboard } from "../hooks/useDashboard";

export default function DashboardPage() {
  const { dashboard } = useDashboard();

  return (
<div className="mx-auto max-w-7xl space-y-8">
<WelcomeSection />
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        <StatCard
          title="Projects"
          value={dashboard.projects}
          icon={<FolderKanban size={28} />}
        />

        <StatCard
          title="Skills"
          value={dashboard.skills}
          icon={<Wrench size={28} />}
        />

        <StatCard
          title="Experience"
          value={dashboard.experiences}
          icon={<Briefcase size={28} />}
        />

        <StatCard
          title="Education"
          value={dashboard.educations}
          icon={<GraduationCap size={28} />}
        />

        <StatCard
          title="Certificates"
          value={dashboard.certificates}
          icon={<Award size={28} />}
        />

        <StatCard
          title="Social Links"
          value={dashboard.social_links}
          icon={<Link2 size={28} />}
        />

      </section>

      <section className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <PortfolioProgress />
        </div>

        <QuickActions />

      </section>

      <RecentActivity />

    </div>
  );
}