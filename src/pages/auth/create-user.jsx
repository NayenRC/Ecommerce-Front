import React, { useState } from "react";
import { Link } from "react-router-dom";
import Forms from '../../components/templates/Forms';
import UserService from '../../services/UsuarioService';
import { generarMensaje } from '../../utils/GenerarMensaje';
import "../../styles/pages/Create-user.css";
import { useEffect } from "react";
import ComunaService from "../../services/ComunaService";


const CreateUser = () => {
    const [form, setForm] = useState({
        nombre: "",
        direccion: "",
        correo: "",
        telefono: "",
        comuna: "",
        contrasena: "",
        confirmar: ""
    });

    const [loading, setLoading] = useState(false);
    const [comunas, setComunas] = useState([]);

    // -------------------------------
    // 🔵  HANDLE CHANGE
    // -------------------------------
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // -------------------------------
    // 🟢  Cargar comunas desde API
    // -------------------------------
    useEffect(() => {
        ComunaService.getAll()
            .then((res) => setComunas(res.data))
            .catch(() => generarMensaje("Error cargando comunas", "error"));
    }, []);

    // -------------------------------
    // 🔴 HANDLE SUBMIT
    // -------------------------------
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validaciones
        if (!form.nombre || !form.correo || !form.contrasena || !form.confirmar) {
            generarMensaje("Completa los campos obligatorios", "warning");
            return;
        }

        if (form.contrasena !== form.confirmar) {
            generarMensaje("Las contraseñas no coinciden", "error");
            return;
        }

        setLoading(true);

        try {
            // Objeto EXACTO que tu backend necesita
            const usuario = {
                correoElectronico: form.correo,
                nombreUsuario: form.nombre,
                clave: form.contrasena,
                direccion: form.direccion || "",
                telefono: form.telefono || "",

                rol: { rol_id: 2 }, // obligatorio aunque backend lo reasigne

                comuna: {
                    comuna_id: Number(form.comuna) // select obligatorio
                }
            };

            await UserService.createUser(usuario);

            generarMensaje("Usuario registrado correctamente", "success");

            // Limpiar formulario
            setForm({
                nombre: "",
                direccion: "",
                correo: "",
                telefono: "",
                comuna: "",
                contrasena: "",
                confirmar: ""
            });

        } catch (error) {
            const msg =
                error.response?.data?.message ||
                error.response?.data ||
                "Error al crear usuario";

            generarMensaje(msg, "error");
        } finally {
            setLoading(false);
        }
    };

    // -------------------------------
    // 🔧   FORM DATA (para <Forms />)
    // -------------------------------
    const formData = [
        {
            type: "text",
            text: [
                {
                    content: "Registro de Usuario",
                    variant: "h1",
                    className: "register-title"
                }
            ]
        },

        { type: "label", text: [{ content: "Nombre:*", className: "register-label" }] },
        {
            type: "inputs",
            inputs: [
                {
                    type: "text",
                    placeholder: "Ej: Nayen Román",
                    name: "nombre",
                    value: form.nombre,
                    onChange: handleChange,
                    className: "register-input"
                }
            ]
        },

        { type: "label", text: [{ content: "Dirección:", className: "register-label" }] },
        {
            type: "inputs",
            inputs: [
                {
                    type: "text",
                    placeholder: "Ej: Av. Siempre Viva 123",
                    name: "direccion",
                    value: form.direccion,
                    onChange: handleChange,
                    className: "register-input"
                }
            ]
        },

        { type: "label", text: [{ content: "Correo Electrónico:*", className: "register-label" }] },
        {
            type: "inputs",
            inputs: [
                {
                    type: "email",
                    placeholder: "Ej: ejemplo@gmail.com",
                    name: "correo",
                    value: form.correo,
                    onChange: handleChange,
                    className: "register-input"
                }
            ]
        },

        { type: "label", text: [{ content: "Teléfono:", className: "register-label" }] },
        {
            type: "inputs",
            inputs: [
                {
                    type: "tel",
                    placeholder: "Ej: 979533255",
                    name: "telefono",
                    value: form.telefono,
                    onChange: handleChange,
                    className: "register-input"
                }
            ]
        },

        // SELECT COMUNAS
        { type: "label", text: [{ content: "Comuna:*", className: "register-label" }] },
        {
            type: "inputs",
            inputs: [
                {
                    type: "select",
                    name: "comuna",
                    value: form.comuna,
                    onChange: handleChange,
                    className: "register-input",
                    options: [
                        { value: "", label: "Seleccione una comuna" },
                        ...comunas.map((c) => ({
                            value: c.comuna_id,
                            label: c.nombre_comuna
                        }))
                    ]
                }
            ]
        },

        { type: "label", text: [{ content: "Contraseña:*", className: "register-label" }] },
        {
            type: "inputs",
            inputs: [
                {
                    type: "password",
                    placeholder: "Debe incluir al menos 4 caracteres",
                    name: "contrasena",
                    value: form.contrasena,
                    onChange: handleChange,
                    className: "register-input"
                }
            ]
        },

        { type: "label", text: [{ content: "Confirmar Contraseña:*", className: "register-label" }] },
        {
            type: "inputs",
            inputs: [
                {
                    type: "password",
                    placeholder: "Repita su contraseña",
                    name: "confirmar",
                    value: form.confirmar,
                    onChange: handleChange,
                    className: "register-input"
                }
            ]
        },

        // BOTÓN
        { type: "submit", text: "Registrar", className: "register-btn" },

        // LINK
        {
            type: "text",
            text: [
                {
                    content: (
                        <Link to="/login" className="register-back">
                            ¿Ya tienes una cuenta? Iniciar sesión
                        </Link>
                    ),
                    variant: "p",
                    className: "register-back-container"
                }
            ]
        }
    ];

    return (
        <main className="register-page">
            <form onSubmit={handleSubmit} className="register-card">
                <Forms content={formData} />
            </form>
        </main>
    );
};

export default CreateUser;