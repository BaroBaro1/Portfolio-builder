import { useEffect, useState } from "react";

import { getPlatformPaymentSettings } from "../services/paymentService";
import type { PlatformPaymentSettings } from "../services/paymentService";

export function usePlatformPaymentSettings() {
  const [settings, setSettings] =
    useState<PlatformPaymentSettings | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<unknown>(null);

  useEffect(() => {
    async function loadSettings() {
      try {
        setLoading(true);
        setError(null);

        const data =
          await getPlatformPaymentSettings();

        setSettings(data);
      } catch (err) {
        console.error(
          "Failed to load platform payment settings:",
          err
        );

        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadSettings();
  }, []);

  return {
    settings,
    loading,
    error,
  };
}