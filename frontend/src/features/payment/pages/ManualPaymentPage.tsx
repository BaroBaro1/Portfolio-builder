import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import BankAccountCard from "../components/BankAccountCard";
import ReceiptUploader from "../components/ReceiptUploader";

import { useCheckout } from "@/features/checkout/hooks/useCheckout";
import { uploadManualReceipt } from "../services/paymentService";

export default function ManualPaymentPage() {
  const navigate = useNavigate();

  const { slug = "" } = useParams();

  const { plan, loading } = useCheckout(slug);

  const [receipt, setReceipt] = useState<File | null>(null);

  const [reference, setReference] = useState("");

  const [sending, setSending] = useState(false);

  async function handleSubmit() {
    if (!receipt) {
      alert("Please upload your payment receipt.");
      return;
    }

    try {
      setSending(true);

      await uploadManualReceipt({
        plan_slug: slug,
        receipt,
        reference,
      });

      navigate("/subscription/pending");
    } catch (e) {
      console.error(e);
      alert("Unable to upload receipt.");
    } finally {
      setSending(false);
    }
  }

  if (loading || !plan) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-24">
        Loading...
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl space-y-8 px-6 py-20">

      <div>

        <h1 className="text-5xl font-black">
          Manual Payment
        </h1>

        <p className="mt-3 text-muted-foreground">
          Transfer the amount then upload your payment receipt.
        </p>

      </div>

      <BankAccountCard />

      <section className="rounded-3xl border bg-card p-8">

        <h2 className="mb-6 text-2xl font-bold">
          Payment Information
        </h2>

        <div className="space-y-6">

          <div>

            <label className="mb-2 block font-medium">
              Transfer Reference (optional)
            </label>

            <input
              value={reference}
              onChange={(e) =>
                setReference(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Example: CCP 548921"
            />

          </div>

          <ReceiptUploader
            value={receipt}
            onChange={setReceipt}
          />

        </div>

      </section>

      <button
        onClick={handleSubmit}
        disabled={sending}
        className="w-full rounded-2xl bg-emerald-500 py-4 text-lg font-bold text-white hover:bg-emerald-600"
      >
        {sending
          ? "Uploading..."
          : "Submit Payment"}
      </button>

    </main>
  );
}