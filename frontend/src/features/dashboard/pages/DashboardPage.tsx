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

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <WelcomeSection />

      {/* Statistics */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        <StatCard
          title="Projects"
          value={0}
          icon={<FolderKanban size={28} />}
        />

        <StatCard
          title="Skills"
          value={0}
          icon={<Wrench size={28} />}
        />

        <StatCard
          title="Experience"
          value={0}
          icon={<Briefcase size={28} />}
        />

        <StatCard
          title="Education"
          value={0}
          icon={<GraduationCap size={28} />}
        />

        <StatCard
          title="Certificates"
          value={0}
          icon={<Award size={28} />}
        />

        <StatCard
          title="Social Links"
          value={0}
          icon={<Link2 size={28} />}
        />

      </section>

      {/* Bottom Section */}
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