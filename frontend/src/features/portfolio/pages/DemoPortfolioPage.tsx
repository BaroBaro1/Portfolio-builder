
import PortfolioHero from "../components/PortfolioHero";

import PortfolioProjects from "../components/sections/PortfolioProjects";
import PortfolioSkills from "../components/sections/PortfolioSkills";
import PortfolioExperience from "../components/sections/PortfolioExperience";
import PortfolioEducation from "../components/sections/PortfolioEducation";
import PortfolioCertificates from "../components/sections/PortfolioCertificates";
import PortfolioSocial from "../components/sections/PortfolioSocial";

import { demoData } from "../data/demoData";

export default function DemoPortfolioPage() {
  const portfolio = demoData;

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