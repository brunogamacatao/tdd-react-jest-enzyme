import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import Contador from './Contador';
import FormAluno from './FormAluno';

describe('Aplicação contador', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App/>);
  });

  test('deve exibir o título da aplicação', () => {
    console.log(wrapper.debug());
    expect(wrapper.find('#titulo-app').text()).toBe('Demonstração de TDD');
  });
  
  test('deve ter um componente contador', () => {
    expect(wrapper.contains(<Contador/>)).toBeTruthy();
  });

  test('deve ter um componente FormAluno', () => {
    expect(wrapper.contains(<FormAluno/>)).toBeTruthy();
  });
});
