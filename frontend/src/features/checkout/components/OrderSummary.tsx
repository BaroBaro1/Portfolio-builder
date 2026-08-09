import type { CheckoutSummary } from "@/types/checkout";

interface Props {
  plan: CheckoutSummary;
}

export default function OrderSummary({
  plan,
}: Props) {
  const isTrial =
    plan.billingCycle === "trial";

  const isYearly =
    plan.billingCycle === "yearly";

  return (
    <section className="rounded-3xl border bg-card p-8">

      <h2 className="mb-8 text-2xl font-bold">
        Order Summary
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between">

          <span className="text-muted-foreground">
            Plan
          </span>

          <span className="font-semibold">
            {plan.planName}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-muted-foreground">
            Billing
          </span>

          <span className="capitalize">
            {plan.billingCycle}
          </span>

        </div>

        {isTrial ? (

          <div className="flex justify-between">

            <span className="text-muted-foreground">
              Trial
            </span>

            <span>
              {plan.trialDays} Days
            </span>

          </div>

        ) : (

          <div className="flex justify-between">

            <span className="text-muted-foreground">
              Price
            </span>

            <span>
              {plan.price} DA
            </span>

          </div>

        )}

        {isYearly && (

          <div className="flex justify-between text-emerald-600">

            <span>
              Discount
            </span>

            <span>
              -1000 DA
            </span>

          </div>

        )}

        <hr />

        <div className="flex justify-between text-xl font-bold">

          <span>
            Total
          </span>

          <span>

            {isTrial
              ? "Free"
              : `${plan.price} DA`}

          </span>

        </div>

      </div>

    </section>
  );
}
