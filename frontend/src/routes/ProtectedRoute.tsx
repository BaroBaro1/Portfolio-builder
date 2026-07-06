import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();

if (loading)
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="animate-pulse text-gray-500">
        Loading studio...
      </div>
    </div>
  );
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}