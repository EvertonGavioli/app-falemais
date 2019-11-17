import React, {useState, useEffect, useMemo} from 'react';
import {Text, ScrollView} from 'react-native';

import {formatPrice} from '../../utils/format';

import Tariff from '../../services/Calculator/Tariff';
import Locale from '../../services/Calculator/Locale';
import Plan from '../../services/Calculator/Plan';
import CalculatePrice from '../../services/Calculator/CalculatePrice';

import {
  Container,
  Title,
  FieldContainer,
  StyledPicker,
  StyledInput,
  ResultsContainer,
  TitleWithPlan,
  PriceWithPlan,
  TitleWithoutPlan,
  PriceWithoutPlan,
} from './styles';

export default function Calculator() {
  const [origin, setOrigin] = useState('');
  const [destiny, setDestiny] = useState('');
  const [minutes, setMinutes] = useState('');
  const [plan, setPlan] = useState(0);

  const calculatedPrices = useMemo(() => {
    if (origin && destiny && minutes && plan) {
      const tariff = Tariff.getTariff(origin, destiny);

      if (tariff) {
        const priceWithPlan = CalculatePrice.calculatePriceWithPlan(
          Number(tariff),
          Number(minutes),
          Number(plan),
        );

        const priceWithoutPlan = CalculatePrice.calculatePriceWithoutPlan(
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

  useEffect(() => {
    setOrigin(Locale.localeOptions()[0].value);
    setDestiny(Locale.localeOptions()[1].value);
    setPlan(Plan.plansOptions()[0].value);
  }, []);

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
            testID="picker-origin"
            mode="dropdown"
            selectedValue={origin}
            onValueChange={(itemValue, itemIndex) => {
              setOrigin(itemValue);
            }}>
            {Locale.localeOptions().map(locale => (
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
            testID="picker-destiny"
            mode="dropdown"
            selectedValue={destiny}
            onValueChange={(itemValue, itemIndex) => {
              setDestiny(itemValue);
            }}>
            {Locale.localeOptions().map(locale => (
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
            testID="input-minutes"
            keyboardType="numeric"
            maxLength={5}
            onChangeText={text => handleChangeMinutes(text)}
            value={minutes}
          />
        </FieldContainer>

        <FieldContainer>
          <Text>Plano FaleMais:</Text>
          <StyledPicker
            testID="picker-plans"
            mode="dropdown"
            selectedValue={plan}
            onValueChange={(itemValue, itemIndex) => {
              setPlan(itemValue);
            }}>
            {Plan.plansOptions().map(planOption => (
              <StyledPicker.Item
                key={String(planOption.value)}
                label={planOption.label}
                value={planOption.value}
              />
            ))}
          </StyledPicker>
        </FieldContainer>

        <ResultsContainer>
          <TitleWithPlan>Com FaleMais</TitleWithPlan>
          <PriceWithPlan testID="price-with-plan">
            {calculatedPrices.withPlan ? calculatedPrices.withPlan : '-'}
          </PriceWithPlan>

          <TitleWithoutPlan>Sem FaleMais</TitleWithoutPlan>
          <PriceWithoutPlan testID="price-without-plan">
            {calculatedPrices.withoutPlan ? calculatedPrices.withoutPlan : '-'}
          </PriceWithoutPlan>
        </ResultsContainer>
      </ScrollView>
    </Container>
  );
}
