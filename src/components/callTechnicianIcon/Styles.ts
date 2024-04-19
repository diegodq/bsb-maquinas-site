import styled from "styled-components";

export const Container = styled.a`
  display: none;
  cursor: pointer;
  text-decoration: none;

  @media(max-width: 1160px) {
    position: fixed;
    bottom: 80px;
    right: 30px;
    display: flex;
    flex-direction: column;
  }

  @media(max-height: 500px) {
    display: none;
  }
`;

export const ImgButton = styled.img`
  height: 43px;
`;

export const UnderText = styled.span`
  font: 1.1rem poppins, sans-serif;
  color: white;
  margin-top: 8px;
`;