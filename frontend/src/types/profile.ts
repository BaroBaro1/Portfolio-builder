export interface Profile {
  id: number;

  user_id: number;

  display_name: string;

  slug: string;

  headline: string | null;

  bio: string | null;

  avatar: string | null;

  phone: string | null;

  website: string | null;

  location: string | null;

  created_at: string;

  updated_at: string;
}