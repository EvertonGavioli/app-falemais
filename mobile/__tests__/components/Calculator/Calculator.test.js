import {getTariff} from '../../../src/domain/Calculator';

describe('Testes unitários de funções usadas no componente', () => {
  it('Deve retornar a tarifa correta de acordo com a origem e destino', () => {
    expect(getTariff('011', '016')).toBe(1.9);
    expect(getTariff('016', '011')).toBe(2.9);
    expect(getTariff('011', '017')).toBe(1.7);
    expect(getTariff('017', '011')).toBe(2.7);
    expect(getTariff('011', '018')).toBe(0.9);
    expect(getTariff('018', '011')).toBe(1.9);
  });
});
