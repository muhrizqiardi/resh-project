import styled from "styled-components";

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
  padding: 10px 13px 10px 10px;
  overflow-y: scroll;
  @media (min-width: 768px) {
    height: unset;
    overflow-y: unset;
    padding: 10px 0;
  }
`;

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  display: grid;
  row-gap: 10px;
`;
