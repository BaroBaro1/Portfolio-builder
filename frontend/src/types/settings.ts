export interface Settings {
  accent_color: string;
  language: string;
  dark_mode: boolean;

  sections_order: string[];

  show_projects: boolean;
  show_skills: boolean;
  show_experiences: boolean;
  show_certificates: boolean;
}

export interface SettingsResponse {
  data: Settings | null;
}

export interface UpdateSettingsPayload {
  accent_color: string;
  language: string;
  dark_mode: boolean;

  sections_order: string[];

  show_projects: boolean;
  show_skills: boolean;
  show_experiences: boolean;
  show_certificates: boolean;
}