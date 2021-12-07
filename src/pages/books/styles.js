import styled from "styled-components";
import colorPalette from "../../constants/colorPalette";

export const Wrapper = styled.div`
  /* Mobile */
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;

  /* Desktop */
  @media (min-width: 768px) {
    justify-self: stretch;
    flex-direction: row;
  }
`;

export const Main = styled.div`
  width: 100%;
  height: calc(100vh - 56px);
  margin: 0 auto;
  /* Desktop */
  @media (min-width: 768px) {
    height: unset;
    overflow-y: auto;
  }
`;

export const Content = styled.div`
  height: calc(100% - 56px);
  /* padding: 0px 13px 10px 10px; */
  overflow-y: scroll;
  @media (min-width: 768px) {
    height: unset;
    overflow-y: unset;
    padding: 0px 10px;
  }
`;

export const Container = styled.div`
  max-width: 768px;
  min-height: 1000px;
  margin: 0 auto;
  background-color: white;
  border-top: 3px solid ${colorPalette.primaryDark.hex()};
  display: grid;
  row-gap: 10px;
`;
