import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "@/layouts/PublicLayout";

import LandingPage from "@/features/landing/pages/LandingPage";

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
]);