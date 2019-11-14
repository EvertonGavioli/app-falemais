import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Logo } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <strong>FLM</strong>
        </Logo>
        <Link to="/">Fale Mais</Link>
      </Content>
    </Container>
  );
}
