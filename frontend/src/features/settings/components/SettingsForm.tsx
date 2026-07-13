import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import type {
  Settings,
  UpdateSettingsPayload,
} from "@/types/settings";

interface Props {
  settings: Settings;
  onSave: (payload: UpdateSettingsPayload) => Promise<void>;
}

export default function SettingsForm({
  settings,
  onSave,
}: Props) {
  const [form, setForm] =
    useState<UpdateSettingsPayload>(settings);

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

    await onSave(form);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="space-y-2">
        <label className="font-medium">
          Accent Color
        </label>

        <input
          className="w-full rounded-md border p-2"
          value={form.accent_color}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement>
          ) =>
            update("accent_color", e.target.value)
          }
        />
      </div>

      <div className="space-y-2">
        <label className="font-medium">
          Language
        </label>

        <input
          className="w-full rounded-md border p-2"
          value={form.language}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement>
          ) =>
            update("language", e.target.value)
          }
        />
      </div>

      <div className="flex items-center justify-between">
        <label>Dark Mode</label>

        <input
          type="checkbox"
          checked={form.dark_mode}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement>
          ) =>
            update("dark_mode", e.target.checked)
          }
        />
      </div>

      <div className="flex items-center justify-between">
        <label>Show Projects</label>

        <input
          type="checkbox"
          checked={form.show_projects}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement>
          ) =>
            update(
              "show_projects",
              e.target.checked
            )
          }
        />
      </div>

      <div className="flex items-center justify-between">
        <label>Show Skills</label>

        <input
          type="checkbox"
          checked={form.show_skills}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement>
          ) =>
            update(
              "show_skills",
              e.target.checked
            )
          }
        />
      </div>

      <div className="flex items-center justify-between">
        <label>Show Experiences</label>

        <input
          type="checkbox"
          checked={form.show_experiences}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement>
          ) =>
            update(
              "show_experiences",
              e.target.checked
            )
          }
        />
      </div>

      <div className="flex items-center justify-between">
        <label>Show Certificates</label>

        <input
          type="checkbox"
          checked={form.show_certificates}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement>
          ) =>
            update(
              "show_certificates",
              e.target.checked
            )
          }
        />
      </div>

      <Button type="submit">
        Save Settings
      </Button>
    </form>
  );
}