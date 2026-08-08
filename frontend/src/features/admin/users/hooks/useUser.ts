import { useState } from "react";

import { getUser } from "../services/userService";

export function useUser() {

  const [user, setUser] = useState<any>(null);

  const [loading, setLoading] =
    useState(false);

  async function loadUser(
    id: number
  ) {

    try {

      setLoading(true);

      const data = await getUser(id);

      setUser(data);

    } finally {

      setLoading(false);

    }

  }

  return {

    user,

    loading,

    loadUser,

  };

}