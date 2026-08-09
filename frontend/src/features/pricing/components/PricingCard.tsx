import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

import PricingFeature from "./PricingFeature";

import type { Plan } from "@/types/plan";
import { useAuth } from "@/context/AuthContext";

interface Props {
  plan: Plan;
}

export default function PricingCard({
  plan,
}: Props) {
  const { user } = useAuth();

  const isTrial = plan.billing_cycle === "trial";
  const isMonthly = plan.billing_cycle === "monthly";
  const isYearly = plan.billing_cycle === "yearly";

  const trialAlreadyUsed = Boolean(user?.trial_used);

  const features = [
    "Professional Portfolio",
    "Unlimited Projects",
    "Unlimited Updates",
    "Custom Public URL",
    "Responsive Design",
  ];

  const checkoutUrl =
    isTrial && trialAlreadyUsed
      ? "/pricing"
      : `/checkout/${plan.slug}`;

  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-card p-8 transition-all duration-300

      ${
        isYearly
          ? "scale-[1.04] border-2 border-emerald-500 shadow-2xl"
          : "border shadow-md"
      }

      hover:-translate-y-2`}
    >
      {isYearly && (
        <div className="absolute right-6 top-6 rounded-full bg-emerald-500 px-4 py-2 text-xs font-bold text-white shadow-lg">
          ⭐ BEST VALUE
        </div>
      )}

      <div className="mb-8 flex items-center gap-4">
        <div className="rounded-2xl bg-emerald-100 p-4">
          <Sparkles
            size={24}
            className="text-emerald-600"
          />
        </div>

        <div>
          <h3 className="text-3xl font-black">
            {plan.name}
          </h3>

          <p className="text-muted-foreground">
            {plan.description}
          </p>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-end gap-2">
          <span className="text-6xl font-black">
            {plan.price}
          </span>

          {!isTrial && (
            <span className="pb-2 text-lg text-muted-foreground">
              DA
            </span>
          )}
        </div>

        <p className="mt-3 text-muted-foreground">
          {isTrial &&
            `${plan.trial_days} Days Free Trial`}

          {isMonthly && "Per Month"}

          {isYearly && "Per Year"}
        </p>

        {isYearly && (
          <div className="mt-5">
            <div className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
              💰 Save 1000 DA
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
              Pay for <strong>10 months</strong> and enjoy
              <strong> 12 months</strong>.
            </p>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {features.map((feature) => (
          <PricingFeature
            key={feature}
            label={feature}
          />
        ))}
      </div>

      <Link
        to={checkoutUrl}
        className={`mt-10 block rounded-2xl py-4 text-center text-lg font-bold transition

        ${
          isYearly
            ? "bg-emerald-500 text-white hover:bg-emerald-600"
            : isMonthly
            ? "bg-black text-white hover:bg-neutral-800"
            : trialAlreadyUsed
            ? "cursor-not-allowed bg-slate-200 text-slate-500"
            : "border hover:bg-muted"
        }`}
      >
        {isTrial
          ? trialAlreadyUsed
            ? "Trial Already Used"
            : "Start Free Trial"
          : "Choose Plan"}
      </Link>
    </div>
  );
}
