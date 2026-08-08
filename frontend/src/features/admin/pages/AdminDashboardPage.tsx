import { useDashboard } from "../hooks/useDashboard";

import StatCard from "../components/StatCard";

import PaymentTable from "@/features/admin/payments/components/PaymentTable";
import { usePayments } from "@/features/admin/payments/hooks/usePayments";

import UserTable from "@/features/admin/users/components/UserTable";
import { useUsers } from "@/features/admin/users/hooks/useUsers";

import PlatformSettingsCard from "@/features/admin/platform-settings/components/PlatformSettingsCard";
import { usePlatformSettings } from "@/features/admin/platform-settings/hooks/usePlatformSettings";

export default function AdminDashboardPage() {
  const { stats, loading } = useDashboard();

  const {
    payments,
    loading: paymentsLoading,
  } = usePayments();

  const {
    users,
    loading: usersLoading,
  } = useUsers();

  const {
    settings,
    loading: settingsLoading,
    saving: settingsSaving,
    saveSettings,
  } = usePlatformSettings();

  if (loading) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-center text-muted-foreground">
          Loading dashboard...
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">

      {/* Header */}

      <div className="mb-12">

        <h1 className="text-5xl font-black">
          Admin Dashboard
        </h1>

        <p className="mt-3 text-muted-foreground">
          Overview of your platform.
        </p>

      </div>

      {/* Statistics */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        <StatCard
          title="Users"
          value={stats.totalUsers}
        />

        <StatCard
          title="Pending Payments"
          value={stats.pendingPayments}
        />

        <StatCard
          title="Active Subscriptions"
          value={stats.activeSubscriptions}
        />

        <StatCard
          title="Pending Subscriptions"
          value={stats.pendingSubscriptions}
        />

        <StatCard
          title="Trial Users"
          value={stats.trialUsers}
        />

        <StatCard
          title="Expired Subscriptions"
          value={stats.expiredSubscriptions}
        />

      </div>

      {/* Pending Payments */}

      <section className="mt-16">

        <div className="mb-6">

          <h2 className="text-3xl font-bold">
            Pending Payments
          </h2>

          <p className="text-muted-foreground">
            Review manual payment requests.
          </p>

        </div>

        {paymentsLoading ? (

          <p className="text-center">
            Loading payments...
          </p>

        ) : (

          <PaymentTable
            payments={payments}
          />

        )}

      </section>

      {/* Users */}

      <section className="mt-16">

        <div className="mb-6">

          <h2 className="text-3xl font-bold">
            Users
          </h2>

          <p className="text-muted-foreground">
            Manage registered users.
          </p>

        </div>

        {usersLoading ? (

          <p className="text-center">
            Loading users...
          </p>

        ) : (

          <UserTable
            users={users}
          />

        )}

      </section>

      {/* Platform Settings */}

      <section className="mt-16">

        {settingsLoading ? (

          <p className="text-center">
            Loading platform settings...
          </p>

        ) : settings ? (

          <PlatformSettingsCard
            settings={settings}
            saving={settingsSaving}
            onSave={saveSettings}
          />

        ) : (

          <p className="text-center text-red-500">
            Platform settings could not be loaded.
          </p>

        )}

      </section>

    </main>
  );
}