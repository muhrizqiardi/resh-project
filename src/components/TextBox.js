import styled from "styled-components";
import colorPalette from "../variables/colorPalette";

const Textbox = styled.input`
  font-family: Inter, Arial, Helvetica, sans-serif; 
  padding: 13px;
  border: 1.5px solid ${colorPalette.dark.hex()};
  border-radius: 5px;
  &:focus {
    border: 1.5px solid ${colorPalette.info};
  }
`;

export default Textbox;