import { api } from "@/lib/api";

export async function getUsers() {
  const { data } = await api.get("/admin/users");

  return data.data;
}