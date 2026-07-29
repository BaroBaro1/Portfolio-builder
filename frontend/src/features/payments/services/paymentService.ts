import { api } from "@/lib/api";

export async function uploadManualPayment(
  formData: FormData
) {
  const { data } = await api.post(
    "/payments/manual",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data.data;
}