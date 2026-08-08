import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import BankAccountCard from "../components/BankAccountCard";
import PaymentInstructions from "../components/PaymentInstructions";
import ReceiptUploader from "../components/ReceiptUploader";

import { useManualPayment } from "../hooks/useManualPayment";
import { usePlatformPaymentSettings } from "../hooks/usePlatformPaymentSettings";

export default function ManualPaymentPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const plan = searchParams.get("plan") ?? "";

  const {
    submit,
    loading: paymentLoading,
  } = useManualPayment();

  const {
    settings,
    loading: settingsLoading,
    error: settingsError,
  } = usePlatformPaymentSettings();

  const [receipt, setReceipt] =
    useState<File | null>(null);

  async function handleSubmit() {
    if (!receipt) {
      alert("Please upload your payment receipt.");
      return;
    }

    const formData = new FormData();

    formData.append("plan_slug", plan);

    formData.append("receipt", receipt);

    try {
      await submit(formData);

      navigate("/subscription/pending");
    } catch (error: any) {
      console.error(error);

      console.log(error.response);

      console.log(error.response?.data);

      alert(
        error.response?.data?.message ??
        JSON.stringify(error.response?.data) ??
        "Unable to submit payment."
      );
    }
  }

  if (settingsLoading) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-24">

        <p className="text-center text-muted-foreground">
          Loading payment information...
        </p>

      </main>
    );
  }

  if (settingsError || !settings) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-24">

        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-red-600">

          Unable to load payment information.
          Please try again later.

        </div>

      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">

      <div className="mb-14 text-center">

        <h1 className="text-5xl font-black">
          Manual Payment
        </h1>

        <p className="mt-4 text-muted-foreground">
          Complete the bank transfer then upload your receipt.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <div className="space-y-8">

          <BankAccountCard
            settings={settings}
          />

          <PaymentInstructions
            instructions={
              settings.payment_instructions
            }
          />

        </div>

        <div className="space-y-8">

          <ReceiptUploader
            file={receipt}
            onChange={setReceipt}
          />

          <button
            type="button"
            onClick={handleSubmit}
            disabled={paymentLoading}
            className="w-full rounded-2xl bg-emerald-500 py-4 text-lg font-bold text-white transition hover:bg-emerald-600 disabled:opacity-50"
          >
            {paymentLoading
              ? "Submitting..."
              : "Submit Payment"}
          </button>

        </div>

      </div>

    </main>
  );
}