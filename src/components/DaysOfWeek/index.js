import React from 'react';

import { Container, TabsContainer, TabsItem, TabText } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function DaysOfWeek() {


  return (
    <Container>
      <TabsContainer>
        <TabsItem>
          <>
            <TabText> Seg</TabText>
            <Icon name="wb-sunny" size={35} color="#3E5E6A"/>
            <TabText> 22</TabText>
          </>
        </TabsItem>
        <TabsItem>
          <>
            <TabText> Ter</TabText>
            <Icon name="wb-sunny" size={35} color="#3E5E6A"/>
            <TabText> 22</TabText>
          </>
        </TabsItem>
        <TabsItem>
          <>
            <TabText> Qua</TabText>
            <Icon name="wb-sunny" size={35} color="#3E5E6A"/>
            <TabText> 22</TabText>
          </>
        </TabsItem>
        <TabsItem>
          <>
            <TabText> Qui</TabText>
            <Icon name="wb-sunny" size={35} color="#3E5E6A"/>
            <TabText> 22</TabText>
          </>
        </TabsItem>
        <TabsItem>
          <>
            <TabText> Sex</TabText>
            <Icon name="wb-sunny" size={35} color="#3E5E6A"/>
            <TabText> 22</TabText>
          </>
        </TabsItem>
        <TabsItem>
          <>
            <TabText> Sáb</TabText>
            <Icon name="wb-sunny" size={35} color="#3E5E6A"/>
            <TabText> 22</TabText>
          </>
        </TabsItem>
        <TabsItem>
          <>
            <TabText> Dom</TabText>
            <Icon name="wb-sunny" size={35} color="#3E5E6A"/>
            <TabText> 22</TabText>
          </>
        </TabsItem>
      </TabsContainer>
    </Container>
  )
}
