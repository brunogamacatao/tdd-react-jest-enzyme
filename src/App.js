import React from 'react';
import './App.css';
import Contador from './Contador';
import FormAluno from './FormAluno';

function App() {

  return (
    <div className="container">
      <h1 id="titulo-app">Demonstração de TDD</h1>
      <Contador/>
      <hr/>
      <FormAluno/>
    </div>
  );
}

export default App;
