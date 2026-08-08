import { useEffect, useState } from "react";

import {
  getPlatformSettings,
  updatePlatformSettings,
} from "../services/platformSettingsService";

type PlatformSettings = {
  id: number;
  bank_name: string;
  account_owner: string;
  ccp: string;
  rip: string;
  iban: string | null;
  swift: string | null;
  payment_instructions: string | null;
};

export function usePlatformSettings() {
  const [settings, setSettings] =
    useState<PlatformSettings | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  async function fetchSettings() {
    try {
      setLoading(true);
      setError(null);

      const data = await getPlatformSettings();

      setSettings(data);
    } catch (error) {
      console.error(
        "Failed to load platform settings:",
        error
      );

      setError(
        "Failed to load platform settings."
      );
    } finally {
      setLoading(false);
    }
  }

  async function saveSettings(
    payload: {
      bank_name: string;
      account_owner: string;
      ccp: string;
      rip: string;
      iban: string | null;
      swift: string | null;
      payment_instructions: string | null;
    }
  ) {
    try {
      setSaving(true);
      setError(null);

      const data =
        await updatePlatformSettings(payload);

      setSettings(data);

      return data;
    } catch (error) {
      console.error(
        "Failed to update platform settings:",
        error
      );

      setError(
        "Failed to update platform settings."
      );

      throw error;
    } finally {
      setSaving(false);
    }
  }

  useEffect(() => {
    fetchSettings();
  }, []);

  return {
    settings,
    loading,
    saving,
    error,
    fetchSettings,
    saveSettings,
  };
}