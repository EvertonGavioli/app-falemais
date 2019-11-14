import React from 'react';

import { Container } from './styles';

import Header from '~/components/Header';
import Banner from '~/components/Banner';
import Calculator from '~/components/Calculator';

export default function Dashboard() {
  return (
    <Container>
      <Header />
      <Banner />
      <Calculator />
    </Container>
  );
}
