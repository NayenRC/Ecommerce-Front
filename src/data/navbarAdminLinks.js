export const adminLinks = [
    { to: "/admin/dashboard", label: "Inicio" },
    { to: "/admin/Usuarios", label: "Usuarios" },
    { to: "/", label: "Salir", onClick: () => handleLogout() }, // opcional
];

export default adminLinks;