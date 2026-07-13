import { api } from "@/lib/api";

import type { PortfolioResponse } from "@/types/portfolio";

export async function getPortfolio(slug: string) {
  const response = await api.get<PortfolioResponse>(
    `/portfolio/${slug}`
  );

  return response.data.data;
}