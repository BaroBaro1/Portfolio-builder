import { api } from "@/lib/api";

export async function getPayments() {
  const { data } = await api.get("/admin/payments");

  return data.data;
}