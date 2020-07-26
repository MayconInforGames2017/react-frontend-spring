import axios from 'axios';

const FUNCIONARIO_API_BASE_URL = "http://localhost:8080/api/v1/funcionarios";

class FuncionarioService {

    getFuncionarios() {
        return axios.get(FUNCIONARIO_API_BASE_URL);
    }

}

export default new FuncionarioService()