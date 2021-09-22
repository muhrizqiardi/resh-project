import styled from "styled-components";
import colorPalette from "../variables/colorPalette";

const ButtonNormal = styled.button`
  border: none;
  padding: 13px;
  background-color: ${colorPalette.primaryDark.hex()};
  color: white;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  font-size: 16px;
  border-radius: 30px;
  cursor: pointer;
  &:hover, &:active {
    filter: brightness(1.5);
  }
  &:focus-visible {
    box-shadow: 0px 0px 0px 3px ${colorPalette.primaryDark.alpha(0.4).rgb()};
  }
`;

export const ButtonPrimary = styled(ButtonNormal)`
  background-color: ${colorPalette.primary.hex()};
  font-family: Raleway, sans-serif;
  font-weight: 700;
  &:hover, &:active {
    filter: brightness(0.8);
  }
  &:focus-visible {
    box-shadow: 0px 0px 0px 3px ${colorPalette.primary.alpha(0.4).rgb()};
  }
`;

export default ButtonNormal;
