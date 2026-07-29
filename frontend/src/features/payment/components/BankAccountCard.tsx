import { Copy, Landmark } from "lucide-react";

export default function BankAccountCard() {
  const account = {
    bank: "Banque Nationale d'Algérie (BNA)",
    holder: "Bahri Baraa",
    rib: "007999990000000000000000",
    iban: "DZ75007999990000000000000000",
    ccp: "00000000000000",
  };

  function copy(value: string) {
    navigator.clipboard.writeText(value);
    alert("Copied");
  }

  return (
    <section className="rounded-3xl border bg-card p-8 shadow-sm">

      <div className="mb-8 flex items-center gap-4">

        <div className="rounded-2xl bg-emerald-100 p-4">

          <Landmark
            size={26}
            className="text-emerald-600"
          />

        </div>

        <div>

          <h2 className="text-2xl font-black">
            Bank Transfer
          </h2>

          <p className="text-muted-foreground">
            Transfer the subscription amount using the information below.
          </p>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <Field
          label="Bank"
          value={account.bank}
        />

        <Field
          label="Account Holder"
          value={account.holder}
        />

        <Field
          label="CCP"
          value={account.ccp}
          copy
        />

        <Field
          label="RIB"
          value={account.rib}
          copy
        />

      </div>

      <div className="mt-6">

        <Field
          label="IBAN"
          value={account.iban}
          copy
        />

      </div>

    </section>
  );

  function Field({
    label,
    value,
    copy: canCopy = false,
  }: {
    label: string;
    value: string;
    copy?: boolean;
  }) {
    return (
      <div>

        <label className="mb-2 block text-sm font-semibold text-muted-foreground">
          {label}
        </label>

        <div className="flex items-center justify-between rounded-2xl border bg-background px-4 py-4">

          <span className="break-all font-medium">
            {value}
          </span>

          {canCopy && (
            <button
              type="button"
              onClick={() => copy(value)}
              className="ml-4 rounded-xl p-2 transition hover:bg-muted"
            >
              <Copy size={18} />
            </button>
          )}

        </div>

      </div>
    );
  }
}