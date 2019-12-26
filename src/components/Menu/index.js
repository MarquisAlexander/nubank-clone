import React from 'react';
import { Image } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons';

//import QRCode from 'react-native-qrcode';
import qr_code from '../../assets/qr_code.jpg';

import { Container, Code, Nav, NavItem, NavText, Text, SignOutButton, SignOutButtonText } from './styles';

export default function Menu() {
  return(
    <Container>
      <Code>
        <Image source={qr_code} />
      </Code>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF"/>
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF"/>
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF"/>
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF"/>
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>
      
      <SignOutButton onpress={() => {}}>
        <SignOutButtonText>
          SAIR DO APP
        </SignOutButtonText>
      </SignOutButton>

    </Container>
  );
}