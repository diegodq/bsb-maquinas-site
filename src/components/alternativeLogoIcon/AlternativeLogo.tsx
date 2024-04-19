import { LogoImgTwo, Div } from "./Styles";
import React from "react";

const otherLogoPath = '/images/logo-ivane-white.png';

const AlternativeLog: React.FC = () => {
  return (
    <Div>
      <LogoImgTwo src={otherLogoPath} alt="Logo S.S Máquinas" />
    </Div>

  )
}

export default AlternativeLog;