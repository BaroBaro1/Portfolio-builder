import { useEffect, useState } from "react";

import { getPlans } from "../services/planService";

import type { Plan } from "@/types/plan";

export function usePlans() {
  const [plans, setPlans] =
    useState<Plan[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  async function loadPlans() {
    try {
      setLoading(true);

      const data =
        await getPlans();

      setPlans(data);
    } catch {
      setError(
        "Unable to load plans."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPlans();
  }, []);

  return {
    plans,
    loading,
    error,
    reload: loadPlans,
  };
}