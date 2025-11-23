
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "../../styles/components/organisms/Navbar.css";
import CartButton from "../atoms/CartButton";

function Navbar({ links, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Obtener usuario desde localStorage
  const user = JSON.parse(localStorage.getItem("user"));

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

        {/* IZQUIERDA: LOGO + MARCA */}
        <div className="nav-left">
          <img src="/logo.png" alt="Logo" className="nav-logo" />
          <h1 className="nav-brand">미지 <span>Beauty</span></h1>
        </div>

        {/* MENÚ CENTRADO DESKTOP */}
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

        {/* DERECHA: BUSCADOR + CUENTA + CARRITO */}
        <div className="nav-right">
          <input type="text" placeholder="Buscar..." className="nav-search" />
          <button className="btn-search">Buscar</button>

          {!user && (
            <button className="btn-account" onClick={goToLogin}>
              Mi Cuenta
            </button>
          )}

          {user && (
            <button className="btn-logout" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          )}

          {/* 🔥 BOTÓN DEL CARRITO ACTUALIZADO */}
          <CartButton />
        </div>

        {/* BOTÓN MENÚ MOBILE */}
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </div>

      {/* MENÚ MOBILE */}
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
