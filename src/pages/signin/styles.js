import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 320px;
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
