import React from "react";
import "../../styles/components/molecules/CarritoAdmi.css";

function CarritoRow({ item, onEdit, onDelete }) {
    return (
        <div className="carrito-row">

            <span>{item.carritoId}</span>
            <span>{item.usuario?.nombreUsuario}</span>
            <span>{item.producto?.nombreProducto}</span>
            <span>{item.cantidad}</span>
            <span>${item.producto?.precio}</span>
            <span>${item.total}</span>

            <div className="carrito-actions">
                <button className="btn-edit" onClick={() => onEdit(item)}>
                    Editar
                </button>

                <button className="btn-delete" onClick={() => onDelete(item.carritoId)}>
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default CarritoRow;
