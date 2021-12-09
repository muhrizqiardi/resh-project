import styled from "styled-components";
import colorPalette from "../../constants/colorPalette";

export const ProgressUpdaterWrapper = styled.div`
  width: 100vw;
  height: 400px;
  background-color: ${colorPalette.light};
  border: 3px solid ${colorPalette.primaryDark};
  border-bottom: none;
  border-radius: 15px 15px 0px 0px;
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  z-index: 11;

  @media (min-width: 768px) {
    width: 350px;
    margin: auto auto;
    border: 3px solid ${colorPalette.primaryDark};
    border-radius: 15px;
    inset: 0;
  }
`;

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.35);
  position: fixed;
  inset: 0;
  z-index: 10;
`;

export const BookImage = styled.div`
  width: 0;
  height: 0;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
  img {
    width: 92px;
    height: 92px;
  }
`;

export const Title = styled.h1`
  font-family: Raleway, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
`;

export const Text = styled.div`
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;
