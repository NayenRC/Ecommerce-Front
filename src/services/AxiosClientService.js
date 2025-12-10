import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://ecommerce-fp09.onrender.com/api/v1/",
});

// Agregar el token automáticamente
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default axiosClient;
