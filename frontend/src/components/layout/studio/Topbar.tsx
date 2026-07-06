import { Bell, Search, UserCircle } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <div>
        <h2 className="text-xl font-semibold">
          Studio
        </h2>
      </div>

      <div className="flex items-center gap-5">
        <button className="hover:text-primary transition">
          <Search size={20} />
        </button>

        <button className="hover:text-primary transition">
          <Bell size={20} />
        </button>

        <button className="hover:text-primary transition">
          <UserCircle size={28} />
        </button>
      </div>
    </header>
  );
}