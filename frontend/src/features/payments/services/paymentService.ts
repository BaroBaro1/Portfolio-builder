import { api } from "@/lib/api";

export type PlatformPaymentSettings = {
  bank_name: string;
  account_owner: string;
  ccp: string;
  rip: string;
  iban: string | null;
  swift: string | null;
  payment_instructions: string | null;
};

export async function getPlatformPaymentSettings() {
  const { data } = await api.get(
    "/admin/platform-settings"
  );

  return data.data as PlatformPaymentSettings;
}

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