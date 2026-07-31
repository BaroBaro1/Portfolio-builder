type Props = {
  payment: any;

  onReview: () => void;
};

export default function PaymentRow({
  payment,
  onReview,
}: Props) {
  return (
    <tr className="border-b">

      <td className="px-4 py-3">
        {payment.user.name}
      </td>

      <td className="px-4 py-3">
        {payment.user.email}
      </td>

      <td className="px-4 py-3">
        {payment.plan.name}
      </td>

      <td className="px-4 py-3">

        <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">

          {payment.subscription.status}

        </span>

      </td>

      <td className="px-4 py-3">

        <a
          href={payment.receipt}
          target="_blank"
          rel="noreferrer"
          className="text-emerald-600 hover:underline"
        >
          View Receipt
        </a>

      </td>

      <td className="px-4 py-3">

        <button
          onClick={onReview}
          className="rounded-lg bg-emerald-500 px-4 py-2 text-white transition hover:bg-emerald-600"
        >
          Review
        </button>

      </td>

    </tr>
  );
}