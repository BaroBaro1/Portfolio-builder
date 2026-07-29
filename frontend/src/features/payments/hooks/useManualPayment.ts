import { useState } from "react";

import { uploadManualPayment } from "../services/paymentService";

export function useManualPayment() {
  const [loading, setLoading] = useState(false);

  async function submit(
    formData: FormData
  ) {
    try {
      setLoading(true);

      return await uploadManualPayment(
        formData
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