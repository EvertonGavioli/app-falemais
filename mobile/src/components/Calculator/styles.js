import styled from 'styled-components/native';
import color from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  margin: 10px;
  border-radius: 4px;
  background: #fff;
`;

export const Title = styled.Text`
  text-align: center;
  margin: 20px;
  font-size: 22px;
  font-weight: bold;
  color: ${color.primary};
`;

export const FieldContainer = styled.View`
  flex-direction: row;
  align-items: center;

  height: 50px;
  margin: 4px 20px;
  padding: 0px 10px;
  border: 1px solid ${color.secondary};
  border-radius: 8px;
`;

export const StyledPicker = styled.Picker`
  flex: 1;
  margin-left: 10px;
`;

export const StyledInput = styled.TextInput`
  flex: 1;
  margin-left: 10px;
  margin-bottom: 5px;
  border-bottom-width: 1;
  border-bottom-color: ${color.secondary};
  font-size: 16px;
`;

export const ResultsContainer = styled.View`
  border: 1px solid ${color.secondary};
  border-radius: 8px;
  margin: 10px 20px 20px;
  padding: 10px;
  background: #f6f6f6;
`;

export const TitleWithPlan = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${color.primary};
`;

export const PriceWithPlan = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${color.secondary};
`;

export const TitleWithoutPlan = styled.Text`
  text-align: right;
  font-size: 22px;
  font-weight: bold;
  color: ${color.primary};
`;

export const PriceWithoutPlan = styled.Text`
  text-align: right;
  font-size: 32px;
  font-weight: bold;
  color: ${color.secondary};
`;
