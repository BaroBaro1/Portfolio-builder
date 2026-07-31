import { useEffect, useState } from "react";

import { getDashboardStats } from "../services/adminService";

export function useDashboard() {
  const [stats, setStats] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const data = await getDashboardStats();

      setStats(data);
    } finally {
      setLoading(false);
    }
  }

  return {
    stats,
    loading,
    refresh: load,
  };
}