import axios from 'axios';

const API_URL = 'https://ecommerce-fp09.onrender.com/api/v1/usuarios';

class UserService {
    login(usuario) {
        return axios.post(`${API_URL}/login`, usuario);
    }

    createUser(usuario) {
        return axios.post(`${API_URL}`, usuario);
    }

    getAll() {
        return axios.get(`${API_URL}`);
    }

    getById(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    updateUser(id, data) {
        return axios.put(`${API_URL}/${id}`, data);
    }

    deleteUser(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new UserService();
