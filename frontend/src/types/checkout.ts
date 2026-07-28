export interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  available: boolean;
}

export interface CheckoutSummary {
  planId: number;
  planName: string;
  slug: string;
  price: number;
  billingCycle: string;
  trialDays: number;
}

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: "trial",
    name: "Free Trial",
    description: "Activate your free 10-day trial instantly.",
    available: true,
  },

  {
    id: "baridimob",
    name: "BaridiMob",
    description: "Coming Soon",
    available: false,
  },

  {
    id: "cib",
    name: "CIB Card",
    description: "Coming Soon",
    available: false,
  },

  {
    id: "manual",
    name: "Manual Payment",
    description: "Bank / CCP transfer with manual verification.",
    available: true,
  },
];