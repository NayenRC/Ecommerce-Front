import React, { useEffect, useState } from "react";
import UserService from "../../services/UsuarioService";
import "../../styles/pages/HomeAdmin.css";

function HomeAdmin() {
  const [totalUsuarios, setTotalUsuarios] = useState(0);

  useEffect(() => {
    cargarMetricas();
  }, []);

  const cargarMetricas = async () => {
    try {
      const res = await UserService.getAll();
      setTotalUsuarios(res.data.length);
    } catch (error) {
      console.error("Error cargando métricas:", error);
    }
  };

  return (
    <div className="admin-home-container">

      {/* TÍTULO */}
      <h1 className="admin-title">Panel de Administración</h1>

      {/* MÉTRICAS */}
      <div className="metricas-container">

        <div className="metric-card">
          <p className="metric-label">Usuarios Registrados</p>
          <h2 className="metric-number">{totalUsuarios}</h2>
          
        </div>

      </div>
    </div>
  );
}

export default HomeAdmin;

