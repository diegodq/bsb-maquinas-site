import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  position: relative;
`;

export const Img = styled.img`
  z-index: 1;
`;


export const DivTextSlide = styled.div`
  position: absolute;
  bottom: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  max-width: 1000px;
`;

export const TitleText = styled.h3`
  font: 1.1rem sans-serif;
  display: block;
  color: white;
  text-align: center;
  margin-bottom: 10px;
`;

export const TitleOne = styled.span`
  font: 1.4rem poppins, sans-serif;
  display: block;
  color: white;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;

  @media(max-width: 880px) {
    & {
      display: none;
    }
  }
`;