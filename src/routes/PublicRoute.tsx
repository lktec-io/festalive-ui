import { Navigate } from "react-router-dom";

export default function PublicRoute({
  children,
  isAuthenticated,
}: {
  children: React.ReactNode;
  isAuthenticated: boolean;
}) {
  if (isAuthenticated) return <Navigate to="/" />;
  return children;
}