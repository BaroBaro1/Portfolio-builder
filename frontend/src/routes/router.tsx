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