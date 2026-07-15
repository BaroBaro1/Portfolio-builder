import ProfileHeader from "../components/ProfileHeader";
import ProfileAvatar from "../components/ProfileAvatar";
import ProfileForm from "../components/ProfileForm";

import { useProfile } from "../hooks/useProfile";

export default function ProfilePage() {

  const { profile, loading } = useProfile();

  if (loading || !profile) {
    return null;
  }

  return (
    <div className="space-y-8">

      <ProfileHeader
        slug={profile.profile.slug}
      />

      <div className="grid gap-8 xl:grid-cols-[340px_1fr]">

        <ProfileAvatar />

        <ProfileForm />

      </div>

    </div>
  );
}