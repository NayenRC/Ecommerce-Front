import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

 
  if (!user || user.rol?.rol_id !== 1) {
    return <Navigate to="/" replace />;
  }

  return children;
}
