import React from 'react';

import data from '~/data/server';

import {
  Container,
  Content,
  CalculatorHeader,
  CalculatorFields,
  DropDown,
  Input,
  Result,
} from './styles';

export default function Calculator() {
  const localeOptions = data.localesDDD.map(locale => ({
    value: locale,
    label: locale,
  }));

  const plansOptions = data.plans.map(plan => ({
    value: plan.minutes,
    label: plan.description,
  }));

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
          <DropDown options={localeOptions} />
          <DropDown options={localeOptions} />
          <Input />
          <DropDown options={plansOptions} />
          <Result>R$100.000,00</Result>
          <Result>R$100.000,00</Result>
        </CalculatorFields>
      </Content>
    </Container>
  );
}
