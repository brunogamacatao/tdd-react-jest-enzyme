import React from 'react';
import {shallow} from 'enzyme';
import Contador from './Contador';

describe('Aplicação contador', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Contador/>);
  });

  test('deveria exibir o título "Contador"', () => {
    expect(wrapper.find('#titulo-contador').text()).toBe("Contador");
  });
  
  test('deveria exibir o contador zerado inicialmente', () => {
    expect(wrapper.find('#valor-contador').text()).toBe('0');
  });

  test('deveria incrementar o contador quando clica no botão "Incrementa"', () => {
    wrapper.find('#botao-incrementa').simulate('click');
    expect(wrapper.find('#valor-contador').text()).toBe('1');
  });

  test('deveria decrementar o contador quando clica no botão "Decrementa"', () => {
    wrapper.find('#botao-incrementa').simulate('click'); // inc => contador = 1
    wrapper.find('#botao-incrementa').simulate('click'); // inc => contador = 2
    wrapper.find('#botao-incrementa').simulate('click'); // inc => contador = 3
    wrapper.find('#botao-decrementa').simulate('click'); // dec => contador = 2
    expect(wrapper.find('#valor-contador').text()).toBe('2');
  });

  test('o contador não pode ter valores negativos', () => {
    wrapper.find('#botao-incrementa').simulate('click'); // inc => contador = 1
    wrapper.find('#botao-decrementa').simulate('click'); // dec => contador = 0
    wrapper.find('#botao-decrementa').simulate('click'); // dec => contador = 0
    expect(wrapper.find('#valor-contador').text()).toBe('0');
  });
});
