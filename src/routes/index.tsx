import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import * as Views from '~/views';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Preload" component={Views.Preload} />
      <Screen name="SignIn" component={Views.SignIn} />
      <Screen name="SignUp" component={Views.SignUp} />
      <Screen name="Home" component={Views.Home} />
    </Navigator>
  );
};

export default Routes;
