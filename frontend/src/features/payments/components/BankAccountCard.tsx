import { Copy } from "lucide-react";

export default function BankAccountCard() {
  const account = {
    bank: "CPA Banque",
    owner: "Bahri Baraa",
    iban: "DZ00 0000 0000 0000 0000 0000",
  };

  function copy(text: string) {
    navigator.clipboard.writeText(text);
  }

  return (
    <div className="rounded-3xl border bg-card p-8">

      <h2 className="mb-6 text-2xl font-bold">
        Bank Transfer
      </h2>

      <div className="space-y-5">

        <div>
          <p className="text-sm text-muted-foreground">
            Bank
          </p>

          <p className="font-semibold">
            {account.bank}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Account Owner
          </p>

          <p className="font-semibold">
            {account.owner}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            IBAN
          </p>

          <div className="mt-2 flex items-center justify-between rounded-xl bg-muted px-4 py-3">

            <span className="font-mono">
              {account.iban}
            </span>

            <button
              onClick={() =>
                copy(account.iban)
              }
            >
              <Copy size={18} />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}