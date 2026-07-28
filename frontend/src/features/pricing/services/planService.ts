import { api } from "@/lib/api";

import type { PlansResponse } from "@/types/plan";

export async function getPlans() {
  const response = await api.get<PlansResponse>(
    "/plans"
  );

  return response.data.data;
}