import React from 'react';

import { Container } from './styles';

import Header from '~/components/Header';
import Banner from '~/components/Banner';
import CalculadoraFaleMais from '~/components/CalculadoraFaleMais';

export default function Dashboard() {
  return (
    <Container>
      <Header />
      <Banner />
      <CalculadoraFaleMais />
    </Container>
  );
}
