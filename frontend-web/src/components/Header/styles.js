import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  height: 100px;
  max-width: 1440px;
  margin: 0 auto;

  a {
    margin-left: 16px;
    font-size: 42px;
    color: #450057;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #450057;
  width: 70px;
  height: 50px;
  padding: 10px;

  strong {
    font-size: 32px;
    color: #fff;
  }
`;
