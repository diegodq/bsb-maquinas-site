import { ImgMenu } from "./Styles";
import React from "react";

const menuIcon = '/images/menu-right.svg';

interface MenuIconProps
{
  toggleActive: () => void;
}

const MenuIcon: React.FC<MenuIconProps> = ({ toggleActive }: MenuIconProps) => 
{

  return <ImgMenu src={menuIcon} onClick={toggleActive}  />
}

export default MenuIcon;