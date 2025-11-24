import React from "react";
import UsuarioRow from "../molecules/UsuarioAdmi";
import "../../styles/components/organisms/UsuarioTable.css";

function UsuarioTable({ usuarios, onEdit, onDelete }) {
    return (
        <div className="usuario-table-container">
            <h1 className="usuario-admin-title">Usuarios Registrados</h1>

            <table className="usuario-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Comuna</th>
                        <th>Dirección</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {usuarios.length === 0 ? (
                        <tr>
                            <td colSpan="6" className="no-data">
                                No hay usuarios registrados.
                            </td>
                        </tr>
                    ) : (
                        usuarios.map((u) => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.nombreUsuario}</td>
                                <td>{u.correoElectronico}</td>
                                <td>{u.comuna?.nombre_comuna ?? "—"}</td>
                                <td>{u.direccion || "—"}</td>
                                <td className="acciones-col">
                                    <button
                                        className="btn-edit"
                                        onClick={() => onEdit(u)}
                                    >
                                        Editar
                                    </button>

                                    <button
                                        className="btn-delete"
                                        onClick={() => onDelete(u.id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>

            </table>

        </div>
    );
}

export default UsuarioTable;
