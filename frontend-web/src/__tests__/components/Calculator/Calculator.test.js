import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Calculator from '~/components/Calculator';

afterEach(cleanup);

describe('Testes do Componente Calculadora de Planos', () => {
  it('Deve renderizar corretamete os elementos', () => {
    const { getByTestId } = render(<Calculator />);

    expect(getByTestId('dropdown-origin')).toBeTruthy();
    expect(getByTestId('dropdown-destiny')).toBeTruthy();
    expect(getByTestId('input-minutes')).toBeTruthy();
    expect(getByTestId('dropdown-plans')).toBeTruthy();
    expect(getByTestId('price-with-plan')).toBeTruthy();
    expect(getByTestId('price-without-plan')).toBeTruthy();
  });

  it('Deve retornar os minutos informados com no máximo cinco digitos', () => {
    const { getByTestId } = render(<Calculator />);

    fireEvent.change(getByTestId('input-minutes'), { target: { value: 20 } });
    expect(getByTestId('input-minutes').value).toBe('20');

    fireEvent.change(getByTestId('input-minutes'), {
      target: { value: 20000000 },
    });
    expect(getByTestId('input-minutes').value).toBe('20000');
  });

  it('Deve retornar os preços calculados após preencher todos os campos', () => {
    const { getByText, getByTestId } = render(<Calculator />);

    const origin = getByTestId('dropdown-origin').querySelector('input');
    const destiny = getByTestId('dropdown-destiny').querySelector('input');
    const minutes = getByTestId('input-minutes');
    const plan = getByTestId('dropdown-plans').querySelector('input');

    fireEvent.change(origin, { target: { value: '011' } });
    fireEvent.keyDown(origin, { keyCode: 12, key: 'Enter' });

    fireEvent.change(destiny, { target: { value: '016' } });
    fireEvent.keyDown(destiny, { keyCode: 12, key: 'Enter' });

    fireEvent.change(minutes, { target: { value: 20 } });

    fireEvent.change(plan, { target: { value: 'FaleMais 30' } });
    fireEvent.keyDown(plan, { keyCode: 12, key: 'Enter' });

    expect(getByText('R$ 0,00')).toBeTruthy();
    expect(getByText('R$ 38,00')).toBeTruthy();
  });
});
