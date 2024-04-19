import {Nav, Link} from "./Style.ts";
import Close from "../closeIcon/Close.tsx";
import Call_Technician from "../callTechnicianIcon/Call_Technician.tsx";

interface MenuProps
{
  isActive: boolean;
  toggleActive: () => void;
}

export const Menu: React.FC<MenuProps>  = ({ isActive, toggleActive }: MenuProps) =>
{
  return (
    <Nav className={isActive ? 'active' : ''}>
      <Close onClick={toggleActive} />

      <Link href="/">Home</Link>
      <Link href="#services">Serviços</Link>
      <Link href="#about">Sobre</Link>
      <Link href="#contact">Contato</Link>

      <Call_Technician />
    </Nav>
  )
}