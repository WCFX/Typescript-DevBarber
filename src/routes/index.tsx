import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '~/views/Home';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default Routes;
