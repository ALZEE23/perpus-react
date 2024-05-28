import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function AdminRoutes({ children }) {
  const token = Cookies.get("token");
  const role = localStorage.getItem("role")

  if (!token || role == "user") {
    return <Navigate to="/login" replace />;
  }

  return children;
}
