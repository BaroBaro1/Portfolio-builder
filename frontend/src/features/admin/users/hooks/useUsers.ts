import { useEffect, useState } from "react";

import { getUsers } from "../services/userAdminService";

export function useUsers() {
  const [users, setUsers] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const data = await getUsers();

      setUsers(data);
    } finally {
      setLoading(false);
    }
  }

  return {
    users,
    loading,
    refresh: load,
  };
}