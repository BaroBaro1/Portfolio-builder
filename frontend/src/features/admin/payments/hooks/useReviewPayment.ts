import { useState } from "react";

import { reviewPayment } from "../services/reviewPaymentService";

export function useReviewPayment() {
  const [loading, setLoading] = useState(false);

  async function submit(
    paymentId: number,
    status: "approved" | "rejected",
    notes?: string
  ) {
    try {
      setLoading(true);

      return await reviewPayment(
        paymentId,
        status,
        notes
      );
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    submit,
  };
}