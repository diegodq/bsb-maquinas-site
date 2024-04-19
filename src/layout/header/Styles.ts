import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background-color: #1c1b1a;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px 0;

  @media(max-width: 1160px) {
    justify-content: end;
  }
`;