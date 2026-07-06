import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layout/studio/Sidebar";
import Topbar from "@/components/layout/studio/Topbar";

export default function StudioLayout() {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}