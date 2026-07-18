import SettingsHeader from "../components/SettingsHeader";
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

    return (
      <div className="p-10 text-center">
        Loading settings...
      </div>
    );

  }

  if (error) {

    return (
      <div className="p-10 text-red-500">
        {error}
      </div>
    );

  }

  if (!settings) {

    return (
      <div className="p-10 text-center">
        No settings found.
      </div>
    );

  }

  const enabledSections = [
    settings.show_projects,
    settings.show_skills,
    settings.show_experiences,
    settings.show_certificates,
  ].filter(Boolean).length;

  return (

    <div className="space-y-8">

      <SettingsHeader
        total={enabledSections}
      />

      <SettingsForm
        settings={settings}
        onSave={saveSettings}
      />

    </div>

  );

}