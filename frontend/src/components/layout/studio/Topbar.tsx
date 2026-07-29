import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Clock,
  Crown,
} from "lucide-react";

import ThemeToggle from "@/components/theme/ThemeToggle";
import { useAuth } from "@/context/AuthContext";
import Sidebar from "./Sidebar";
import { api } from "@/lib/api";

const pageInfo: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  "/studio": {
    title: "Dashboard",
    description: "Manage your professional identity",
  },

  "/studio/profile": {
    title: "Profile",
    description: "Personal information",
  },

  "/studio/projects": {
    title: "Projects",
    description: "Manage your portfolio projects",
  },

  "/studio/skills": {
    title: "Skills",
    description: "Show your expertise",
  },

  "/studio/experiences": {
    title: "Experience",
    description: "Professional journey",
  },

  "/studio/educations": {
    title: "Education",
    description: "Academic background",
  },

  "/studio/certificates": {
    title: "Certificates",
    description: "Professional achievements",
  },

  "/studio/social-links": {
    title: "Social Links",
    description: "Connect your audience",
  },

  "/studio/settings": {
    title: "Settings",
    description: "Manage your account",
  },
};

interface SubscriptionStatus {
  status: string;
  current_plan: string | null;
  expires_at: string | null;
  days_left: number | null;
}

export default function Topbar() {
  const { user, logout } = useAuth();

  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);

  const [subscription, setSubscription] =
    useState<SubscriptionStatus | null>(null);

  const current =
    pageInfo[location.pathname] ??
    pageInfo["/studio"];

  useEffect(() => {
    loadSubscription();
  }, []);

  async function loadSubscription() {
    try {
      const { data } = await api.get(
        "/subscription/status"
      );

      setSubscription(data.data);
    } catch {
      setSubscription(null);
    }
  }

  function badgeColor() {
    if (!subscription)
      return "bg-slate-100 text-slate-700";

    switch (subscription.status) {
      case "trial":
        return "bg-yellow-100 text-yellow-700";

      case "active":
        return "bg-emerald-100 text-emerald-700";

      case "pending":
        return "bg-orange-100 text-orange-700";

      default:
        return "bg-red-100 text-red-700";
    }
  }

  function formatRemainingTime() {
    if (!subscription) return "";

    if (subscription.days_left === null)
      return "";

    if (subscription.days_left > 1)
      return `${subscription.days_left} days left`;

    if (subscription.days_left === 1)
      return "1 day left";

    return "Expires today";
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">

        <div className="flex h-20 items-center justify-between px-6 lg:px-8">

          <div className="flex items-center gap-4">

            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-xl p-2 transition hover:bg-muted lg:hidden"
            >
              <Menu size={24} />
            </button>

            <div>

              <h1 className="text-3xl font-bold tracking-tight">
                {current.title}
              </h1>

              <p className="mt-1 text-sm text-muted-foreground">
                {current.description}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-6">

            {subscription && (
              <div className="hidden rounded-2xl border bg-card px-5 py-3 lg:flex lg:items-center lg:gap-4">

                <Crown
                  size={20}
                  className="text-emerald-500"
                />

                <div>

                  <div className="flex items-center gap-2">

                    <span className="font-semibold">
                      {subscription.current_plan ??
                        "No Plan"}
                    </span>

                    <span
                      className={`rounded-full px-2 py-1 text-xs font-bold ${badgeColor()}`}
                    >
                      {subscription.status.toUpperCase()}
                    </span>

                  </div>

                  {subscription.days_left !== null && (

                    <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">

                      <Clock size={14} />

                      <span>
                        {formatRemainingTime()}
                      </span>

                    </div>

                  )}

                </div>

              </div>
            )}

            <ThemeToggle />

            <div className="hidden text-right md:block">

              <p className="font-semibold">
                {user?.name}
              </p>

              <p className="text-sm text-muted-foreground">
                {user?.email}
              </p>

            </div>

            <button
              onClick={logout}
              className="rounded-xl border border-border px-4 py-2 text-sm font-medium transition hover:bg-muted"
            >
              Logout
            </button>

          </div>

        </div>

      </header>

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
        />
      )}

      <div
        className={`fixed left-0 top-0 z-50 h-screen w-72 transform bg-background shadow-2xl transition-transform duration-300 lg:hidden ${
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-end px-5">

          <button
            onClick={() => setMobileOpen(false)}
            className="rounded-xl p-2 hover:bg-muted"
          >
            <X size={22} />
          </button>

        </div>

        <Sidebar
          isMobile
          onClose={() => setMobileOpen(false)}
        />

      </div>
    </>
  );
}