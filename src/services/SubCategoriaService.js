import axios from "axios";

const API_URL = "https://ecommerce-fp09.onrender.com/api/v1/categoria";

class SubcategoriaService {
  getAll() {
    return axios.get(API_URL);
  }
}

export default new SubcategoriaService();
