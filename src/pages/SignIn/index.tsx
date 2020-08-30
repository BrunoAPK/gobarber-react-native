import React from 'react';
import { Image } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import logoImg from '../../assets/logo.png';

import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu logon</Title>
      <Input name="email" icon="Mail" placeholder="E-mail" />
      <Input name="password" icon="Lock" placeholder="Senha" />
      <Button onPress={() => console.log('Buttton Action')}>Entrar</Button>
    </Container>
  );
};

export default SignIn;
