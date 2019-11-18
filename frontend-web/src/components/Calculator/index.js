import React, { useState, useMemo } from 'react';
import { formatPrice } from '~/utils/format';

import Tariff from '~/services/Calculator/Tariff';
import Locale from '~/services/Calculator/Locale';
import Plan from '~/services/Calculator/Plan';
import CalculatePrice from '~/services/Calculator/CalculatePrice';

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

  const calculatedPrices = useMemo(() => {
    if (origin && destiny && minutes && plan) {
      const tariff = Tariff.getTariff(origin, destiny);

      if (tariff) {
        const priceWithPlan = CalculatePrice.calculatePriceWithPlan(
          Number(tariff),
          Number(minutes),
          Number(plan)
        );

        const priceWithoutPlan = CalculatePrice.calculatePriceWithoutPlan(
          Number(tariff),
          Number(minutes)
        );

        return {
          withPlan: formatPrice(priceWithPlan),
          withoutPlan: formatPrice(priceWithoutPlan),
        };
      }
      return {};
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
          <div data-testid="dropdown-origin">
            <DropDown
              options={Locale.localeOptions()}
              onChange={e => setOrigin(e.value)}
            />
          </div>
          <div data-testid="dropdown-destiny">
            <DropDown
              options={Locale.localeOptions()}
              onChange={e => setDestiny(e.value)}
            />
          </div>
          <div>
            <Input
              data-testid="input-minutes"
              onChange={e => handleChangeMinutes(e.target)}
            />
          </div>
          <div data-testid="dropdown-plans">
            <DropDown
              options={Plan.plansOptions()}
              onChange={e => setPlan(e.value)}
            />
          </div>
          <Result data-testid="price-with-plan">
            {calculatedPrices.withPlan ? calculatedPrices.withPlan : '-'}
          </Result>
          <Result data-testid="price-without-plan">
            {calculatedPrices.withoutPlan ? calculatedPrices.withoutPlan : '-'}
          </Result>
        </CalculatorFields>
      </Content>
    </Container>
  );
}
