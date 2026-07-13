import { api } from "@/lib/api";
import type {
  SettingsResponse,
  UpdateSettingsPayload,
} from "@/types/settings";

export async function getSettings() {
  const { data } = await api.get<SettingsResponse>(
    "/profile/settings"
  );

  return data.data;
}

export async function updateSettings(
  payload: UpdateSettingsPayload
) {
  const { data } = await api.put(
    "/profile/settings",
    payload
  );

  return data.data;
}