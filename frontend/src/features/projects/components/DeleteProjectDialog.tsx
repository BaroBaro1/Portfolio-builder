import {
  AlertTriangle,
  Trash2,
  X,
} from "lucide-react";

type Props = {
  open: boolean;
  loading: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function DeleteProjectDialog({
  open,
  loading,
  onClose,
  onConfirm,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-6 backdrop-blur-sm">

      <div className="w-full max-w-md rounded-3xl border border-border bg-card shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-border p-6">

          <div className="flex items-center gap-3">

            <div className="rounded-2xl bg-red-500/10 p-3 text-red-500">

              <AlertTriangle size={24} />

            </div>

            <div>

              <h2 className="text-xl font-bold">
                Delete Project
              </h2>

              <p className="text-sm text-muted-foreground">
                This action cannot be undone.
              </p>

            </div>

          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 transition hover:bg-muted"
          >
            <X size={20} />
          </button>

        </div>

        {/* Body */}

        <div className="space-y-4 p-6">

          <p className="leading-7 text-muted-foreground">

            Are you sure you want to permanently delete this
            project?

          </p>

          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-4">

            <p className="text-sm text-red-600 dark:text-red-400">

              Deleting this project will remove its image,
              information and links permanently.

            </p>

          </div>

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-3 border-t border-border bg-card p-6">

          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-xl border border-border px-5 py-3 font-medium transition hover:bg-muted disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
          >
            <Trash2 size={18} />

            {loading
              ? "Deleting..."
              : "Delete Project"}

          </button>

        </div>

      </div>

    </div>
  );
}