import { Container, Text, PhoneIcon, LinkPhone, ContainerTextPhone } from './Style';
import React from 'react';

const PhoneIconImg = '/images/telephone.svg';

const Call: React.FC = () => {
  return (
    <Container>
      <Text>Agendar Atendimento</Text>
      <ContainerTextPhone>
        <PhoneIcon src={PhoneIconImg} />
        <LinkPhone href="tel:61995612864">(61) 9.9561-2864</LinkPhone>
      </ContainerTextPhone>
    </Container>
  )
}

export default Call;