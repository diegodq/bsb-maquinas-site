import styled from "styled-components";

export const Button = styled.a`
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 8px;
  font: .9rem poppins, sans-serif;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  color: black;

  @media(max-width: 1160px) {
    display: none;
  }
`;