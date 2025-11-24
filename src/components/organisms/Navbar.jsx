import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "../../styles/components/organisms/Navbar.css";
import CartButton from "../atoms/CartButton";
import BuscarBar from "../molecules/BuscarBar";

function Navbar({ links, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.rol?.nombre_rol === "Administrador";

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    setIsOpen(false);
  };

  const handleLinkClick = (e, link) => {
    if (link.label === "Salir") { 
      e.preventDefault();
      handleLogout();
    } else {
      setIsOpen(false);
    }
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-inner">

        <div className="nav-left">
          <img src="/logo.png" alt="Logo" className="nav-logo" />
          <h1 className="nav-brand">미지 <span>Beauty</span></h1>
        </div>

        <div className="nav-menu">
          {links.map((link, i) => (
            <NavLink
              key={i}
              to={link.to}
              onClick={(e) => link.label === "Salir" && handleLinkClick(e, link)}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {link.label}
            </NavLink>
          ))}

          {user && (
            <span className="nav-user">
              Hola, <b>{user.nombreUsuario}</b>
            </span>
          )}
        </div>

        <div className="nav-right">

          {!isAdmin && (
            <BuscarBar onBuscar={(query) => navigate(`/productos?search=${query}`)} />
          )}

          {!user ? (
            <button className="btn-account" onClick={goToLogin}>
              Mi Cuenta
            </button>
          ) : (
            <button className="btn-logout" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          )}

          {!isAdmin && <CartButton />}
        </div>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </div>

      <div className={`nav-mobile ${isOpen ? "open" : ""}`}>
        {links.map((link, i) => (
          <NavLink
            key={i}
            to={link.to}
            onClick={(e) => handleLinkClick(e, link)}
            className="nav-mobile-link"
          >
            {link.label}
          </NavLink>
        ))}

        {user && (
          <p className="nav-mobile-user">Hola, {user.nombreUsuario}</p>
        )}

        {!user ? (
          <button className="nav-mobile-btn" onClick={goToLogin}>
            Mi Cuenta
          </button>
        ) : (
          <button className="nav-mobile-btn" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;