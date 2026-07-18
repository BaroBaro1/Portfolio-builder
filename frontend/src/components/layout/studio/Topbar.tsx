import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import ThemeToggle from "@/components/theme/ThemeToggle";
import { useAuth } from "@/context/AuthContext";
import Sidebar from "./Sidebar";

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

export default function Topbar() {
  const { user, logout } = useAuth();

  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);

  const current =
    pageInfo[location.pathname] ??
    pageInfo["/studio"];

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">

        <div className="flex h-20 items-center justify-between px-6 lg:px-8">

          {/* Left */}

          <div className="flex items-center gap-4">

            {/* Mobile Menu */}

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

          {/* Right */}

          <div className="flex items-center gap-4">

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

      {/* Mobile Overlay */}

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Mobile Sidebar */}

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