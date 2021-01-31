import React from 'react';
import { Text, Image } from 'react-native';
import { Container } from './styles';

// import { Barber } from '~/assets/preload';
// import { Logo } from '~/assets/preload';
// import { Email } from '~/assets/svgs';
import BarberPreload from '../../assets/preload/barber-logo/logo.jpg';

const Preload: React.FC = () => {
  return (
    <Container>
      <Text>Olá</Text>
      {/* <Email width="100%" height="160" /> */}
      {/* <Logo width="100%" height="160" /> */}
      {/* <Image source={Email} style={{ width: 300, height: 300 }} /> */}
      <Image source={BarberPreload} style={{ width: 300, height: 300 }} />

      {/* <Barber width={300} height={160} /> */}
      {/* <BarberPreload width={300} height={160} /> */}
    </Container>
  );
};

export default Preload;
