import { UserCircle2 } from "lucide-react";

export default function ProfileAvatar() {
  return (
    <div className="rounded-2xl border bg-card p-8 shadow-sm">

      <div className="flex flex-col items-center">

        <UserCircle2
          size={140}
          className="text-muted-foreground"
        />

        <button
          className="mt-6 rounded-xl bg-primary px-5 py-2 text-primary-foreground transition hover:opacity-90"
        >
          Upload Photo
        </button>

        <p className="mt-3 text-center text-sm text-muted-foreground">
          JPG or PNG
          <br />
          Maximum 2 MB
        </p>

      </div>

    </div>
  );
}