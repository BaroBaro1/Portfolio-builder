import { useState } from "react";

import UserRow from "./UserRow";
import ViewUserModal from "./ViewUserModal";

type Props = {
  users: any[];
};

export default function UserTable({
  users,
}: Props) {

  const [selectedUserId, setSelectedUserId] =
    useState<number | null>(null);

  const [openModal, setOpenModal] =
    useState(false);

  function handleView(id: number) {

    setSelectedUserId(id);

    setOpenModal(true);

  }

  return (
    <>

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

        <table className="min-w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="px-4 py-3 text-left">
                Name
              </th>

              <th className="px-4 py-3 text-left">
                Email
              </th>

              <th className="px-4 py-3 text-left">
                Subscription
              </th>

              <th className="px-4 py-3 text-left">
                Plan
              </th>

              <th className="px-4 py-3 text-left">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {users.length === 0 ? (

              <tr>

                <td
                  colSpan={5}
                  className="py-10 text-center text-gray-500"
                >
                  No users found.
                </td>

              </tr>

            ) : (

              users.map((user) => (

                <UserRow
                  key={user.id}
                  user={user}
                  onView={() => handleView(user.id)}
                />

              ))

            )}

          </tbody>

        </table>

      </div>

      <ViewUserModal
        open={openModal}
        userId={selectedUserId}
        onClose={() => {

          setOpenModal(false);

          setSelectedUserId(null);

        }}
      />

    </>

  );
}