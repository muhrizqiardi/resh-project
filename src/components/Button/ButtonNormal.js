import styled from "styled-components";
import colorPalette from "../../constants/colorPalette";

export const ButtonNormal = styled.button`
  border: none;
  padding: 13px;
  background-color: ${colorPalette.primaryDark.hex()};
  color: white;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 16px;
  border-radius: 30px;
  cursor: pointer;
  &:hover,
  &:active {
    filter: brightness(1.5);
  }
  &:focus-visible {
    box-shadow: 0px 0px 0px 3px ${colorPalette.primaryDark.alpha(0.4).rgb()};
  }
  &:disabled {
    background-color: lightgray;
    color: ${colorPalette.secondary};
  }
`;
