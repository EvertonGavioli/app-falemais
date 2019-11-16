import React from 'react';
import {Text, ScrollView} from 'react-native';

import {
  Container,
  Title,
  FieldContainer,
  StyledPicker,
  StyledInput,
  TitleWithPlan,
  PriceWithPlan,
  TitleWithoutPlan,
  PriceWithoutPlan,
} from './styles';

export default function Dashboard() {
  return (
    <Container>
      <ScrollView>
        <Title>Simule os benefícios do plano FaleMais</Title>

        <FieldContainer>
          <Text>Origem:</Text>
          <StyledPicker mode="dropdown">
            <StyledPicker.Item label="Java" value="java" />
            <StyledPicker.Item label="JavaScript" value="js" />
          </StyledPicker>
        </FieldContainer>

        <FieldContainer>
          <Text>Destino:</Text>
          <StyledPicker mode="dropdown">
            <StyledPicker.Item label="Java" value="java" />
            <StyledPicker.Item label="JavaScript" value="js" />
          </StyledPicker>
        </FieldContainer>

        <FieldContainer>
          <Text>Minutos:</Text>
          <StyledInput keyboardType="numeric" />
        </FieldContainer>

        <FieldContainer>
          <Text>Plano FaleMais:</Text>
          <StyledPicker mode="dropdown">
            <StyledPicker.Item label="Java" value="java" />
            <StyledPicker.Item label="JavaScript" value="js" />
          </StyledPicker>
        </FieldContainer>

        <TitleWithPlan>Com FaleMais</TitleWithPlan>
        <PriceWithPlan>R$ 10.000,00</PriceWithPlan>

        <TitleWithoutPlan>Sem FaleMais</TitleWithoutPlan>
        <PriceWithoutPlan>R$ 20.000,00</PriceWithoutPlan>
      </ScrollView>
    </Container>
  );
}
