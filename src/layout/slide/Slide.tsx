import { Container, Img, DivTextSlide, TitleText, TitleOne } from "./Style";
import React from "react";

const imgOne = '/images/slide/slide_one3.jpg';

const Slide: React.FC = () => {
  return (
    <Container>
      <Img src={imgOne} />

      <DivTextSlide>
        <TitleText>Bem-vindo(a) à excelência em cuidado e performance!</TitleText>
        <TitleOne>Na nossa empresa, cada máquina é mais do que um eletrodoméstico - é um compromisso com qualidade, confiança e eficiência.</TitleOne>
      </DivTextSlide>
    </Container>
  )
}

export default Slide;