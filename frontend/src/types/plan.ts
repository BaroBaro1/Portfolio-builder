export interface Plan {
  id: number;

  name: string;

  slug: string;

  price: number;

  billing_cycle: "trial" | "monthly" | "yearly";

  trial_days: number;

  description: string;

  is_active: boolean;
}

export interface PlansResponse {
  data: Plan[];
}