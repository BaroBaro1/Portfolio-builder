import { useEffect, useState } from "react";
import { profileService } from "../services/profileService";

export type ProfileData = {
  user: {
    id: number;
    name: string;
    email: string;
  };

  profile: {
    display_name: string;
    slug: string;
    headline: string | null;
    bio: string | null;
    avatar: string | null;
    location: string | null;
    website: string | null;
    phone: string | null;
    status: string;
  };
};

export function useProfile() {
  const [profile, setProfile] =
    useState<ProfileData | null>(null);

  const [loading, setLoading] =
    useState(true);

  async function loadProfile() {
    try {
      const data =
        await profileService.getProfile();

      setProfile(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProfile();
  }, []);

  return {
    profile,
    setProfile,
    loading,
    reload: loadProfile,
  };
}
