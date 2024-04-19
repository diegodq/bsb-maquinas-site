import styled from "styled-components";

export const ImgClose = styled.img`
  display: none;
  cursor: pointer;

  @media(max-width: 1160px) {
    display: block;
    position: fixed;
    top: 25px;
    right: 25px;
  }
`;