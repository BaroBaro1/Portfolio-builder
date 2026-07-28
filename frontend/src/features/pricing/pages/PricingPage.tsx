import { useMemo } from "react";

import PricingHeader from "../components/PricingHeader";
import PricingCard from "../components/PricingCard";

import { usePlans } from "../hooks/usePlans";
import { Link } from "lucide-react";

export default function PricingPage() {
  const {
    plans,
    loading,
    error,
  } = usePlans();

  const displayedPlans = useMemo(() => {
    return plans.filter((plan) =>
      ["trial", "monthly", "yearly"].includes(
        plan.billing_cycle
      )
    );
  }, [plans]);

  if (loading) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-center text-muted-foreground">
          Loading plans...
        </p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-center text-red-500">
          {error}
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl space-y-24 px-6 py-24">

      <PricingHeader />

      {/* Pricing Cards */}

      <section className="grid gap-8 lg:grid-cols-3">

        {displayedPlans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
          />
        ))}

      </section>

      {/* Comparison */}

      <section className="rounded-3xl border bg-card p-10">

        <h2 className="mb-10 text-center text-3xl font-bold">
          Compare Plans
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full border-collapse">

            <thead>

              <tr className="border-b">

                <th className="py-5 text-left">
                  Feature
                </th>

                {displayedPlans.map((plan) => (
                  <th
                    key={plan.id}
                    className="py-5 text-center"
                  >
                    {plan.name}
                  </th>
                ))}

              </tr>

            </thead>

            <tbody>

              {[
                "Professional Portfolio",
                "Unlimited Projects",
                "Unlimited Updates",
                "Custom Public URL",
                "Responsive Design",
              ].map((feature) => (

                <tr
                  key={feature}
                  className="border-b last:border-none"
                >

                  <td className="py-5 font-medium">
                    {feature}
                  </td>

                  {displayedPlans.map((plan) => (
                    <td
                      key={plan.id}
                      className="py-5 text-center"
                    >
                      ✅
                    </td>
                  ))}

                </tr>

              ))}

              <tr className="border-b">

                <td className="py-5 font-medium">
                  Trial
                </td>

                <td className="py-5 text-center">
                  10 Days
                </td>

                <td className="py-5 text-center">
                  —
                </td>

                <td className="py-5 text-center">
                  —
                </td>

              </tr>

              <tr className="border-b">

                <td className="py-5 font-medium">
                  Savings
                </td>

                <td className="py-5 text-center">
                  —
                </td>

                <td className="py-5 text-center">
                  —
                </td>

                <td className="py-5 text-center font-bold text-emerald-600">
                  Save 3000 DA
                </td>

              </tr>

              <tr>

                <td className="py-5 font-medium">
                  Bonus
                </td>

                <td className="py-5 text-center">
                  —
                </td>

                <td className="py-5 text-center">
                  —
                </td>

                <td className="py-5 text-center font-bold text-emerald-600">
                  🎁 2 Months Free
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* CTA */}

      <section className="rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-10 py-16 text-center text-white">

        <h2 className="text-4xl font-black">
          Ready to build your professional identity?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-emerald-100">
          Start with a free 10-day trial.
          Upgrade whenever you're ready.
        </p>

        <Link
    to="/register"

          className="mt-10 inline-flex rounded-2xl bg-white px-8 py-4 text-lg font-bold text-emerald-600 transition hover:scale-105"
        >
          Start Free Trial
        </Link>

      </section>

    </main>
  );
}