import { useAuth } from "@/context/AuthContext";

export default function WelcomeSection() {
  const { user } = useAuth();

  return (
    <section className="rounded-2xl border bg-card p-8 shadow-sm">
      <p className="text-sm text-muted-foreground">
        Welcome back
      </p>

      <h1 className="mt-2 text-4xl font-bold tracking-tight">
        {user?.name ?? "User"} 👋
      </h1>

      <p className="mt-4 max-w-2xl text-muted-foreground">
        Manage your professional identity, update your portfolio,
        publish your work and keep everything organized from one place.
      </p>
    </section>
  );
}