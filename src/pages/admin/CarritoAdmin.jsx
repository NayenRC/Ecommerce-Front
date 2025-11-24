import React, { useEffect, useState } from "react";
import CarritoService from "../../services/CarritoService";
import "../../styles/pages/UsuarioAdmin.css";

function CarritoAdmin() {
    const [carritos, setCarritos] = useState([]);

    useEffect(() => {
        cargarCarritos();
    }, []);

    const cargarCarritos = async () => {
        try {
            const res = await CarritoService.getAll();
            setCarritos(res.data || []);
        } catch (error) {
            console.error("Error cargando carritos:", error);
        }
    };

    const handleDelete = async (id) => {
        await CarritoService.delete(id);
        cargarCarritos();
    };

    return (
        <div className="usuarios-container">
            <h1 className="usuarios-title">Carritos Registrados</h1>

            <div className="usuarios-table">
                <div className="usuarios-header">
                    <span>ID</span>
                    <span>Usuario</span>
                    <span>Fecha</span>
                    <span>Estado</span>
                    <span>Acciones</span>
                </div>
                <div className="usuarios-header">
                    <span>ID</span>
                    <span>Usuario</span>
                    <span>Fecha</span>
                    <span>Estado</span>
                    <span>Acciones</span>
                </div>

                {carritos.map((c) => (
                    <div className="usuarios-row" key={c.carritoId}>
                        <span>{c.carritoId}</span>
                        <span>{c.usuario?.nombreUsuario}</span>
                        <span>{c.fechaCreacion?.replace("T", " ")}</span>
                        <span>{c.estado?.nombreEstado}</span>

                        <div className="usuarios-actions">
                            <button className="btn-delete" onClick={() => handleDelete(c.carritoId)}>
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CarritoAdmin;
