import { LogoImg, RoundedLogo } from "./Styles";
const logoPath = '/images/logo.png';
import React from "react";

const Logo: React.FC = () => {
  return (
    <RoundedLogo>
      <LogoImg src={logoPath} alt="Logo S.S Máquinas" />
    </RoundedLogo>
  )
}

export default Logo;