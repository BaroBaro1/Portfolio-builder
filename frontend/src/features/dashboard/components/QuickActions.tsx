import { Plus } from "lucide-react";

const actions = [
  "Add Project",
  "Add Skill",
  "Add Experience",
  "Publish Portfolio",
];

export default function QuickActions() {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">

      <h2 className="text-lg font-semibold">
        Quick Actions
      </h2>

      <div className="mt-6 grid gap-3">

        {actions.map((action) => (
          <button
            key={action}
            className="flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition hover:bg-muted"
          >
            <Plus size={18} />
            {action}
          </button>
        ))}

      </div>

    </div>
  );
}