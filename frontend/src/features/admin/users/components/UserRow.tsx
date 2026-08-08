type Props = {
  user: any;

  onView: () => void;
};

export default function UserRow({
  user,
  onView,
}: Props) {
  return (
    <tr className="border-b">

      <td className="px-4 py-3">
        {user.name}
      </td>

      <td className="px-4 py-3">
        {user.email}
      </td>

      <td className="px-4 py-3">
        {user.subscription_status}
      </td>

      <td className="px-4 py-3">
        {user.current_plan ?? "-"}
      </td>

      <td className="px-4 py-3">

        <button
          onClick={onView}
          className="rounded-lg bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600"
        >
          View
        </button>

      </td>

    </tr>
  );
}