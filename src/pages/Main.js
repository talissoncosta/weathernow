
import React, { useEffect,useState } from 'react';
import { View , StatusBar,TouchableOpacity,Text,TouchableHighlight,Button,  Alert} from 'react-native';
import DaysOfWeek from '../components/DaysOfWeek'
import LocalName from '../components/LocalName'
import InfoWeather from '../components/InfoWeather'
import ImageWeather from '../components/ImageWeather'
import styled from 'styled-components/native';

export default function Main({ navigation }) {

       
    return (
        <SafeAreaView>
            <Container>
                <Content>
                    <LocalName/>
                    <ImageWeather/>
                    <InfoWeather/>

                </Content>

                <DaysOfWeek/>
            </Container>
        </SafeAreaView>

    );
}
export const SafeAreaView = styled.SafeAreaView `
  flex: 1;
  background: #FFF;
`;

export const Container = styled.View `
  flex: 1;
  background: #FFF;

  justify-content: center;
`;
export const Content = styled.View `
  flex: 1;
  max-height: 600px;
  z-index: 5;
`;
