import { api } from "@/lib/api";

export async function reviewPayment(
  paymentId: number,
  status: "approved" | "rejected",
  notes?: string
) {
  const { data } = await api.post(

    `/admin/payments/${paymentId}/review`,

    {
      status,
      notes,
    }

  );

  return data.data;
}