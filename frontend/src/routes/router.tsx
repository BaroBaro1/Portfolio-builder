import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "@/layouts/PublicLayout";
import StudioLayout from "@/layouts/StudioLayout";

import LandingPage from "@/features/landing/pages/LandingPage";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import ProfilePage from "@/features/profile/pages/ProfilePage";

import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";

import ProtectedRoute from "@/routes/ProtectedRoute";
import ForgotPasswordPage from "@/features/auth/pages/ForgotPasswordPage";
import ResetPasswordPage from "@/features/auth/pages/ResetPasswordPage";

import ProjectsPage from "@/features/projects/pages/ProjectsPage";
import SkillsPage from "@/features/skills/pages/SkillsPage";
import ExperiencePage from "@/features/experience/pages/ExperiencePage";
import EducationPage from "@/features/education/pages/EducationPage"; 
import CertificatesPage from "@/features/certificates/pages/CertificatesPage";
import SocialLinksPage from "@/features/social-links/pages/SocialLinksPage";
import SettingsPage from "@/features/settings/pages/SettingsPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },

  {
    path: "/studio",
    element: (
      <ProtectedRoute>
        <StudioLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },

      {
        path: "profile",
        element: <ProfilePage />,
      },

      {
  path: "projects",
  element: <ProjectsPage />,
},
{
  path: "skills",
  element: <SkillsPage />,
},
{
  path: "experiences",
  element: <ExperiencePage />,
},
{
    path: "educations",
    element: <EducationPage />,
},
{
    path: "certificates",
    element: <CertificatesPage />,
  },
{
    path: "social-links",
    element: <SocialLinksPage />,
},
{
    path: "settings",
    element: <SettingsPage />,
  },
    ],
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
   {
  path: "/forgot-password",
  element: <ForgotPasswordPage />,
},
{
  path: "/reset-password",
  element: <ResetPasswordPage />,
},
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);