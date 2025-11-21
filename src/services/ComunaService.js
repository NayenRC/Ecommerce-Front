import axios from "axios";

const BASE_URL = "https://ecommerce-fp09.onrender.com/api/v1/comunas";

class ComunaService {
    getAll() {
        return axios.get(BASE_URL);
    }
}

export default new ComunaService();

