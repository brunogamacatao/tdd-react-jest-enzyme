import React, {useState} from 'react'

const criaFormularioVazio = () => {
  return {
    nome: '',
    cpf: '',
    email: ''
  };
};

export default function FormAluno() {
  const [mensagem, setMensagem] = useState('');
  const [erros, setErros] = useState([]);
  const [aluno, setAluno] = useState(criaFormularioVazio());

  const cadastrar = (evento) => {
    evento && evento.preventDefault();

    let novosErros = [];

    if (aluno.nome  === '') novosErros.push('O nome é obrigatório');
    if (aluno.cpf   === '') novosErros.push('O cpf é obrigatório');
    if (aluno.email === '') novosErros.push('O email é obrigatório');

    setErros(novosErros);
    setMensagem('');

    if (novosErros.length === 0) {
      setAluno(criaFormularioVazio());
      setMensagem('Aluno cadastrado com sucesso');
    }
  };

  const setValor = (evento, campo) => {
    setAluno({...aluno, [campo]: evento.target.value});
  };  

  const renderErro = (erro) => {
    return (
      <li>{erro}</li>
    );
  };

  return (
    <div>
      <h3 id="mensagem-sucesso">{mensagem}</h3>
      <h3 id="mensagem-erro"><ul>{erros.map(renderErro)}</ul></h3>
      <form>
        <p><label>Nome: </label>  <input type="text" id="campo-nome"  value={aluno.nome}  onChange={(e) => setValor(e, 'nome')}/></p>
        <p><label>CPF: </label>   <input type="text" id="campo-cpf"   value={aluno.cpf}   onChange={(e) => setValor(e, 'cpf')}/></p>
        <p><label>E-mail: </label><input type="text" id="campo-email" value={aluno.email} onChange={(e) => setValor(e, 'email')}/></p>
        <button id="btn-cadastrar" onClick={(e) => cadastrar(e)}>Cadastrar</button>
      </form>
    </div>
  )
}
