import axios from "axios";

const API_URL = "https://ecommerce-fp09.onrender.com/api/v1/productos";

class ProductosService {
  getAll() {
    return axios.get(API_URL);
  }

  getById(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  buscarPorNombre(nombre) {
    return axios.get(`${API_URL}/buscar/nombre`, {
      params: { nombre }
    });
  }
  
  crear(data) {
    return axios.post(API_URL, data);
  }

  actualizar(id, data) {
    return axios.put(`${API_URL}/${id}`, data);
  }

  patch(id, data) {
    return axios.patch(`${API_URL}/${id}`, data);
  }

  eliminar(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

export default new ProductosService();

