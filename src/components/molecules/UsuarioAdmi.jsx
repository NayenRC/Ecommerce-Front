import React from "react";
import "../../styles/components/molecules/UsuarioAdmi.css";

function UsuarioRow({ usuario, onEdit, onDelete }) {
    return (
        <div className="usuario-row">
            <span>{usuario.id}</span>
            <span>{usuario.nombreUsuario}</span>
            <span>{usuario.correoElectronico}</span>

            <div className="usuario-actions">
                <button className="btn-edit" onClick={() => onEdit(usuario)}>
                    Editar
                </button>
                <button className="btn-delete" onClick={() => onDelete(usuario.id)}>
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default UsuarioRow;
