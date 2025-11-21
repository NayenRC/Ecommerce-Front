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
            const user = {
                correoElectronico: form.correo,
                clave: form.contrasena
            };

            const res = await UserService.login(user);

            generarMensaje("Sesión iniciada correctamente", "success");

            // guardar el usuario sin la clave
            localStorage.setItem("user", JSON.stringify(res.data));

            navigate("/"); // redirige al home
        } catch (error) {
            generarMensaje("Credenciales incorrectas", "error");
        }
    };

    // Inyecta onChange y value dentro de los inputs del loginData
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