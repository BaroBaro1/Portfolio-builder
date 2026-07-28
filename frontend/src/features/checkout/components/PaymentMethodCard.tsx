import type { PaymentMethod } from "@/types/checkout";

interface Props {
  method: PaymentMethod;
  selected: string;
  onSelect: (id: string) => void;
}

export default function PaymentMethodCard({
  method,
  selected,
  onSelect,
}: Props) {
  return (
    <button
      type="button"
      onClick={() => method.available && onSelect(method.id)}
      disabled={!method.available}
      className={`w-full rounded-2xl border p-5 text-left transition-all

      ${
        selected === method.id
          ? "border-emerald-500 bg-emerald-50"
          : "border-border hover:border-emerald-300"
      }

      ${
        !method.available
          ? "cursor-not-allowed opacity-50"
          : ""
      }`}
    >
      <div className="flex items-center justify-between">

        <div>

          <h3 className="font-semibold">
            {method.name}
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            {method.description}
          </p>

        </div>

        <div
          className={`h-5 w-5 rounded-full border-2

          ${
            selected === method.id
              ? "border-emerald-500 bg-emerald-500"
              : "border-muted-foreground"
          }`}
        />

      </div>
    </button>
  );
}