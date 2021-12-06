import styled from "styled-components";
import colorPalette from "../../constants/colorPalette";

export const HeaderWrapper = styled.header`
  max-width: 772px;
  height: 56px;
  margin: 0 auto;
  background-color: ${colorPalette.light.rgb()};
  font-family: Raleway, Arial, Helvetica, sans-serif;
  font-size: 24px;
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: 56px 1fr 56px;
  & .left-action,
  & .right-action {
    background-color: ${colorPalette.light.rgb()};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ${(props) =>
    props.leftActionAvailable
      ? `
      & .left-action:hover {
        filter: brightness(0.9);
      }
    `
      : ""}
  ${(props) =>
    props.rightActionAvailable
      ? `
      & .right-action:hover {
        filter: brightness(0.9);
      }
    `
      : ""}
  & .header-content {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    & h1 {
      font-family: Raleway, Arial, Helvetica, sans-serif;
      font-size: 24px;
      text-align: center;
      margin: 0;
    }
  }
`;
