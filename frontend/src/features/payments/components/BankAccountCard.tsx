import { Copy } from "lucide-react";

import type { PlatformPaymentSettings } from "../services/paymentService";

type Props = {
  settings: PlatformPaymentSettings;
};

export default function BankAccountCard({
  settings,
}: Props) {
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
            {settings.bank_name}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Account Owner
          </p>

          <p className="font-semibold">
            {settings.account_owner}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            CCP
          </p>

          <div className="mt-2 flex items-center justify-between rounded-xl bg-muted px-4 py-3">

            <span className="font-mono">
              {settings.ccp}
            </span>

            <button
              type="button"
              onClick={() => copy(settings.ccp)}
              className="rounded-md p-2 transition hover:bg-background"
            >
              <Copy size={18} />
            </button>

          </div>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            RIP
          </p>

          <div className="mt-2 flex items-center justify-between rounded-xl bg-muted px-4 py-3">

            <span className="font-mono">
              {settings.rip}
            </span>

            <button
              type="button"
              onClick={() => copy(settings.rip)}
              className="rounded-md p-2 transition hover:bg-background"
            >
              <Copy size={18} />
            </button>

          </div>
        </div>

        {settings.iban && (
          <div>
            <p className="text-sm text-muted-foreground">
              IBAN
            </p>

            <div className="mt-2 flex items-center justify-between rounded-xl bg-muted px-4 py-3">

              <span className="font-mono">
                {settings.iban}
              </span>

              <button
                type="button"
                onClick={() =>
                  copy(settings.iban as string)
                }
                className="rounded-md p-2 transition hover:bg-background"
              >
                <Copy size={18} />
              </button>

            </div>
          </div>
        )}

        {settings.swift && (
          <div>
            <p className="text-sm text-muted-foreground">
              SWIFT
            </p>

            <p className="font-semibold">
              {settings.swift}
            </p>
          </div>
        )}

      </div>

    </div>
  );
}