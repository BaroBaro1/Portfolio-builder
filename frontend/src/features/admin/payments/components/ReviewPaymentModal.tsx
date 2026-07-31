import { useState } from "react";

import { useReviewPayment } from "../hooks/useReviewPayment";

interface ReviewPaymentModalProps {
  open: boolean;

  payment: any;

  onClose: () => void;

  onSuccess?: () => void;
}

export default function ReviewPaymentModal({
  open,
  payment,
  onClose,
  onSuccess,
}: ReviewPaymentModalProps) {
  const { submit, loading } = useReviewPayment();

  const [notes, setNotes] = useState("");

  if (!open || !payment) return null;

  async function handleReview(
    status: "approved" | "rejected"
  ) {
    try {
      await submit(
        payment.id,
        status,
        notes
      );

      onSuccess?.();

      onClose();

    } catch (error) {
      console.error(error);

      alert("Unable to review payment.");
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

      <div className="w-full max-w-3xl rounded-3xl bg-white p-8 shadow-2xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-black">

              Review Payment

            </h2>

            <p className="text-gray-500">

              Verify the uploaded receipt.

            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-xl border px-4 py-2"
          >
            Close
          </button>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          <div>

            <img
              src={payment.receipt}
              alt="Receipt"
              className="w-full rounded-2xl border object-cover"
            />

          </div>

          <div className="space-y-5">

            <div>

              <p className="text-sm text-gray-500">

                User

              </p>

              <p className="font-bold">
  {payment.user.name}
</p>

            </div>

            <div>

              <p className="text-sm text-gray-500">

                Email

              </p>

              <p className="font-medium">

                {payment.user.email}

              </p>

            </div>

            <div>

              <p className="text-sm text-gray-500">

                Plan

              </p>

              <p className="font-bold">

                {payment.plan.name}

              </p>

            </div>

            <div>

              <label className="mb-2 block font-semibold">

                Notes

              </label>

              <textarea
                rows={4}
                value={notes}
                onChange={(e) =>
                  setNotes(e.target.value)
                }
                className="w-full rounded-xl border p-3"
              />

            </div>

            <div className="flex gap-4">

              <button
                disabled={loading}
                onClick={() =>
                  handleReview("approved")
                }
                className="flex-1 rounded-xl bg-emerald-500 py-3 font-bold text-white hover:bg-emerald-600"
              >
                Approve
              </button>

              <button
                disabled={loading}
                onClick={() =>
                  handleReview("rejected")
                }
                className="flex-1 rounded-xl bg-red-500 py-3 font-bold text-white hover:bg-red-600"
              >
                Reject
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}