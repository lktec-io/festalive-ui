import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
  isAuthenticated,
}: {
  children: React.ReactNode;
  isAuthenticated: boolean;
}) {
  if (!isAuthenticated) return <Navigate to="/login" />;
  return children;
}
