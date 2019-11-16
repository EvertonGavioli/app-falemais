import styled from 'styled-components/native';
import logo from '../../assets/Logo.png';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding: 0 15px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 32px;
  height: 32px;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  padding-right: 32px;

  font-size: 22px;
  font-weight: bold;
  color: #fff;
`;
