import { useEffect, useState } from "react";

import type {
  Settings,
  UpdateSettingsPayload,
} from "@/types/settings";

import AppearanceCard from "./AppearanceCard";
import SettingsSectionsCard from "./SettingsSectionsCard";

type Props = {
  settings: Settings;
  onSave: (
    payload: UpdateSettingsPayload
  ) => Promise<void>;
};

export default function SettingsForm({
  settings,
  onSave,
}: Props) {

  const [form, setForm] =
    useState<UpdateSettingsPayload>(settings);

  const [saving, setSaving] = useState(false);

  useEffect(() => {

    setForm(settings);

  }, [settings]);

  function update<K extends keyof UpdateSettingsPayload>(
    key: K,
    value: UpdateSettingsPayload[K]
  ) {

    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    try {

      setSaving(true);

      await onSave(form);

    } finally {

      setSaving(false);

    }

  }

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >

      <AppearanceCard
        form={form}
        update={update}
      />

      <SettingsSectionsCard
        form={form}
        update={update}
      />

      <div className="flex justify-end">

        <button
          type="submit"
          disabled={saving}
          className="rounded-2xl bg-emerald-600 px-8 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
        >

          {saving
            ? "Saving..."
            : "Save Changes"}

        </button>

      </div>

    </form>

  );

}