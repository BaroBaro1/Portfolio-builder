import { api } from "@/lib/api";

export async function getUser(
  id: number
) {
  const { data } = await api.get(

    `/admin/users/${id}`

  );

  return data.data;
}