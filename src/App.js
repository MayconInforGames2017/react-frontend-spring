import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListFuncionarioComponent from './components/ListFuncionarioComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CadastrarFuncionarioComponent from './components/CadastrarFuncionarioComponent';
import AtualizarFuncionarioComponent from './components/AtualizarFuncionarioComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path="/" exact component= { ListFuncionarioComponent }></Route>
                          <Route path="/funcionarios" component= { ListFuncionarioComponent }></Route>
                          <Route path="/add-funcionario" component= { CadastrarFuncionarioComponent }></Route>
                          <Route path="/update-funcionario/:id" component= { AtualizarFuncionarioComponent }></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
