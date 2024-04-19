import { ImgClose } from "./Styles"
import React from "react";

const ImgCloseMenu = '/images/x-lg.svg';

interface CloseProps
{
  onClick: () => void;
}

const Close: React.FC<CloseProps> = ({ onClick }: CloseProps) =>
{
  return <ImgClose src={ImgCloseMenu} onClick={onClick} alt="Fechar menu lateral" />
}

export default Close;