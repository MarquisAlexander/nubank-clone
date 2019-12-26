import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import { Container, Content, Card, CardHeader, CardContent, CardSaldo, Title, Description, Annotation } from './styles';

export default function Main() {
  return(
    <Container>
      <Header />
      <Content>
        <Menu />
      <Card>
      <CardHeader>
        <Icon name="attach-money" size={28} color="#666" />
        <Icon name="visibility-off" size={28} color="#666" />
      </CardHeader>
      <CardContent>
        <Title>Saldo disponível</Title>
        <Description>R$ 197.611,65</Description>
      </CardContent>
      <CardSaldo>
        <Annotation>
          Transferência de R$ 20,00 recebida de Diego Schell Fernandes hoje às 06:00h
        </Annotation>
      </CardSaldo>
      </Card>
      </Content>
      <Tabs />
      </Container>
  );
}