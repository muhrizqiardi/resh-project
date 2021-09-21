import styled from "styled-components";
import colorPalette from "../variables/colorPalette";
import color from 'color'

const Wrapper = styled.button`
  border: none;
  background-color: ${colorPalette.primaryDark};
  color: white;
  padding: 13px;
  border-radius: 30px;
  &:hover {
    background-color: black;
  }
`;

function Button({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}
export default Button;
