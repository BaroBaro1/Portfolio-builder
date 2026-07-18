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

type SidebarProps = {
  isMobile?: boolean;
  onClose?: () => void;
};

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

export default function Sidebar({
  isMobile = false,
  onClose,
}: SidebarProps) {
  const content = (
    <>
      {/* Logo */}

      <div className="border-b border-border/50 px-8 py-7">

        <NavLink
          to="/"
          onClick={onClose}
          className="flex items-center gap-4"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-xl font-extrabold text-white shadow-lg">
            P
          </div>

          <div>

            <h1 className="text-xl font-extrabold tracking-tight">
              Portfoido
            </h1>

            <p className="text-xs text-muted-foreground">
              Professional Identity
            </p>

          </div>

        </NavLink>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 px-5 py-6">

        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/studio"}
              onClick={onClose}
              className={({ isActive }) =>
                `
                group flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-300
                ${
                  isActive
                    ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }
                `
              }
            >
              <Icon
                size={20}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              <span className="font-medium">
                {link.title}
              </span>

            </NavLink>
          );
        })}

      </nav>

      {/* Footer */}

      <div className="border-t border-border/50 px-6 py-6">

        <div className="rounded-2xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 p-5">

          <h3 className="font-semibold">
            Portfoido Studio
          </h3>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Build, manage and publish your professional identity.
          </p>

        </div>

      </div>
    </>
  );

  if (isMobile) {
    return (
      <div className="flex h-full flex-col bg-background">
        {content}
      </div>
    );
  }

  return (
    <aside className="hidden w-72 shrink-0 border-r border-border/50 bg-background/80 backdrop-blur-xl lg:flex lg:flex-col">
      {content}
    </aside>
  );
}