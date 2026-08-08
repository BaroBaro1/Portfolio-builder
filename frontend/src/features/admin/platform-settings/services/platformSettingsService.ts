import { api } from "@/lib/api";

export async function getPlatformSettings() {
  const { data } = await api.get(
    "/admin/platform-settings"
  );

  return data.data;
}

export async function updatePlatformSettings(
  payload: {
    bank_name: string;
    account_owner: string;
    ccp: string;
    rip: string;
    iban: string | null;
    swift: string | null;
    payment_instructions: string | null;
  }
) {
  const { data } = await api.put(
    "/admin/platform-settings",
    payload
  );

  return data.data;
}