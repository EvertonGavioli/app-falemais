import React, { useState, useMemo } from 'react';
import { formatPrice } from '~/utils/format';

import {
  localeOptions,
  plansOptions,
  getTariff,
  calculatePriceWithPlan,
  calculatePriceWithoutPlan,
} from './calculatorUtils';

import {
  Container,
  Content,
  CalculatorHeader,
  CalculatorFields,
  DropDown,
  Input,
  Result,
} from './styles';

const MAX_LENGTH_MINUTES = 5;

export default function Calculator() {
  const [origin, setOrigin] = useState('');
  const [destiny, setDestiny] = useState('');
  const [minutes, setMinutes] = useState(0);
  const [plan, setPlan] = useState(0);

  const formattedPrices = useMemo(() => {
    if (origin && destiny && minutes && plan) {
      const tariff = getTariff(origin, destiny);

      if (tariff) {
        const priceWithPlan = calculatePriceWithPlan(
          Number(tariff),
          Number(minutes),
          Number(plan)
        );

        const priceWithoutPlan = calculatePriceWithoutPlan(
          Number(tariff),
          Number(minutes)
        );

        return {
          withPlan: formatPrice(priceWithPlan),
          withoutPlan: formatPrice(priceWithoutPlan),
        };
      }
    }
    return {};
  }, [origin, destiny, minutes, plan]);

  function handleChangeMinutes(inputElement) {
    if (inputElement) {
      if (inputElement.value.length > MAX_LENGTH_MINUTES) {
        inputElement.value = inputElement.value.slice(0, MAX_LENGTH_MINUTES);
      }

      if (inputElement.value >= 0) {
        setMinutes(inputElement.value);
      }
    }
  }

  return (
    <Container>
      <Content>
        <CalculatorHeader>
          <strong>Origem</strong>
          <strong>Destino</strong>
          <strong>Minutos</strong>
          <strong>Plano FaleMais</strong>
          <strong>Com FaleMais</strong>
          <strong>Sem FaleMais</strong>
        </CalculatorHeader>
        <CalculatorFields>
          <DropDown
            options={localeOptions}
            onChange={e => setOrigin(e.value)}
          />
          <DropDown
            options={localeOptions}
            onChange={e => setDestiny(e.value)}
          />
          <Input onInput={e => handleChangeMinutes(e.target)} />
          <DropDown options={plansOptions} onChange={e => setPlan(e.value)} />
          <Result>
            {formattedPrices.withPlan ? formattedPrices.withPlan : '-'}
          </Result>
          <Result>
            {formattedPrices.withoutPlan ? formattedPrices.withoutPlan : '-'}
          </Result>
        </CalculatorFields>
      </Content>
    </Container>
  );
}
