import { api } from "@/lib/api";

import type {
  CheckoutSummary,
} from "@/types/checkout";

import type {
  PlansResponse,
} from "@/types/plan";

export async function getCheckoutPlan(
  slug: string
): Promise<CheckoutSummary> {
  const response =
    await api.get<PlansResponse>("/plans");

  const plan = response.data.data.find(
    (item) => item.slug === slug
  );

  if (!plan) {
    throw new Error("Plan not found");
  }

  return {
    planId: plan.id,
    planName: plan.name,
    slug: plan.slug,
    price: plan.price,
    billingCycle: plan.billing_cycle,
    trialDays: plan.trial_days,
  };
}

export async function createSubscription(
  planSlug: string,
  paymentMethod: string
) {
  const response = await api.post(
    "/subscriptions",
    {
      plan_slug: planSlug,
      payment_method: paymentMethod,
    }
  );

  return response.data;
}