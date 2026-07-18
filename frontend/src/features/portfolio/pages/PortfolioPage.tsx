
import { useParams } from "react-router-dom";

import { usePortfolio } from "../hooks/usePortfolio";

import PortfolioHero from "../components/PortfolioHero";

import PortfolioProjects from "../components/sections/PortfolioProjects";
import PortfolioSkills from "../components/sections/PortfolioSkills";
import PortfolioExperience from "../components/sections/PortfolioExperience";
import PortfolioEducation from "../components/sections/PortfolioEducation";
import PortfolioCertificates from "../components/sections/PortfolioCertificates";
import PortfolioSocial from "../components/sections/PortfolioSocial";

export default function PortfolioPage() {
  const { slug = "" } = useParams();

  const {
    portfolio,
    loading,
    error,
  } = usePortfolio(slug);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading portfolio...
      </div>
    );
  }

  if (error || !portfolio) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Portfolio not found.
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl space-y-24 px-6 py-12">

      <PortfolioHero
        profile={portfolio.profile}
      />

      <PortfolioProjects
        projects={portfolio.projects}
      />

      <PortfolioSkills
        skills={portfolio.skills}
      />

      <PortfolioExperience
        experiences={portfolio.experiences}
      />

      <PortfolioEducation
        educations={portfolio.educations}
      />

      <PortfolioCertificates
        certificates={portfolio.certificates}
      />

      <PortfolioSocial
        socialLinks={portfolio.social_links}
      />

    </main>
  );
}
