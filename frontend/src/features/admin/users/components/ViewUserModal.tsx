import { useEffect } from "react";

import { useUser } from "../hooks/useUser";

type Props = {
  open: boolean;
  userId: number | null;
  onClose: () => void;
};

export default function ViewUserModal({
  open,
  userId,
  onClose,
}: Props) {
  const {
    user,
    loading,
    loadUser,
  } = useUser();

  useEffect(() => {

    if (open && userId) {

      loadUser(userId);

    }

  }, [open, userId]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

      <div className="w-full max-w-5xl rounded-3xl bg-white p-8 shadow-2xl max-h-[90vh] overflow-y-auto">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-black">
              User Details
            </h2>

            <p className="text-gray-500">
              Complete account information.
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-xl border px-4 py-2"
          >
            Close
          </button>

        </div>

        {loading ? (

          <p>Loading...</p>

        ) : user ? (

          <div className="space-y-10">

            <section>

              <h3 className="mb-4 text-xl font-bold">
                Account
              </h3>

              <div className="grid gap-4 md:grid-cols-2">

                <Info
                  label="Name"
                  value={user.name}
                />

                <Info
                  label="Email"
                  value={user.email}
                />

                <Info
                  label="Subscription"
                  value={user.subscription_status}
                />

                <Info
                  label="Plan"
                  value={user.current_plan?.name ?? "-"}
                />

                <Info
                  label="Expires"
                  value={
                    user.subscription_expires_at ?? "-"
                  }
                />

              </div>

            </section>

            <section>

              <h3 className="mb-4 text-xl font-bold">
                Profile
              </h3>

              <div className="grid gap-4 md:grid-cols-2">

                <Info
                  label="Display Name"
                  value={user.profile?.display_name}
                />

                <Info
                  label="Headline"
                  value={user.profile?.headline}
                />

                <Info
                  label="Location"
                  value={user.profile?.location}
                />

                <Info
                  label="Phone"
                  value={user.profile?.phone}
                />

              </div>

            </section>

            <section>

              <h3 className="mb-4 text-xl font-bold">
                Statistics
              </h3>

              <div className="grid gap-4 md:grid-cols-4">

                <Info
                  label="Projects"
                  value={user.projects?.length}
                />

                <Info
                  label="Experience"
                  value={user.experiences?.length}
                />

                <Info
                  label="Certificates"
                  value={user.certificates?.length}
                />

                <Info
                  label="Skills"
                  value={user.skills?.length}
                />

              </div>

            </section>

          </div>

        ) : (

          <p>User not found.</p>

        )}

      </div>

    </div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: any;
}) {
  return (
    <div className="rounded-xl border p-4">

      <p className="text-sm text-gray-500">
        {label}
      </p>

      <p className="mt-1 font-semibold">
        {value || "-"}
      </p>

    </div>
  );
}