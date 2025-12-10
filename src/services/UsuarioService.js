import axiosClient from "./AxiosClientService";

const API_URL = "usuarios";

class UserService {
    login(usuario) {
        return axiosClient.post(`${API_URL}/login`, usuario);
    }

    createUser(usuario) {
        return axiosClient.post(`${API_URL}`, usuario);
    }

    getAll() {
        return axiosClient.get(API_URL);
    }

    getById(id) {
        return axiosClient.get(`${API_URL}/${id}`);
    }

    updateUser(id, data) {
        return axiosClient.put(`${API_URL}/${id}`, data);
    }

    deleteUser(id) {
        return axiosClient.delete(`${API_URL}/${id}`);
    }
}

export default new UserService();

