import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react-native';
import {toHaveProp} from '@testing-library/jest-native/extend-expect';

import CalculatePrice from '../../../src/services/Calculator/CalculatePrice';
import Locale from '../../../src/services/Calculator/Locale';
import Plan from '../../../src/services/Calculator/Plan';
import Tariff from '../../../src/services/Calculator/Tariff';

import {formatPrice} from '../../../src/utils/format';

import Calculator from '../../../src/components/Calculator';

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

  it('Deve possuir os preços calculados após preencher os minutos', () => {
    const {getByText, getByTestId} = render(<Calculator />);

    fireEvent.changeText(getByTestId('input-minutes'), '20');

    expect(getByText('R$0,00')).toBeTruthy();
    expect(getByText('R$38,00')).toBeTruthy();
  });
});

describe('Testes unitários das funções utils', () => {
  it('Deve retornar um número no formato de moeda em R$', () => {
    const priceFormatted = formatPrice(10000).replace(/\s/g, '');
    const priceExpected = 'R$10.000,00';

    expect(priceFormatted).toBe(priceExpected);
  });
});
