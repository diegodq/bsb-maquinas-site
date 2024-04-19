import styled from "styled-components";

export const Div = styled.div`
  @media(min-width: 545px) {
    display: none;
  }

  @media(max-width: 545px) {
    width: 100%;
    margin-left: 20px;
  }
`;

export const LogoImgTwo = styled.img`
  height: 80px;
  z-index: 1;
`;