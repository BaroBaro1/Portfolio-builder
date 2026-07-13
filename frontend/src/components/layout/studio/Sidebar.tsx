import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  FolderKanban,
  GraduationCap,
  Briefcase,
  Award,
  Wrench,
  Link2,
  Settings,
} from "lucide-react";

const links = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    to: "/studio",
  },
  {
    title: "Profile",
    icon: User,
    to: "/studio/profile",
  },
  {
    title: "Projects",
    icon: FolderKanban,
    to: "/studio/projects",
  },
  {
    title: "Skills",
    icon: Wrench,
    to: "/studio/skills",
  },
  {
    title: "Experience",
    icon: Briefcase,
    to: "/studio/experiences",
  },
  {
    title: "Education",
    icon: GraduationCap,
    to: "/studio/educations",
  },
  {
    title: "Certificates",
    icon: Award,
    to: "/studio/certificates",
},
  {
    title: "Social Links",
    icon: Link2,
    to: "/studio/social-links",
  },
  {
    title: "Settings",
    icon: Settings,
    to: "/studio/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-background">
      <div className="p-6">
        <h1 className="text-xl font-bold">Portfolio Builder</h1>
      </div>

      <nav className="flex flex-col gap-1 px-3">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.to}
              to={link.to}
                end={link.to === "/studio"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`
              }
            >
              <Icon size={18} />
              <span>{link.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}