import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Forms from "../../components/templates/Forms"

import UserService from "../../services/UsuarioService";
import { generarMensaje } from "../../utils/GenerarMensaje";
import "../../styles/pages/Login.css";
import loginData from "./data/loginData";

const Login = () => {
    const [form, setForm] = useState({
        correo: "",
        contrasena: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const credenciales = {
                correoElectronico: form.correo,
                clave: form.contrasena
            };

            const res = await UserService.login(credenciales);

            console.log("USUARIO LOGUEADO =>", res.data);


            generarMensaje("Sesión iniciada correctamente", "success");

            const usuario = res.data;
            console.log("USUARIO LOGUEADO =>", usuario);
            console.log("ROL =>", usuario.rol);
            console.log("ROL ID =>", usuario.rol?.rol_id);
            localStorage.setItem("user", JSON.stringify(usuario));
            if (usuario.rol?.rol_id === 1) {
                navigate("/admin/dashboard"); 
            } else {
                navigate("/");
            }

        } catch (error) {
            generarMensaje("Credenciales incorrectas", "error");
        }
    };

    const dataConEventos = loginData.map((item) => {
        if (item.type === "inputs") {
            item.inputs = item.inputs.map((inp) => ({
                ...inp,
                value: form[inp.name],
                onChange: handleChange
            }));
        }
        return item;
    });

    return (
        <main className="login-page">
            <form onSubmit={handleSubmit} className="login-card">
                <Forms content={dataConEventos} />
            </form>
        </main>
    );
};

export default Login;