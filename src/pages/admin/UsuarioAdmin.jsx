import React, { useEffect, useState } from "react";
import UserService from "../../services/UsuarioService";
import UsuarioTable from "../../components/organisms/UsuarioTable";
import "../../styles/pages/UsuarioAdmin.css";

function UsuarioAdmin() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        cargarUsuarios();
    }, []);

    const cargarUsuarios = async () => {
        try {
            const res = await UserService.getAll();
            setUsuarios(res.data);
        } catch (error) {
            console.error("Error cargando usuarios:", error);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("¿Seguro que deseas eliminar este usuario?")) return;
        try {
            await UserService.deleteUser(id);
            cargarUsuarios();
        } catch (error) {
            console.error("Error eliminando usuario:", error);
        }
    };

    const [usuarioEditando, setUsuarioEditando] = useState(null);
    const handleEdit = (usuario) => {
        setUsuarioEditando(usuario);
    };

    const guardarCambios = async () => {
        try {
            const usuarioParaEnviar = {
                nombreUsuario: usuarioEditando.nombreUsuario,
                correoElectronico: usuarioEditando.correoElectronico,
                direccion: usuarioEditando.direccion,
                clave: usuarioEditando.clave ?? "123456",
                comuna: usuarioEditando.comuna,
                rol: usuarioEditando.rol
            };

            await UserService.updateUser(usuarioEditando.id, usuarioParaEnviar);
            setUsuarioEditando(null);
            cargarUsuarios();
        } catch (error) {
            console.error("Error actualizando usuario:", error);
        }
    };

    return (
        <div className="usuario-admin-container">
            <UsuarioTable
                usuarios={usuarios}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            {usuarioEditando && (
                <div className="modal-overlay">
                    <div className="modal-box">

                        <h2>Editar Usuario</h2>

                        <label>Nombre:</label>
                        <input
                            type="text"
                            value={usuarioEditando.nombreUsuario}
                            onChange={(e) =>
                                setUsuarioEditando({
                                    ...usuarioEditando,
                                    nombreUsuario: e.target.value
                                })
                            }
                        />

                        <label>Correo:</label>
                        <input
                            type="email"
                            value={usuarioEditando.correoElectronico}
                            onChange={(e) =>
                                setUsuarioEditando({
                                    ...usuarioEditando,
                                    correoElectronico: e.target.value
                                })
                            }
                        />

                        <label>Dirección:</label>
                        <input
                            type="text"
                            value={usuarioEditando.direccion}
                            onChange={(e) =>
                                setUsuarioEditando({
                                    ...usuarioEditando,
                                    direccion: e.target.value
                                })
                            }
                        />

                        <label>Comuna:</label>
                        <input
                            type="text"
                            value={usuarioEditando.comuna.nombre_comuna}
                            onChange={(e) =>
                                setUsuarioEditando({
                                    ...usuarioEditando,
                                    comuna: {
                                        ...usuarioEditando.comuna,
                                        nombre_comuna: e.target.value
                                    }
                                })
                            }
                        />

                        <div className="modal-buttons">
                            <button className="btn-edit" onClick={guardarCambios}>
                                Guardar
                            </button>

                            <button
                                className="btn-delete"
                                onClick={() => setUsuarioEditando(null)}
                            >
                                Cancelar
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

export default UsuarioAdmin;