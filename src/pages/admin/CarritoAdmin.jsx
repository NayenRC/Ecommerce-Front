import React, { useEffect, useState } from "react";
import CarritoService from "../../services/CarritoService";
import "../../styles/pages/CarritoAdmin.css";

function CarritoAdmin() {
  const [carritos, setCarritos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargarCarritos();
  }, []);

  const cargarCarritos = async () => {
    try {
      const res = await CarritoService.getAll();
      setCarritos(res.data || []);
    } catch (error) {
      console.error("Error cargando carritos:", error);
    } finally {
      setLoading(false);
    }
  };

  // ----- MÉTRICAS -----
  const totalCarritos = carritos.length;
  const pendientes = carritos.filter(c => c.estado?.estadoId === 1).length;
  const aprobados = carritos.filter(c => c.estado?.estadoId === 2).length;
  const rechazados = carritos.filter(c => c.estado?.estadoId === 3).length;
  const totalRecaudado = carritos.reduce((acc, c) => acc + (c.total || 0), 0);

  if (loading) return <h2>Cargando...</h2>;

  return (
    <div className="carrito-admin-container">

      {/* 🔥 TARJETAS DE RESUMEN */}
      <div className="resumen-container">
        <div className="resumen-card">
          <h3>Total Carritos</h3>
          <p>{totalCarritos}</p>
        </div>

        <div className="resumen-card pending">
          <h3>Pendientes</h3>
          <p>{pendientes}</p>
        </div>

        <div className="resumen-card approved">
          <h3>Aprobados</h3>
          <p>{aprobados}</p>
        </div>

        <div className="resumen-card rejected">
          <h3>Rechazados</h3>
          <p>{rechazados}</p>
        </div>

        <div className="resumen-card money">
          <h3>Total Recaudado</h3>
          <p>${totalRecaudado}</p>
        </div>
      </div>

      {/* 🔥 TABLA DE CARRITOS */}
      <h1 className="carritos-title">Carritos Registrados</h1>

      <div className="carritos-table">
        <div className="carritos-header">
          <span>ID</span>
          <span>Usuario</span>
          <span>Fecha</span>
          <span>Estado</span>
          <span>Total</span>
        </div>

        {carritos.map((c) => (
          <div className="carritos-row" key={c.carritoId}>
            <span>{c.carritoId}</span>
            <span>{c.usuario?.nombreUsuario}</span>
            <span>{c.fechaCreacion?.replace("T", " ").slice(0, 19)}</span>
            <span>{c.estado?.nombreEstado}</span>
            <span>${c.total}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarritoAdmin;
