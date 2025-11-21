
import { Link } from "react-router-dom";

const loginData = [
    {
        type: "text",
        text: [
            {
                content: "Iniciar sesión",
                variant: "h1",
                className: "login-title"
            }
        ]
    },

    // 🔥 TEXTO: ¿No tienes cuenta? Regístrate aquí
    {
        type: "text",
        text: [
            {
                content: (
                    <>
                        ¿Todavía no tienes una cuenta?{" "}
                        <Link to="/create-user" className="login-register-link">
                            Registrarse aquí.
                        </Link>
                    </>
                ),
                variant: "p",
                className: "login-subtitle"
            }
        ]
    },

    {
        type: "label",
        text: [
            {
                content: "Correo Electrónico: *",
                className: "login-label"
            }
        ]
    },
    {
        type: "inputs",
        inputs: [
            {
                type: "email",
                placeholder: "Ej: ejemplo@gmail.com",
                name: "correo",
                required: true,
                className: "login-input"
            }
        ]
    },

    {
        type: "label",
        text: [
            {
                content: "Contraseña: *",
                className: "login-label"
            }
        ]
    },
    {
        type: "inputs",
        inputs: [
            {
                type: "password",
                placeholder: "Debe incluir al menos 4 caracteres",
                name: "contrasena",
                required: true,
                className: "login-input"
            }
        ]
    },

    {
        type: "submit",
        text: "Ingresar",
        className: "login-btn"
    },

    {
        type: "text",
        text: [
            {
                content: (
                    <Link to="/nueva_contraseña" className="login-forgot">
                        ¿Olvidaste tu contraseña?
                    </Link>
                ),
                variant: "p",
                className: "login-forgot-container"
            }
        ]
    }
];

export default loginData;
