import CalculatePrice from '~/services/Calculator/CalculatePrice';
import Locale from '~/services/Calculator/Locale';
import Plan from '~/services/Calculator/Plan';
import Tariff from '~/services/Calculator/Tariff';

describe('Testes unitários de funções usadas no componente Calculatora', () => {
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
