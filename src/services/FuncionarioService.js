import axios from 'axios';

const FUNCIONARIO_API_BASE_URL = "http://localhost:8080/api/v1/funcionarios";

class FuncionarioService {

    getFuncionarios() {
        return axios.get(FUNCIONARIO_API_BASE_URL);
    }

    salvarFuncionario(funcionario) {
        return axios.post(FUNCIONARIO_API_BASE_URL, funcionario);
    }

    getFuncionarioById(funcionarioId) {
        return axios.get(FUNCIONARIO_API_BASE_URL + '/' + funcionarioId);
    }

    atualizarFuncionario(funcionario, funcionarioId) {
        return axios.put(FUNCIONARIO_API_BASE_URL + '/' + funcionarioId, funcionario);
    }

}

export default new FuncionarioService()