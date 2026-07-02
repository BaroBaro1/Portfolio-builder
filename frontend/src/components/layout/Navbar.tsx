import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import ThemeToggle from "@/components/theme/ThemeToggle";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Templates", href: "#preview" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "Pricing", href: "#cta" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500 text-lg font-bold text-white shadow-sm">
              B
            </div>

            <div className="hidden sm:block">
              <p className="text-lg font-bold tracking-tight">
                BARO
              </p>

              <p className="text-xs text-muted-foreground">
                Professional Identity
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 lg:flex">

            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {item.name}
              </a>
            ))}

          </nav>

          {/* Desktop Actions */}

          <div className="hidden items-center gap-3 lg:flex">

            <ThemeToggle />

            <button
              className="rounded-xl border border-border px-5 py-2 text-sm font-medium transition hover:bg-accent"
            >
              Sign In
            </button>

            <button
              className="rounded-xl bg-emerald-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              Get Started
            </button>

          </div>

          {/* Mobile Buttons */}

          <div className="flex items-center gap-2 lg:hidden">

            <ThemeToggle />

            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-xl p-2 transition hover:bg-accent"
            >
              <Menu className="h-6 w-6" />
            </button>

          </div>

        </div>
      </header>

      {/* Overlay */}

      {mobileOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        />
      )}

      {/* Mobile Drawer */}

      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-[320px] flex-col bg-background shadow-2xl transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-border p-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500 font-bold text-white">
              B
            </div>

            <div>
              <h2 className="font-bold">
                BARO
              </h2>

              <p className="text-xs text-muted-foreground">
                Professional Identity
              </p>
            </div>

          </div>

          <button
            onClick={closeMenu}
            className="rounded-lg p-2 hover:bg-accent"
          >
            <X className="h-5 w-5" />
          </button>

        </div>

        {/* Navigation */}

        <div className="flex flex-1 flex-col px-6 py-8">

          <nav className="space-y-2">

            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between rounded-xl px-4 py-4 text-base font-semibold transition hover:bg-accent"
              >
                <span>{item.name}</span>

                <ChevronRight className="h-4 w-4 opacity-50" />
              </a>
            ))}

          </nav>
                    <div className="mt-auto border-t border-border pt-8">

            <div className="space-y-3">

              <button
                onClick={closeMenu}
                className="w-full rounded-xl border border-border px-5 py-3 text-sm font-medium transition hover:bg-accent"
              >
                Sign In
              </button>

              <button
                onClick={closeMenu}
                className="w-full rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
              >
                Get Started
              </button>

            </div>

            <div className="mt-8 border-t border-border pt-6">

              <p className="text-center text-xs text-muted-foreground">
                Build your professional identity.
              </p>

            </div>

          </div>

        </div>

      </aside>
    </>
  );
}