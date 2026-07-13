import { useEffect, useState } from "react";

import {
  getSettings,
  updateSettings,
} from "../services/settingsService";

import type {
  Settings,
  UpdateSettingsPayload,
} from "@/types/settings";

export function useSettings() {
  const [settings, setSettings] = useState<Settings | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  async function loadSettings() {
    try {
      setLoading(true);

      const data = await getSettings();

      setSettings(data);
    } catch {
      setError("Failed to load settings");
    } finally {
      setLoading(false);
    }
  }

  async function saveSettings(
    payload: UpdateSettingsPayload
  ) {
    const data = await updateSettings(payload);

    setSettings(data);
  }

  useEffect(() => {
    loadSettings();
  }, []);

  return {
    settings,
    loading,
    error,
    reload: loadSettings,
    saveSettings,
  };
}