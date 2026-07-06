import { Bell, Search, UserCircle } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function Topbar() {
  const { user, logout } = useAuth();

  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <div>
        <h2 className="text-xl font-semibold">Studio</h2>
      </div>

      <div className="flex items-center gap-5">
        <div className="text-sm font-medium">
          {user?.name}
        </div>

        <button className="hover:text-primary transition">
          <Search size={20} />
        </button>

        <button className="hover:text-primary transition">
          <Bell size={20} />
        </button>

        <button className="hover:text-primary transition">
          <UserCircle size={28} />
        </button>

        <button
          onClick={logout}
          className="rounded border px-3 py-1 text-sm hover:bg-muted transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}