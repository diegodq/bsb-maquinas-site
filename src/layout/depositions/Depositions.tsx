import { Container, DivOne, DivTwo, DivTitle, Text, H2, SubDiv, 
  Div, Paragraph, ImgClient, NameClient, SubDivTwo} from "./Styles";
import React from "react";

const avatarOne = '/images/avatar1.jpg';
const avatarTwo = '/images/avatar2.jpg';
const avatarThree = '/images/avatar3.jpg';

const Depositions: React.FC = () => {
  return (
    <Container id="depositions">
      <DivOne>
        <DivTitle>
          <H2>Satisfação garantida</H2>
          <Text>Visamos atender nossos clientes com total transparência, precisão no diagnóstico e qualidade nos serviços prestados.</Text>
        </DivTitle>

        <SubDiv>
          <Paragraph>"Bom atendimento. Pontuais e preço justo. Recomendo."</Paragraph>
          <Div>
            <ImgClient src={avatarOne} alt="Imagem do cliente." />
            <NameClient>Cláudia Silva</NameClient>
          </Div>
        </SubDiv>
      </DivOne>
      <DivTwo>
        <SubDiv>
          <Paragraph>"Atendimento profissional! Atenderam de forma rápida, fizeram o orçamento sem lero-lero, realizaram a manutenção geral da Electrolux 15kg e me devolveram perfeitamente funcionando em menos de 48 horas. Excepcional!!!"</Paragraph>
          <Div>
            <ImgClient src={avatarTwo} alt="Imagem do cliente." />
            <NameClient>Giselle Arantes</NameClient>
          </Div>
        </SubDiv>
        <SubDivTwo>
          <Paragraph>"Ótimo atendimento. Pontuais. Consertaram minha lava e seca LG rapidamente e foi o preço mais barato que encontrei nos orçamentos que realizei."</Paragraph>
          <Div>
            <ImgClient src={avatarThree} alt="Imagem do cliente." />
            <NameClient>José Santos</NameClient>
          </Div>
        </SubDivTwo>
      </DivTwo>
    </Container>
  )
}

export default Depositions;