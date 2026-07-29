import { Clock3, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function PendingSubscriptionPage() {
  return (
    <main className="mx-auto flex min-h-[80vh] max-w-4xl items-center justify-center px-6 py-24">

      <div className="w-full rounded-3xl border bg-card p-12 shadow-lg">

        <div className="flex justify-center">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-yellow-100">

            <Clock3 className="h-12 w-12 text-yellow-600" />

          </div>

        </div>

        <h1 className="mt-8 text-center text-4xl font-black">
          Payment Under Review
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-muted-foreground">
          Your payment receipt has been submitted successfully.
        </p>

        <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
          Our administrator will review your payment within 24 hours.
          Once approved, your subscription will automatically become active.
        </p>

        <div className="mt-10 rounded-2xl border bg-muted/40 p-6">

          <div className="flex items-center justify-between">

            <span className="font-semibold">
              Subscription Status
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-bold text-yellow-700">

              <Clock3 className="h-4 w-4" />

              Pending Review

            </span>

          </div>

        </div>

        <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">

          <div className="flex gap-4">

            <CheckCircle2 className="mt-1 h-6 w-6 text-emerald-600" />

            <div>

              <h2 className="font-bold text-emerald-700">
                What happens next?
              </h2>

              <ul className="mt-3 space-y-2 text-sm text-emerald-700">

                <li>• Your receipt is reviewed by our team.</li>

                <li>• Your subscription is activated after approval.</li>

                <li>• Premium features become available immediately.</li>

              </ul>

            </div>

          </div>

        </div>

        <div className="mt-10 flex justify-center">

          <Link
            to="/"
            className="rounded-2xl bg-emerald-500 px-8 py-4 text-lg font-bold text-white transition hover:bg-emerald-600"
          >
            Return Home
          </Link>

        </div>

      </div>

    </main>
  );
}