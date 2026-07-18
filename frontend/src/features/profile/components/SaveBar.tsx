
type Props = {
  visible: boolean;
  loading: boolean;
  onSave: () => void;
};

export default function SaveBar({
  visible,
  loading,
  onSave,
}: Props) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">

      <div className="flex items-center gap-5 rounded-2xl border bg-card px-6 py-4 shadow-2xl">

        <p className="text-sm font-medium">
          You have unsaved changes.
        </p>

        <button
          onClick={onSave}
          disabled={loading}
          className="rounded-xl bg-emerald-600 px-5 py-2 font-semibold text-white hover:bg-emerald-700 disabled:opacity-60"
        >
          {loading ? "Saving..." : "Save"}
        </button>

      </div>

    </div>
  );
}
