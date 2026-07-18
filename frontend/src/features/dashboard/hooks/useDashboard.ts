import { useMemo } from "react";

import { useProfile } from "@/features/profile/hooks/useProfile";
import { useProjects } from "@/features/projects/hooks/useProjects";
import { useSkills } from "@/features/skills/hooks/useSkills";
import { useExperiences } from "@/features/experience/hooks/useExperiences";
import { useEducations } from "@/features/education/hooks/useEducations";
import { useCertificates } from "@/features/certificates/hooks/useCertificates";
import { useSocialLinks } from "@/features/social-links/hooks/useSocialLinks";

export function useDashboard() {
  const { profile } = useProfile();

  const { projects } = useProjects();

  const { skills } = useSkills();

  const { experiences } = useExperiences();

  const { educations } = useEducations();

  const { certificates } = useCertificates();

  const { socialLinks } = useSocialLinks();

  const dashboard = useMemo(() => {
    const sections = [
      !!profile?.profile?.display_name,
      projects.length > 0,
      skills.length > 0,
      experiences.length > 0,
      educations.length > 0,
      certificates.length > 0,
      socialLinks.length > 0,
    ];

    const completed = sections.filter(Boolean).length;

    return {
      projects: projects.length,

      skills: skills.length,

      experiences: experiences.length,

      educations: educations.length,

      certificates: certificates.length,

      social_links: socialLinks.length,

      profileCompleted: sections[0],

      completion: Math.round((completed / sections.length) * 100),
      
      slug: profile?.profile?.slug ?? null,
    };
  }, [
    profile,
    projects,
    skills,
    experiences,
    educations,
    certificates,
    socialLinks,
  ]);

  return {
    dashboard,
  };
}