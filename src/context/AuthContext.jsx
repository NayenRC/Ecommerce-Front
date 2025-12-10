import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");

        if (storedUser && storedToken) {
            setUser(JSON.parse(storedUser));
            setToken(storedToken);
        }

        setLoading(false);
    }, []);

    const login = (data) => {
        // data = { token: "...", usuario: {...} }
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.usuario));

        setToken(data.token);
        setUser(data.usuario);
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setToken(null);
        setUser(null);
    };

    const isAuthenticated = !!token;
    const isAdmin = user?.rol?.rol_id === 1;

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                logout,
                loading,
                isAuthenticated,
                isAdmin,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
