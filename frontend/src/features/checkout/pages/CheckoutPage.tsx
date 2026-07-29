import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CheckoutSummary from "../components/CheckoutSummary";
import OrderSummary from "../components/OrderSummary";
import PaymentMethodCard from "../components/PaymentMethodCard";

import { useCheckout } from "../hooks/useCheckout";
import { createSubscription } from "../services/checkoutService";

import { PAYMENT_METHODS } from "@/types/checkout";

export default function CheckoutPage() {
  const navigate = useNavigate();

  const { slug = "" } = useParams();

  const {
    plan,
    loading,
    error,
  } = useCheckout(slug);

  const [selectedMethod, setSelectedMethod] =
    useState("trial");

  const [processing, setProcessing] =
    useState(false);

  async function handleCheckout() {
    if (!plan) return;

    try {
      setProcessing(true);

      /*
      |--------------------------------------------------------------------------
      | Free Trial
      |--------------------------------------------------------------------------
      */

      if (selectedMethod === "trial") {
        await createSubscription(
          plan.slug,
          "trial"
        );

        navigate("/studio");

        return;
      }

      /*
      |--------------------------------------------------------------------------
      | Manual Payment
      |--------------------------------------------------------------------------
      */

      if (selectedMethod === "manual") {
        navigate(
          `/payment/manual?plan=${plan.slug}`
        );

        return;
      }

      /*
      |--------------------------------------------------------------------------
      | Online Payments
      |--------------------------------------------------------------------------
      */

      alert(
        "This payment method will be available soon."
      );
    } catch (error) {
      console.error(error);

      alert("Unable to continue.");
    } finally {
      setProcessing(false);
    }
  }

  if (loading) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-center text-muted-foreground">
          Loading checkout...
        </p>
      </main>
    );
  }

  if (error || !plan) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-center text-red-500">
          {error || "Plan not found"}
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-24">

      <div className="mb-14 text-center">

        <h1 className="text-5xl font-black">
          Checkout
        </h1>

        <p className="mt-5 text-lg text-muted-foreground">
          Complete your subscription securely.
        </p>

      </div>

      <div className="grid gap-10 lg:grid-cols-3">

        <div className="space-y-8 lg:col-span-2">

          <CheckoutSummary plan={plan} />

          <section className="rounded-3xl border bg-card p-8">

            <h2 className="mb-8 text-2xl font-bold">
              Payment Method
            </h2>

            <div className="space-y-4">

              {PAYMENT_METHODS.map((method) => (
                <PaymentMethodCard
                  key={method.id}
                  method={method}
                  selected={selectedMethod}
                  onSelect={setSelectedMethod}
                />
              ))}

            </div>

          </section>

        </div>

        <div className="space-y-8">

          <OrderSummary plan={plan} />

          <button
            onClick={handleCheckout}
            disabled={processing}
            className="w-full rounded-2xl bg-emerald-500 py-4 text-lg font-bold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {processing
              ? "Processing..."
              : plan.billingCycle === "trial"
              ? "Start Free Trial"
              : "Continue"}
          </button>

          <p className="text-center text-sm text-muted-foreground">
            Secure checkout powered by Portfoido.
          </p>

        </div>

      </div>

    </main>
  );
}