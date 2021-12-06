import styled from "styled-components";
import colorPalette from "../../constants/colorPalette";

export const Wrapper = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    margin-top: 64px;
  }
`;

export const Header = styled.header`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 23px;
  }
`;

export const Main = styled.main`
  padding: 30px;
  display: grid;
  row-gap: 20px;
  justify-items: stretch;
  align-content: center;
  text-align: center;
`;

export const ErrorMessage = styled.div`
  text-align: left;
  font-size: 0.85em;
  color: ${colorPalette.error};
`;

export const SuccessMessage = styled.div`
  padding: 30px;
  color: black;
  background-color: white;
  border: 1.5px solid ${colorPalette.success};
  border-radius: 15px;
`;
