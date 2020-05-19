import React, {useState} from 'react'

export default function Contador() {
  const [contador, setContador] = useState(0);

  const incrementa = () => setContador(contador + 1);
  const decrementa = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="contador">
      <div className="jumbotron">
        <h1 className="display-4" id="titulo-contador">Contador</h1>
        <p className="lead" id="valor-contador">{contador}</p>
        <button className="btn btn-lg btn-primary" id="botao-incrementa" onClick={incrementa}>Incrementa</button>
        <button className="btn btn-lg btn-danger" id="botao-decrementa" onClick={decrementa}>Decrementa</button>
      </div>
    </div>
  );
}
