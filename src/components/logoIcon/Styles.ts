import styled from "styled-components";

export const LogoImg = styled.img`
  height: 120px;
  margin-top: 35px;
  margin-left: 25px;
`;

export const RoundedLogo = styled.div`
  position: absolute;
  top: 0;
  left: 50px;
  width: 200px;
  height: 190px;
  background-color: #f0f0f0;
  box-shadow: 0 1px 10px #4a4a4a;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 3;

  @media(max-width: 545px) {
    display: none;
  }
`;