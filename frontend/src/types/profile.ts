export interface Profile {
  id: number;

  full_name: string;

  headline: string | null;

  bio: string | null;

  avatar: string | null;

  phone: string | null;

  website: string | null;

  location: string | null;

  slug: string;

  created_at: string;

  updated_at: string;
}