import React from 'react';
import {shallow} from 'enzyme';
import FormAluno from './FormAluno';

describe('Aplicação contador', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FormAluno/>);
  });

  const setValor = (seletor, valor) => {
    wrapper.find(seletor).simulate('change', {target: {value: valor}});
  };

  const getValor = (seletor) => {
    return wrapper.find(seletor).getElement().props.value;
  };

  const preencheFormularioCorretamente = () => {
    setValor('#campo-nome',  'Fulano de Tal');
    setValor('#campo-cpf',   '138.921.370-64');
    setValor('#campo-email', 'email@exemplo.com');
  };

  test('inicialmente, não deve ter mensagem alguma na tela', () => {
    expect(wrapper.find('#mensagem-sucesso').text()).toBe('');
  });

  test('deve limpar o formulário e exibir mensagem de sucesso quando cadastra', () => {
    preencheFormularioCorretamente();
    wrapper.find('#btn-cadastrar').simulate('click');
    expect(wrapper.find('#mensagem-sucesso').text()).toBe('Aluno cadastrado com sucesso');
    // Verifico se o formulário está vazio
    expect(getValor('#campo-nome')).toBe('');
    expect(getValor('#campo-cpf')).toBe('');
    expect(getValor('#campo-email')).toBe('');
  });

  test('não deve aceitar cadastrar um formulário vazio', () => {
    // não preencho o formulário
    wrapper.find('#btn-cadastrar').simulate('click'); // clico no cadastrar
    // não deve exibir a mensagem de sucesso
    expect(wrapper.find('#mensagem-sucesso').text()).toBe('');
    // deve exibir erros
    expect(wrapper.find('#mensagem-erro').text()).not.toBe('');
  });
});
