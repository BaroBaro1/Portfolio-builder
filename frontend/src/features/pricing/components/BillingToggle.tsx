interface Props {
  yearly: boolean;
  onChange: (value: boolean) => void;
}

export default function BillingToggle({
  yearly,
  onChange,
}: Props) {
  return (
    <div className="flex items-center justify-center gap-5">

      <span
        className={
          !yearly
            ? "font-semibold"
            : "text-muted-foreground"
        }
      >
        Monthly
      </span>

      <button
        onClick={() => onChange(!yearly)}
        className={`relative h-7 w-14 rounded-full transition ${
          yearly
            ? "bg-emerald-500"
            : "bg-slate-300 dark:bg-slate-700"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
            yearly
              ? "left-8"
              : "left-1"
          }`}
        />
      </button>

      <div className="flex items-center gap-2">

        <span
          className={
            yearly
              ? "font-semibold"
              : "text-muted-foreground"
          }
        >
          Yearly
        </span>

        <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-600 dark:bg-emerald-900/40">
          Save 3000 DA
        </span>

      </div>

    </div>
  );
}