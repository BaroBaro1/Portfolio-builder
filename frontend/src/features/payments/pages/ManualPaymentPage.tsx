import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import BankAccountCard from "../components/BankAccountCard";
import PaymentInstructions from "../components/PaymentInstructions";
import ReceiptUploader from "../components/ReceiptUploader";

import { useManualPayment } from "../hooks/useManualPayment";

export default function ManualPaymentPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const plan = searchParams.get("plan") ?? "";

  const { submit, loading } = useManualPayment();

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
    }catch (error: any) {
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

          <BankAccountCard />

          <PaymentInstructions />

        </div>

        <div className="space-y-8">

          <ReceiptUploader
            file={receipt}
            onChange={setReceipt}
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full rounded-2xl bg-emerald-500 py-4 text-lg font-bold text-white transition hover:bg-emerald-600 disabled:opacity-50"
          >
            {loading
              ? "Submitting..."
              : "Submit Payment"}
          </button>

        </div>

      </div>

    </main>
  );
}