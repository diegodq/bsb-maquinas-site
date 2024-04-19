import styled from "styled-components";

export const Container = styled.div`
  background-color: #F5F5F5;
  padding: 60px 0;
  border-top: 1px solid #e0e0e0;
`;

export const DivOne = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;

  @media(max-width: 1260px){
    flex-direction: column;
    align-items: center;
  }
`;

export const DivTwo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media(max-width: 1260px){
    flex-direction: column;
    align-items: center;
  }
`;

export const DivTitle = styled.div`
  font: 1rem poppins, sans-serif;
  max-width: 598px;
  margin-right: 20px;
`;

export const Text = styled.p`
  margin-top: 8px;

  @media(max-width: 1260px){
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const SubDiv = styled.div`
  max-width: 598px;
  padding: 20px 10px;
  background-color: #FFFFFF;
  box-shadow: 0 0 20px #bdbdbd;
  border-radius: 9px;

  & + & {
    margin-left: 20px;
  }

  @media(max-width: 1260px) {
    & + & {
      margin-left: 0;
      margin-top: 20px;
    }
  }

  @media(max-width: 650px) {
    margin: 0 20px 0 20px;
  }
`;

export const SubDivTwo = styled.div`
  max-width: 598px;
  padding: 20px 10px;
  background-color: #FFFFFF;
  box-shadow: 0 0 20px #bdbdbd;
  border-radius: 9px;
  margin-left: 20px;

  @media(max-width: 1260px) {
    margin-left: 0;
    margin-top: 20px;
  }

  @media(max-width: 650px) {
    margin: 20px 20px 0 20px;
  }
`;

export const H2 = styled.h2`
  font: 1.4rem poppins, sans-serif;
  font-weight: bold;

  @media(max-width: 1260px) {
    text-align: center;
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Paragraph = styled.p`
  margin-bottom: 15px;
  font: 1rem poppins, sans-serif;
`;

export const ImgClient = styled.img`
  border-radius: 50%;
  height: 45px;
  margin-right: 10px;
`;

export const NameClient = styled.span`
  font: 1rem poppins, sans-serif;
  font-weight: bold;
`;