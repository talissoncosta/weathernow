import React from 'react';

import { Container,Degree, Info,DayWeek,Max,Min,Data,MaxMin,SignDegree} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function InfoWeather() {


  return (
    <Container>
        <Info>  
          <Degree> 33</Degree>
          <Data> 
            <SignDegree>                 
                °
            </SignDegree>
            <DayWeek>                 
              <Icon name="wb-sunny" size={15} color="#3E5E6A"/>
              Segunda-feira
            </DayWeek>
            <MaxMin> 
              <Max>
                <Icon name="arrow-upward" size={15} color="#3E5E6A"/>
                33°
              </Max>
              <Max>
                <Icon name="arrow-downward" size={15} color="#3E5E6A"/>
                33°
              </Max>
            </MaxMin>
     
          </Data>

        </Info>
    </Container>
  )
}
