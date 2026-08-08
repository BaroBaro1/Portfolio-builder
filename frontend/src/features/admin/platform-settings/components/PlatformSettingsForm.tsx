import { useEffect, useState } from "react";

type PlatformSettings = {
  id: number;
  bank_name: string;
  account_owner: string;
  ccp: string;
  rip: string;
  iban: string | null;
  swift: string | null;
  payment_instructions: string | null;
};

type Props = {
  settings: PlatformSettings;
  saving: boolean;
  onSave: (payload: {
    bank_name: string;
    account_owner: string;
    ccp: string;
    rip: string;
    iban: string | null;
    swift: string | null;
    payment_instructions: string | null;
  }) => Promise<void>;
};

export default function PlatformSettingsForm({
  settings,
  saving,
  onSave,
}: Props) {
  const [bankName, setBankName] = useState(
    settings.bank_name
  );

  const [accountOwner, setAccountOwner] =
    useState(settings.account_owner);

  const [ccp, setCcp] = useState(
    settings.ccp
  );

  const [rip, setRip] = useState(
    settings.rip
  );

  const [iban, setIban] = useState(
    settings.iban ?? ""
  );

  const [swift, setSwift] = useState(
    settings.swift ?? ""
  );

  const [paymentInstructions, setPaymentInstructions] =
    useState(
      settings.payment_instructions ?? ""
    );

  const [success, setSuccess] =
    useState(false);

  useEffect(() => {
    setBankName(settings.bank_name);
    setAccountOwner(settings.account_owner);
    setCcp(settings.ccp);
    setRip(settings.rip);
    setIban(settings.iban ?? "");
    setSwift(settings.swift ?? "");
    setPaymentInstructions(
      settings.payment_instructions ?? ""
    );
  }, [settings]);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSuccess(false);

    await onSave({
      bank_name: bankName,
      account_owner: accountOwner,
      ccp,
      rip,
      iban: iban || null,
      swift: swift || null,
      payment_instructions:
        paymentInstructions || null,
    });

    setSuccess(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Bank Name
          </label>

          <input
            type="text"
            value={bankName}
            onChange={(event) =>
              setBankName(event.target.value)
            }
            required
            className="w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Account Owner
          </label>

          <input
            type="text"
            value={accountOwner}
            onChange={(event) =>
              setAccountOwner(event.target.value)
            }
            required
            className="w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            CCP
          </label>

          <input
            type="text"
            value={ccp}
            onChange={(event) =>
              setCcp(event.target.value)
            }
            required
            className="w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            RIP
          </label>

          <input
            type="text"
            value={rip}
            onChange={(event) =>
              setRip(event.target.value)
            }
            required
            className="w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            IBAN
          </label>

          <input
            type="text"
            value={iban}
            onChange={(event) =>
              setIban(event.target.value)
            }
            className="w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            SWIFT
          </label>

          <input
            type="text"
            value={swift}
            onChange={(event) =>
              setSwift(event.target.value)
            }
            className="w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2"
          />
        </div>

      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Payment Instructions
        </label>

        <textarea
          value={paymentInstructions}
          onChange={(event) =>
            setPaymentInstructions(
              event.target.value
            )
          }
          rows={4}
          className="w-full resize-none rounded-xl border px-4 py-3 outline-none transition focus:ring-2"
        />
      </div>

      <div className="flex items-center justify-between gap-4">

        {success && (
          <p className="text-sm font-medium text-emerald-600">
            Settings updated successfully.
          </p>
        )}

        <button
          type="submit"
          disabled={saving}
          className="ml-auto rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {saving
            ? "Saving..."
            : "Save Changes"}
        </button>

      </div>
    </form>
  );
}