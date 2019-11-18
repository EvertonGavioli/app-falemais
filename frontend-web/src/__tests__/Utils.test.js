import { formatPrice } from '~/utils/format';

describe('Testes unitários das funções utils', () => {
  it('Deve retornar um número no formato de moeda em R$', () => {
    const priceFormatted = formatPrice(10000).replace(/\s/g, '');
    const priceExpected = 'R$10.000,00';

    expect(priceFormatted).toBe(priceExpected);
  });
});
