import React, { Component } from 'react';

class ListFuncionarioComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                funcionarios: []
        }
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista de Funcionarios</h2>
                <div className="row">
                        <table className="table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Primeiro nome</th>
                                    <th>Segundo nome</th>
                                    <th>E-mail</th>
                                    <th>Ação</th>
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