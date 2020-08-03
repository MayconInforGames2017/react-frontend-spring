import React, { Component } from 'react';
import FuncionarioService from '../services/FuncionarioService';

class CadastrarFuncionarioComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            primeiroNome: '',
            segundoNome: '',
            emailId: ''
        }

        this.changePrimeiroNomeHandler = this.changePrimeiroNomeHandler.bind(this);
        this.changeSegundoNomeHandler = this.changeSegundoNomeHandler.bind(this);
        this.cadastrarFuncionario = this.cadastrarFuncionario.bind(this);
    }

    componentDidMount() {
        FuncionarioService.getFuncionarioById(this.state.id).then( (res) =>{
            let funcionario = res.data;
            this.setState({primeiroNome: funcionario.primeiroNome,
                segundoNome: funcionario.segundoNome,
                emailId: funcionario.emailId
            });
        });
    }

    cadastrarFuncionario = (f) => {
        f.preventDefault();
        let funcionario = {primeiroNome: this.state.primeiroNome, segundoNome: this.state.segundoNome, emailId: this.state.emailId};
        console.log('funcionario => ' + JSON.stringify(funcionario));

        FuncionarioService.salvarFuncionario(funcionario).then(res => {
            this.props.history.push('/funcionarios');
        });
    }

    changePrimeiroNomeHandler = (event) => {
        this.setState({primeiroNome: event.target.value});
    }

    changeSegundoNomeHandler = (event) => {
        this.setState({segundoNome: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({emailId: event.target.value});
    }

    cancelar() {
        this.props.history.push('/funcionarios');
    }

    render() {
        return (
            <div>
                    <div className="container">
                        <div className="row"> 
                            <div className="card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Cadastrar Funcionario</h3>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Primeiro Nome</label>
                                            <input placeholder="Primeiro Nome" name="primeiroNome" className="form-control"
                                                value={this.state.primeiroNome} onChange={this.changePrimeiroNomeHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Segundo Nome</label>
                                            <input placeholder="Segundo Nome" name="segundoNome" className="form-control"
                                                value={this.state.segundoNome} onChange={this.changeSegundoNomeHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Endereco de E-mail</label>
                                            <input placeholder="Endereco de E-mail" name="emailId" className="form-control"
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-sucess" onClick={this.cadastrarFuncionario}>Cadastrar</button>
                                        <button className="btn btn-danger" onClick={this.cancelar.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
            </div>
        );
    }
}

export default CadastrarFuncionarioComponent;