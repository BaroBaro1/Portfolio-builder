import ProfileHeader from "../components/ProfileHeader";
import ProfileAvatar from "../components/ProfileAvatar";
import ProfileForm from "../components/ProfileForm";

export default function ProfilePage() {
  return (
    <div className="space-y-8">

      <ProfileHeader />

      <div className="grid gap-8 xl:grid-cols-[340px_1fr]">

        <ProfileAvatar />

        <ProfileForm />

      </div>

    </div>
  );
}