import { formatPrice } from '~/utils/format';
import {
  getTariff,
  calculatePriceWithPlan,
  calculatePriceWithoutPlan,
} from '~/components/Calculator/calculatorUtils';

describe('Testes unitários do componente', () => {
  it('Deve retornar a tarifa correta de acordo com a origem e destino', () => {
    expect(getTariff('011', '016')).toBe(1.9);
    expect(getTariff('016', '011')).toBe(2.9);
    expect(getTariff('011', '017')).toBe(1.7);
    expect(getTariff('017', '011')).toBe(2.7);
    expect(getTariff('011', '018')).toBe(0.9);
    expect(getTariff('018', '011')).toBe(1.9);
  });

  it('Deve retornar o preço de acordo com a tarifa, tempo e plano', () => {
    const tariff = getTariff('011', '016');
    const withPlan = calculatePriceWithPlan(tariff, 20, 30);
    const withoutPlan = calculatePriceWithoutPlan(tariff, 20);

    expect(withPlan).toBe('0.00');
    expect(withoutPlan).toBe('38.00');
  });

  it('Deve retornar o preço de acordo com a tarifa, tempo e plano', () => {
    const tariff = getTariff('011', '017');
    const withPlan = calculatePriceWithPlan(tariff, 80, 60);
    const withoutPlan = calculatePriceWithoutPlan(tariff, 80);

    expect(withPlan).toBe('37.40');
    expect(withoutPlan).toBe('136.00');
  });

  it('Deve retornar o preço de acordo com a tarifa, tempo e plano', () => {
    const tariff = getTariff('018', '011');
    const withPlan = calculatePriceWithPlan(tariff, 200, 120);
    const withoutPlan = calculatePriceWithoutPlan(tariff, 200);

    expect(withPlan).toBe('167.20');
    expect(withoutPlan).toBe('380.00');
  });

  it('Deve retornar undefined quando tarifa não existe', () => {
    const tariff = getTariff('018', '017');
    expect(tariff).toBeUndefined();
  });
});

describe('Testes unitários funções utils', () => {
  it('Deve retornar um número no formato de moeda em R$', () => {
    const priceFormatted = formatPrice(10000).replace(/\s/g, '');
    const priceExpected = 'R$10.000,00';

    expect(priceFormatted).toBe(priceExpected);
  });
});
