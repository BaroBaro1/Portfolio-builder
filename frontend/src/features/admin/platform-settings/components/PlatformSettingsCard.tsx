import PlatformSettingsForm from "./PlatformSettingsForm";

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

type Props = {
  settings: PlatformSettings;
  saving: boolean;
  onSave: (payload: {
    bank_name: string;
    account_owner: string;
    ccp: string;
    rip: string;
    iban: string | null;
    swift: string | null;
    payment_instructions: string | null;
  }) => Promise<void>;
};

export default function PlatformSettingsCard({
  settings,
  saving,
  onSave,
}: Props) {
  return (
    <section className="mt-12 rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-8">

        <h2 className="text-3xl font-bold">
          Platform Settings
        </h2>

        <p className="mt-2 text-gray-500">
          Manage the bank account and payment information
          displayed to users.
        </p>

      </div>

      <PlatformSettingsForm
        settings={settings}
        saving={saving}
        onSave={onSave}
      />

    </section>
  );
}