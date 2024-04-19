import { Container, DivColumns, LogoBottom, TitleColumns,
TitleLogo, Nav, Ul, Li, Link, Text, DivColumnLogo, LinkPhone } from "./Styles";
const logoBottom = '/images/logo-ivane-white.png';
import React from "react";

const Footer: React.FC = () => {
  return (
    <Container>
      <DivColumnLogo>
        <LogoBottom src={logoBottom} />
        <TitleLogo>
          Faça a melhor escolha em empresa de assistência técnica. 
          Ligue já e peça o seu orçamento!
        </TitleLogo>
      </DivColumnLogo>
      <DivColumns>
        <TitleColumns>BSB Máquinas</TitleColumns>
        <Nav>
          <Ul>
            <Li><Link href="#about">Sobre Nós</Link></Li>
            <Li><Link href="#services">Serviços</Link></Li>
            <Li><Link href="#depositions">Depoimentos</Link></Li>
            <Li><Link href="#contact">Contato</Link></Li>      
          </Ul>
        </Nav>
      </DivColumns>
      <DivColumns>
        <TitleColumns>ATENDIMENTO</TitleColumns>
        <Text>Segunda a sexta - 08h às 18h</Text>
      </DivColumns>
      <DivColumns>
        <TitleColumns>FALE CONOSCO</TitleColumns>
        <LinkPhone href="tel:61995612864">(61) 9.9561-2864</LinkPhone>
      </DivColumns>
    </Container>
  )
}

export default Footer;