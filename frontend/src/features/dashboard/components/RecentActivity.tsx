export default function RecentActivity() {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">

      <h2 className="text-lg font-semibold">
        Recent Activity
      </h2>

      <div className="mt-6 rounded-xl border border-dashed p-8 text-center">

        <p className="font-medium">
          No activity yet.
        </p>

        <p className="mt-2 text-sm text-muted-foreground">
          Start by creating your first project.
        </p>

      </div>

    </div>
  );
}