import { Navigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";

export const ProtectedRoute = ({ children }) => {

  const { user } = useAuth();

  if (!user) {
    // user is not authenticated
    return <Navigate to="/Login" />;
  }
  return children;

};