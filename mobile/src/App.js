import React from 'react';
import {StatusBar} from 'react-native';

import color from './styles/colors';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={color.primary} />
      <Routes />
    </>
  );
}
