import styled from "styled-components";
import colorPalette from "../variables/colorPalette";

const Wrapper = styled.header`
  max-width: 768px;
  height: 56px;
  background-color: ${colorPalette.light.rgb()};
  font-family: Raleway, Arial, Helvetica, sans-serif;
  font-size: 24px;
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

function Header({ title, leftIcon, leftAction, rightIcon, rightAction }) {
  return (
    <Wrapper
      leftActionAvailable={Boolean(leftAction)}
      rightActionAvailable={Boolean(rightAction)}
    >
      <div onClick={leftAction} className="left-action">
        <div className="left-action-icon">{leftIcon}</div>
      </div>
      <div className="header-content">
        <h1>{title}</h1>
      </div>
      <div onClick={rightAction} className="right-action">
        <div className="left-action-icon">{rightIcon}</div>
      </div>
    </Wrapper>
  );
}
export default Header;
