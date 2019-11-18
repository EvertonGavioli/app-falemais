import styled from 'styled-components';
import { darken } from 'polished';
import Select from 'react-select';

export const Container = styled.div`
  display: flex;
  margin: -100px auto;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 16px 6px -6px rgba(0, 0, 0, 0.8);

  width: 800px;
  height: 350px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CalculatorHeader = styled.div`
  display: grid;
  grid-template-columns:
    repeat(3, minmax(0, 1fr)) minmax(0, 1.5fr)
    repeat(2, minmax(0, 1.3fr));
  grid-gap: 20px;
  text-align: center;
  align-items: center;

  font-size: 1.2rem;
  color: #450057;

  padding-bottom: 10px;
  border-bottom: 2px solid #450057;
`;

export const CalculatorFields = styled.div`
  display: grid;
  grid-template-columns:
    repeat(3, minmax(0, 1fr)) minmax(0, 1.5fr)
    repeat(2, minmax(0, 1.3fr));
  grid-gap: 10px;
  text-align: center;

  font-size: 1.2rem;
  color: #450057;

  padding: 10px 0px;
`;

export const DropDown = styled(Select).attrs({
  placeholder: 'Selec...',
})`
  font-size: 16px;
`;

export const Input = styled.input.attrs({
  type: 'number',
  min: '1',
  max: '99999',
  step: '1',
  placeholder: '...',
})`
  height: 38px;
  padding: 2px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;

  font-size: 16px;
  color: #450057;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#ccc')};
  }

  &:focus {
    border-color: #2684ff;
    box-shadow: 0 0 0 1px #2684ff;
  }
`;

export const Result = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
`;
