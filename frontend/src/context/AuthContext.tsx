import { createContext, useContext, useEffect, useState } from "react";
import { api } from "@/lib/api";

type Plan = {
  id: number;
  name: string;
  slug: string;
  price: number;
  billing_cycle: string;
};

type User = {
  id: number;
  name: string;
  email: string;

  current_plan?: Plan | null;

  subscription_status?:
    | "trial"
    | "pending"
    | "active"
    | "expired"
    | "rejected";

  subscription_expires_at?: string | null;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const response = await api.get("/me");

      setUser(response.data.data.user);
    } catch {
      localStorage.removeItem("token");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    fetchUser();
  }, []);

  const login = async (
    email: string,
    password: string
  ) => {
    const response = await api.post("/login", {
      email,
      password,
    });

    const token = response.data.data.token;
    const user = response.data.data.user;

    localStorage.setItem("token", token);

    setUser(user);
  };

  const logout = async () => {
    try {
      await api.post("/logout");
    } catch {}

    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}