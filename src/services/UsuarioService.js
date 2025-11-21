import axios from 'axios';

// URL de tu backend en Render
const API_URL = 'https://ecommerce-fp09.onrender.com/api/v1/usuarios';

class UserService {

    // LOGIN -> POST /api/v1/usuarios/login
    login(usuario) {
        return axios.post(`${API_URL}/login`, usuario);
    }

    // REGISTRO -> POST /api/v1/usuarios
    createUser(usuario) {
        return axios.post(`${API_URL}`, usuario);
    }

    // OBTENER TODOS
    getAll() {
        return axios.get(`${API_URL}`);
    }

    // OBTENER POR ID
    getById(id) {
        return axios.get(`${API_URL}/${id}`);
    }
}

export default new UserService();
