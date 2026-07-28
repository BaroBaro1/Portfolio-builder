import { useEffect, useState } from "react";

import { getCheckoutPlan } from "../services/checkoutService";

import type { CheckoutSummary } from "@/types/checkout";

export function useCheckout(slug: string) {
  const [plan, setPlan] =
    useState<CheckoutSummary | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await getCheckoutPlan(slug);
        setPlan(data);
      } catch {
        setError("Plan not found.");
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      load();
    }
  }, [slug]);

  return {
    plan,
    loading,
    error,
  };
}