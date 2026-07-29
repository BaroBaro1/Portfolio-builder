import {
  X,
  CreditCard,
  Landmark,
  Smartphone,
} from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  onSelect: (method: string) => void;
}

export default function PaymentMethodModal({
  open,
  onClose,
  onSelect,
}: Props) {
  if (!open) return null;

  const methods = [
    {
      id: "manual",
      title: "Bank Transfer",
      description:
        "Upload your payment receipt for manual verification.",
      icon: Landmark,
      available: true,
    },

    {
      id: "baridimob",
      title: "BaridiMob",
      description: "Coming Soon",
      icon: Smartphone,
      available: false,
    },

    {
      id: "edahabia",
      title: "Edahabia",
      description: "Coming Soon",
      icon: CreditCard,
      available: false,
    },

    {
      id: "cib",
      title: "CIB Card",
      description: "Coming Soon",
      icon: CreditCard,
      available: false,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

      <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl dark:bg-neutral-900">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-black">
              Payment Method
            </h2>

            <p className="mt-2 text-muted-foreground">
              Choose how you want to pay.
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-muted"
          >
            <X size={22} />
          </button>

        </div>

        <div className="space-y-4">

          {methods.map((method) => {
            const Icon = method.icon;

            return (
              <button
                key={method.id}
                disabled={!method.available}
                onClick={() => {
                  if (!method.available) return;

                  onSelect(method.id);

                  onClose();
                }}
                className={`flex w-full items-center justify-between rounded-2xl border p-5 transition

                ${
                  method.available
                    ? "hover:border-emerald-500 hover:bg-emerald-50"
                    : "cursor-not-allowed opacity-50"
                }`}
              >
                <div className="flex items-center gap-4">

                  <div className="rounded-2xl bg-emerald-100 p-4">

                    <Icon
                      size={24}
                      className="text-emerald-600"
                    />

                  </div>

                  <div className="text-left">

                    <h3 className="font-bold">
                      {method.title}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {method.description}
                    </p>

                  </div>

                </div>

                {!method.available && (
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold">
                    Soon
                  </span>
                )}
              </button>
            );
          })}

        </div>

      </div>

    </div>
  );
}