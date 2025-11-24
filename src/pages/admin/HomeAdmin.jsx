import React, { useEffect, useState } from "react";
import UserService from "../../services/UsuarioService";
import ProductosService from "../../services/ProductosService";
import "../../styles/pages/HomeAdmin.css";

function HomeAdmin() {

  const [totalUsuarios, setTotalUsuarios] = useState(0);
  const [totalProductos, setTotalProductos] = useState(0);

  useEffect(() => {
    cargarMetricas();
  }, []);

  const cargarMetricas = async () => {
    try {
      const usuariosRes = await UserService.getAll();
      setTotalUsuarios(usuariosRes.data.length);
      const productosRes = await ProductosService.getAll();
      setTotalProductos(productosRes.data.length);

    } catch (error) {
      console.error("Error cargando métricas:", error);
    }
  };

  return (
    <div className="admin-home-container">
      <h1 className="admin-title">Panel de Administración</h1>
      <div className="metricas-container">
        <div className="metric-card">
          <p className="metric-label">Usuarios Registrados</p>
          <h2 className="metric-number">{totalUsuarios}</h2>
        </div>

        <div className="metric-card">
          <p className="metric-label">Productos Registrados</p>
          <h2 className="metric-number">{totalProductos}</h2>
        </div>

      </div>
    </div>
  );
}

export default HomeAdmin;