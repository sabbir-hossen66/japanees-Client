import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import LoadingSpinner from "../ui/LoadingSpinner";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";



const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <LoadingSpinner />
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default AdminRoute;