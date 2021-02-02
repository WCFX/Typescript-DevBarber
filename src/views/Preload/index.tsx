import React from 'react';
import { Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { Container } from './styles';

import { Loading } from '~/assets/preload';

const Preload: React.FC = () => {
  return (
    <Container>
      <LottieView resizeMode="contain" source={Loading} autoPlay loop />
    </Container>
  );
};

export default Preload;
