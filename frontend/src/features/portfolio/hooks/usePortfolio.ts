import { useEffect, useState } from "react";

import { getPortfolio } from "../services/portfolioService";

import type { Portfolio } from "@/types/portfolio";

export function usePortfolio(slug: string) {
  const [portfolio, setPortfolio] =
    useState<Portfolio | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  async function loadPortfolio() {
    try {
      setLoading(true);

      const data = await getPortfolio(slug);

      setPortfolio(data);
    } catch {
      setError("Portfolio not found");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (slug) {
      loadPortfolio();
    }
  }, [slug]);

  return {
    portfolio,
    loading,
    error,
    reload: loadPortfolio,
  };
}