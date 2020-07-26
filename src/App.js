import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListFuncionarioComponent from './components/ListFuncionarioComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
        <div className="container">
          <ListFuncionarioComponent />
        </div>
      <FooterComponent />
    </div>
    
  );
}

export default App;
