import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
    const { isAuthenticated, loading } = useAuth();

    if (loading) return null; // mientras carga localStorage

    return isAuthenticated ? children : <Navigate to="/login" />;
}
