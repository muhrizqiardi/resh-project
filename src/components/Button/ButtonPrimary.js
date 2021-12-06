import styled from "styled-components";
import colorPalette from "../../constants/colorPalette"
import { ButtonNormal } from ".";

export const ButtonPrimary = styled(ButtonNormal)`
  background-color: ${colorPalette.primary.hex()};
  font-family: Raleway, sans-serif;
  font-weight: 700;
  &:hover,
  &:active {
    filter: brightness(0.8);
  }
  &:focus-visible {
    box-shadow: 0px 0px 0px 3px ${colorPalette.primary.alpha(0.4).rgb()};
  }
`;
