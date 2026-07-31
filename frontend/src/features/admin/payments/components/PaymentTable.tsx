import { useState } from "react";

import PaymentRow from "./PaymentRow";
import ReviewPaymentModal from "./ReviewPaymentModal";

type Props = {
  payments: any[];
};

export default function PaymentTable({
  payments,
}: Props) {

  const [selectedPayment, setSelectedPayment] =
    useState<any | null>(null);

  const [openModal, setOpenModal] =
    useState(false);

  function handleReview(payment: any) {

    setSelectedPayment(payment);

    setOpenModal(true);

  }

  return (
    <>

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

        <table className="min-w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="px-4 py-3 text-left">
                User
              </th>

              <th className="px-4 py-3 text-left">
                Email
              </th>

              <th className="px-4 py-3 text-left">
                Plan
              </th>

              <th className="px-4 py-3 text-left">
                Status
              </th>

              <th className="px-4 py-3 text-left">
                Receipt
              </th>

              <th className="px-4 py-3 text-left">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {payments.length === 0 ? (

              <tr>

                <td
                  colSpan={6}
                  className="py-10 text-center text-gray-500"
                >
                  No payment requests found.
                </td>

              </tr>

            ) : (

              payments.map((payment) => (

                <PaymentRow
                  key={payment.id}
                  payment={payment}
                  onReview={() => handleReview(payment)}
                />

              ))

            )}

          </tbody>

        </table>

      </div>

      <ReviewPaymentModal
        open={openModal}
        payment={selectedPayment}
        onClose={() => {

          setOpenModal(false);

          setSelectedPayment(null);

        }}
      />

    </>

  );
}