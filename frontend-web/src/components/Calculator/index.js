import React from 'react';

import {
  Container,
  Content,
  CalculatorHeader,
  CalculatorFields,
  DropDown,
} from './styles';

export default function Calculator() {
  return (
    <Container>
      <Content>
        <CalculatorHeader>
          <strong>Origem</strong>
          <strong>Destino</strong>
          <strong>Tempo</strong>
          <strong>Plano FaleMais</strong>
          <strong>Com FaleMais</strong>
          <strong>Sem FaleMais</strong>
        </CalculatorHeader>

        <CalculatorFields>
          <DropDown />
          <DropDown />
          <h1>3</h1>
          <DropDown />
          <h1>5</h1>
          <h1>6</h1>
        </CalculatorFields>
      </Content>
    </Container>
  );
}
