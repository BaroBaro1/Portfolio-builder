import { useEffect, useState } from "react";

import { getPayments } from "../services/paymentAdminService";

export function usePayments() {
  const [payments, setPayments] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const data = await getPayments();

      setPayments(data);
    } finally {
      setLoading(false);
    }
  }

  return {
    payments,
    loading,
    refresh: load,
  };
}