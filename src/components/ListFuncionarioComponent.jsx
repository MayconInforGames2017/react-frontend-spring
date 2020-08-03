import React, { Component } from 'react';
import FuncionarioService from '../services/FuncionarioService';

class ListFuncionarioComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                funcionarios: []
        }
        this.addFuncionario = this.addFuncionario.bind(this);
        this.editFuncionario = this.editFuncionario.bind(this);
        this.deleteFuncionario = this.deleteFuncionario.bind(this);
    }

    deleteFuncionario(id) {
        FuncionarioService.deleteFuncionario(id).then( res => {
            this.setState({funcionarios: this.state.funcionarios.filter(funcionario => funcionario.id !== id)});
        });
    }

    editFuncionario(id) {
        this.props.history.push(`/update-funcionario/${id}`);
    }

    componentDidMount() {
        FuncionarioService.getFuncionarios().then((res) => {
            this.setState({ funcionarios: res.data });
        });
    }

    addFuncionario() {
        this.props.history.push('/add-funcionario');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista de Funcionarios</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addFuncionario}>Cadastrar Funcionario</button>
                </div>
                <div className="row">
                        <table className="table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Primeiro nome</th>
                                    <th>Segundo nome</th>
                                    <th>E-mail</th>
                                    <th>Opções</th>
                                </tr>

                            </thead>

                            <tbody>
                                {
                                    this.state.funcionarios.map(
                                        funcionario =>
                                        <tr key = {funcionario.id}>
                                            <td> { funcionario.primeiroNome } </td>
                                            <td> { funcionario.segundoNome } </td>
                                            <td> { funcionario.emailId } </td>
                                            <td>
                                                <button onClick={ () => this.editFuncionario(funcionario.id)} className="btn btn-info">Atualizar</button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteFuncionario(funcionario.id)} className="btn btn-danger">Excluir</button>
                                            </td>

                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>

                </div>

            </div>
        );
    }
}

export default ListFuncionarioComponent;