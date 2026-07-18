import { Outlet } from "react-router-dom";

import Sidebar from "@/components/layout/studio/Sidebar";
import Topbar from "@/components/layout/studio/Topbar";

export default function StudioLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-foreground dark:bg-[#0B1120]">

      <div className="flex min-h-screen">

        {/* Sidebar */}

        <Sidebar />

        {/* Content */}

        <div className="flex min-h-screen flex-1 flex-col overflow-hidden">

          <Topbar />

          <main className="relative flex-1 overflow-y-auto">

            {/* Background Decorations */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

              <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

              <div className="absolute right-0 top-32 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/5 blur-3xl" />

            </div>

            {/* Page */}

            <div className="relative mx-auto w-full max-w-[1700px] p-6 sm:p-8 lg:p-10">

              <Outlet />

            </div>

          </main>

        </div>

      </div>

    </div>
  );
}