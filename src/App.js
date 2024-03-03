import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Esta es mi pagina web | Adderly Mendoza Nina
        </h1>
        <div>
          ESTA ES UNA PRUEBA
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className='mt-10 bg-black'>
          HOLA
        </div>
      </header>
    </div>
  );
}

export default App;
