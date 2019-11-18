import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react-native';
import {
  toHaveProp,
  toHaveTextContent,
} from '@testing-library/jest-native/extend-expect';

import Calculator from '../../../src/components/Calculator';

afterEach(cleanup);

describe('Testes do Componente Calculadora de Planos', () => {
  it('Deve renderizar corretamente os elementos', () => {
    const {getByTestId} = render(<Calculator />);

    expect(getByTestId('picker-origin')).toBeTruthy();
    expect(getByTestId('picker-destiny')).toBeTruthy();
    expect(getByTestId('input-minutes')).toBeTruthy();
    expect(getByTestId('picker-plans')).toBeTruthy();
    expect(getByTestId('price-with-plan')).toBeTruthy();
    expect(getByTestId('price-without-plan')).toBeTruthy();
  });

  it('Deve carregar os campos com o estado inicial', () => {
    const {getByTestId} = render(<Calculator />);

    expect(getByTestId('picker-origin')).toHaveProp('selectedValue', '011');
    expect(getByTestId('picker-destiny')).toHaveProp('selectedValue', '016');
    expect(getByTestId('input-minutes')).toHaveProp('value', '');
    expect(getByTestId('picker-plans')).toHaveProp(
      'selectedValue',
      'FaleMais30',
    );
  });

  it('Deve retornar os preços calculados após preencher todos os campos', () => {
    const {getByText, getByTestId} = render(<Calculator />);

    fireEvent.valueChange(getByTestId('picker-origin'), '011');
    fireEvent.valueChange(getByTestId('picker-destiny'), '016');
    fireEvent.changeText(getByTestId('input-minutes'), '20');
    fireEvent.valueChange(getByTestId('picker-plans'), 'FaleMais 30');

    expect(getByText('R$0,00')).toBeTruthy();
    expect(getByText('R$38,00')).toBeTruthy();
  });

  it('Deve retornar vazio quando tarifa não encontrada', () => {
    const {getByTestId} = render(<Calculator />);

    fireEvent.valueChange(getByTestId('picker-origin'), '011');
    fireEvent.valueChange(getByTestId('picker-destiny'), '011');
    fireEvent.changeText(getByTestId('input-minutes'), '20');
    fireEvent.valueChange(getByTestId('picker-plans'), 'FaleMais 30');

    expect(getByTestId('price-with-plan')).toHaveTextContent('-');
    expect(getByTestId('price-without-plan')).toHaveTextContent('-');
  });
});
