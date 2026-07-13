import type { Certificate } from "./certificate";
import type { Education } from "./education";
import type { Experience } from "./experience";
import type { Profile } from "./profile";
import type { Project } from "./project";
import type { Skill } from "./skill";
import type { SocialLink } from "./social-link";

export interface Portfolio {
  profile: Profile;

  skills: Skill[];

  projects: Project[];

  experiences: Experience[];

  educations: Education[];

  certificates: Certificate[];

  social_links: SocialLink[];
}

export interface PortfolioResponse {
  data: Portfolio;
}