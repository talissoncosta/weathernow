import React from 'react';

import { Container,Image } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import image from '~/assets/sun.jpg';


export default function LocalName() {

  return (
    <Container>
        <Image source={image} />
    </Container>
  )
}
