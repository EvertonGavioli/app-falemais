import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import color from './styles/colors';
import Header from './components/Header';

import Dashboard from './pages/Dashboard';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Dashboard,
    },
    {
      defaultNavigationOptions: {
        headerTitle: () => <Header />,
        headerStyle: {
          backgroundColor: color.primary,
        },
      },
      cardStyle: {
        backgroundColor: color.secondary,
      },
    },
  ),
);

export default Routes;
