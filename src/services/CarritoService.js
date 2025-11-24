import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/carritos";

class CarritoService {
    getAll() {
        return axios.get(API_URL);
    }

    create(carrito) {
        return axios.post(API_URL, carrito);
    }

    delete(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new CarritoService();
