import SettingsForm from "../components/SettingsForm";

import { useSettings } from "../hooks/useSettings";

export default function SettingsPage() {
  const {
    settings,
    loading,
    error,
    saveSettings,
  } = useSettings();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!settings) {
    return <p>No settings found.</p>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="text-muted-foreground">
          Customize your portfolio.
        </p>
      </div>

      <SettingsForm
        settings={settings}
        onSave={saveSettings}
      />
    </div>
  );
}