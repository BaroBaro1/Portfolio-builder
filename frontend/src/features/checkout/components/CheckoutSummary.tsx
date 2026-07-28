import type { CheckoutSummary as CheckoutSummaryType } from "@/types/checkout";

interface Props {
  plan: CheckoutSummaryType;
}

export default function CheckoutSummary({
  plan,
}: Props) {
  const isTrial =
    plan.billingCycle === "trial";

  const isYearly =
    plan.billingCycle === "yearly";

  return (
    <section className="rounded-3xl border bg-card p-8">

      <h2 className="mb-8 text-2xl font-bold">
        Subscription
      </h2>

      <div className="space-y-6">

        <div>

          <p className="text-sm text-muted-foreground">
            Selected Plan
          </p>

          <h3 className="mt-1 text-3xl font-black">
            {plan.planName}
          </h3>

        </div>

        <div>

          <p className="text-sm text-muted-foreground">
            Price
          </p>

          <p className="mt-1 text-5xl font-black">

            {plan.price}

            {!isTrial && (
              <span className="ml-2 text-xl font-medium">
                DA
              </span>
            )}

          </p>

        </div>

        <div>

          <p className="text-sm text-muted-foreground">
            Billing
          </p>

          <p className="mt-1 font-semibold capitalize">
            {plan.billingCycle}
          </p>

        </div>

        {isTrial && (
          <div className="rounded-2xl bg-emerald-50 p-5">

            <p className="font-semibold text-emerald-700">

              🎉 {plan.trialDays} Days Free Trial

            </p>

          </div>
        )}

        {isYearly && (
          <div className="rounded-2xl bg-emerald-50 p-5">

            <p className="font-semibold text-emerald-700">
              💰 Save 3000 DA
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              Pay for 10 months and enjoy 12 months.
            </p>

          </div>
        )}

      </div>

    </section>
  );
}