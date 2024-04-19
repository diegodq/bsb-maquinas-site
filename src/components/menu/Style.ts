import styled from "styled-components";

export const Nav = styled.nav`
  margin-left: 220px;

  @media(max-width: 1160px) 
  {
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width:250px;
    background-color: #1C1B1A;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 0;
    z-index: 5;
    transform: translateX(100%);
    transition: transform .3s ease-in;

    &.active 
    {
      transform: translateX(0);
    }
    
  }
`;

export const Link = styled.a`
  color: white;
  font: 1rem poppins, sans-serif;
  text-decoration: none;

  & + & 
  {
    margin-left: 18px;
  }

  &:hover 
  {
    border-bottom: 1px solid white;
  }

  @media(max-width: 1160px) 
  {
    width: 100%;
    text-align: center;
    
    &:hover 
    {
      border-bottom: none;
    }

    & + & 
    {
      margin-top: 18px;
      margin-left: 0;
    }
  }
`;