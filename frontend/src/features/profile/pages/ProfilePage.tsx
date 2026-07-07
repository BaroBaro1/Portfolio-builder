import ProfileAvatar from "../components/ProfileAvatar";
import ProfileForm from "../components/ProfileForm";

export default function ProfilePage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          My Profile
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your professional identity.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">

        <div>
          <ProfileAvatar />
        </div>

        <div className="xl:col-span-2">
          <ProfileForm />
        </div>

      </div>

    </div>
  );
}