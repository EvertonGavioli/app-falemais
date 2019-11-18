import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import CalculatePrice from '~/services/Calculator/CalculatePrice';
import Locale from '~/services/Calculator/Locale';
import Plan from '~/services/Calculator/Plan';
import Tariff from '~/services/Calculator/Tariff';

import { formatPrice } from '~/utils/format';

import Calculator from '~/components/Calculator';

afterEach(cleanup);

describe('Testes unitários de funções usadas no componente', () => {
  it('Deve retornar a tarifa correta de acordo com a origem e destino', () => {
    expect(Tariff.getTariff('011', '016')).toBe(1.9);
    expect(Tariff.getTariff('016', '011')).toBe(2.9);
    expect(Tariff.getTariff('011', '017')).toBe(1.7);
    expect(Tariff.getTariff('017', '011')).toBe(2.7);
    expect(Tariff.getTariff('011', '018')).toBe(0.9);
    expect(Tariff.getTariff('018', '011')).toBe(1.9);
  });

  it('Deve retornar o preço de acordo com a tarifa, tempo e plano 30', () => {
    const tariff = Tariff.getTariff('011', '016');
    const withPlan = CalculatePrice.calculatePriceWithPlan(tariff, 20, 30);
    const withoutPlan = CalculatePrice.calculatePriceWithoutPlan(tariff, 20);

    expect(withPlan).toBe('0.00');
    expect(withoutPlan).toBe('38.00');
  });

  it('Deve retornar o preço de acordo com a tarifa, tempo e plano 60', () => {
    const tariff = Tariff.getTariff('011', '017');
    const withPlan = CalculatePrice.calculatePriceWithPlan(tariff, 80, 60);
    const withoutPlan = CalculatePrice.calculatePriceWithoutPlan(tariff, 80);

    expect(withPlan).toBe('37.40');
    expect(withoutPlan).toBe('136.00');
  });

  it('Deve retornar o preço de acordo com a tarifa, tempo e plano 120', () => {
    const tariff = Tariff.getTariff('018', '011');
    const withPlan = CalculatePrice.calculatePriceWithPlan(tariff, 200, 120);
    const withoutPlan = CalculatePrice.calculatePriceWithoutPlan(tariff, 200);

    expect(withPlan).toBe('167.20');
    expect(withoutPlan).toBe('380.00');
  });

  it('Deve retornar undefined quando a tarifa não existe', () => {
    const tariff = Tariff.getTariff('018', '017');
    expect(tariff).toBeUndefined();
  });

  it('Deve retornar uma lista de 4 localidades', () => {
    const locales = Locale.localeOptions();
    expect(locales).toHaveLength(4);
  });

  it('Deve retornar uma lista de 3 planos', () => {
    const plans = Plan.plansOptions();
    expect(plans).toHaveLength(3);
  });
});

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

  it('Deve retornar os minutos informados maxlength 5', () => {
    const { getByTestId } = render(<Calculator />);

    fireEvent.change(getByTestId('input-minutes'), { target: { value: 20 } });
    expect(getByTestId('input-minutes').value).toBe('20');

    fireEvent.change(getByTestId('input-minutes'), {
      target: { value: 200000 },
    });
    expect(getByTestId('input-minutes').value).toBe('20000');
  });

  it('Deve possuir os preços calculados após preencher todos os campos', () => {
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

describe('Testes unitários das funções utils', () => {
  it('Deve retornar um número no formato de moeda em R$', () => {
    const priceFormatted = formatPrice(10000).replace(/\s/g, '');
    const priceExpected = 'R$10.000,00';

    expect(priceFormatted).toBe(priceExpected);
  });
});
