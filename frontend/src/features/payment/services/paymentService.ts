import { api } from "@/lib/api";

interface ManualPaymentData {
  plan_slug: string;
  receipt: File;
  reference: string;
}

export async function uploadManualReceipt(
  data: ManualPaymentData
) {
  const formData = new FormData();

  formData.append("plan_slug", data.plan_slug);

  formData.append("receipt", data.receipt);

  formData.append("reference", data.reference);

  const response = await api.post(
    "/payments/manual",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
}