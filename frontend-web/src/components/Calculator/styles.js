import styled from 'styled-components';
import Select from 'react-select';

export const Container = styled.div`
  display: flex;
  margin: -100px auto;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 16px 6px -6px rgba(0, 0, 0, 0.3);

  max-width: 800px;
  height: 350px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CalculatorHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  text-align: center;

  font-size: 1.2rem;
  color: #450057;

  padding-bottom: 10px;
  border-bottom: 2px solid #450057;
`;

export const CalculatorFields = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  text-align: center;

  font-size: 1.2rem;
  color: #450057;

  padding: 10px 0px;
`;

export const DropDown = styled(Select).attrs(props => ({
  placeholder: 'Selecione...',
}))`
  font-size: 16px;
`;
