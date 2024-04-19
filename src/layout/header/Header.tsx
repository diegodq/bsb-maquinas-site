import { Header } from "./Styles.ts";
import MenuIcon from "../../components/menuIcon/MenuIcon.tsx";
import Logo from "../../components/logoIcon/Logo.tsx";
import Call from "../../components/call/Call.tsx";
import { Menu } from "../../components/menu/Menu.tsx";
import AppointmentButton from "../../components/appointment/Button.tsx";
import AlternativeLog from "../../components/alternativeLogoIcon/AlternativeLogo.tsx";
import React, { useState } from "react";

type FunctionType = 
{
  (): void,
}

const HeaderSite: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive: FunctionType = (): void => {
    setIsActive(!isActive);
  }

  return (
    <Header>
      <AlternativeLog />
      <Logo />
      <Menu isActive={isActive} toggleActive={toggleActive} />
      <Call />
      <AppointmentButton />
      <MenuIcon toggleActive={toggleActive} />
    </Header>
  )
}

export default HeaderSite;