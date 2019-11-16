import React, {useState, useMemo} from 'react';
import {Text, ScrollView} from 'react-native';

import {formatPrice} from '../../utils/format';

import {
  localeOptions,
  plansOptions,
  getTariff,
  calculatePriceWithPlan,
  calculatePriceWithoutPlan,
} from '../../domain/Calculator';

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

export default function Calculator() {
  const [origin, setOrigin] = useState('');
  const [destiny, setDestiny] = useState('');
  const [minutes, setMinutes] = useState('20');
  const [plan, setPlan] = useState(0);

  const calculatedPrices = useMemo(() => {
    if (origin && destiny && minutes && plan) {
      const tariff = getTariff(origin, destiny);

      if (tariff) {
        const priceWithPlan = calculatePriceWithPlan(
          Number(tariff),
          Number(minutes),
          Number(plan),
        );

        const priceWithoutPlan = calculatePriceWithoutPlan(
          Number(tariff),
          Number(minutes),
        );

        return {
          withPlan: formatPrice(priceWithPlan),
          withoutPlan: formatPrice(priceWithoutPlan),
        };
      }
    }
    return {};
  }, [origin, destiny, minutes, plan]);

  function handleChangeMinutes(text) {
    setMinutes(String(text).replace(/[^0-9]/g, ''));
  }

  return (
    <Container>
      <ScrollView>
        <Title>Simule os benefícios do plano FaleMais</Title>

        <FieldContainer>
          <Text>Origem:</Text>
          <StyledPicker
            mode="dropdown"
            selectedValue={origin}
            onValueChange={(itemValue, itemIndex) => {
              setOrigin(itemValue);
            }}>
            {localeOptions.map(locale => (
              <StyledPicker.Item
                key={String(locale.value)}
                label={locale.label}
                value={locale.value}
              />
            ))}
          </StyledPicker>
        </FieldContainer>

        <FieldContainer>
          <Text>Destino:</Text>
          <StyledPicker
            mode="dropdown"
            selectedValue={destiny}
            onValueChange={(itemValue, itemIndex) => {
              setDestiny(itemValue);
            }}>
            {localeOptions.map(locale => (
              <StyledPicker.Item
                key={String(locale.value)}
                label={locale.label}
                value={locale.value}
              />
            ))}
          </StyledPicker>
        </FieldContainer>

        <FieldContainer>
          <Text>Minutos:</Text>
          <StyledInput
            keyboardType="numeric"
            maxLength={5}
            onChangeText={text => handleChangeMinutes(text)}
            value={minutes}
          />
        </FieldContainer>

        <FieldContainer>
          <Text>Plano FaleMais:</Text>
          <StyledPicker
            mode="dropdown"
            selectedValue={plan}
            onValueChange={(itemValue, itemIndex) => {
              setPlan(itemValue);
            }}>
            {plansOptions.map(planOption => (
              <StyledPicker.Item
                key={String(planOption.value)}
                label={planOption.label}
                value={planOption.value}
              />
            ))}
          </StyledPicker>
        </FieldContainer>

        <TitleWithPlan>Com FaleMais</TitleWithPlan>
        <PriceWithPlan>
          {calculatedPrices.withPlan ? calculatedPrices.withPlan : '-'}
        </PriceWithPlan>

        <TitleWithoutPlan>Sem FaleMais</TitleWithoutPlan>
        <PriceWithoutPlan>
          {calculatedPrices.withoutPlan ? calculatedPrices.withoutPlan : '-'}
        </PriceWithoutPlan>
      </ScrollView>
    </Container>
  );
}
