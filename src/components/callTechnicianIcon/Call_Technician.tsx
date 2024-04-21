import { Container, ImgButton, UnderText } from "./Styles";
import React from "react";

const ImgCallTechnician = '/images/whatsapp.svg';

const Call_Technician: React.FC = () => {
  return (
    <Container href="https://wa.me/5561995612864?text=Ol%C3%A1%21+Quero+saber+mais+sobre+o+seu+servi%C3%A7o.">
      <ImgButton src={ImgCallTechnician} />
      <UnderText>Falar com o Técnico</UnderText>
    </Container>
  )
}

export default Call_Technician;