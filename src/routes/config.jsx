import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // Si NO está logueado o NO es admin → redirigir
  if (!user || user.rol?.rol_id !== 1) {
    return <Navigate to="/" replace />;
  }

  return children;
}
