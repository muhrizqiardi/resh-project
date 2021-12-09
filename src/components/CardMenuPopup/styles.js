import styled from "styled-components";
import colorPalette from "../../constants/colorPalette";

export const PopperWrapper = styled.div`
  overflow: hidden;
  width: 220px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #171710;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  box-sizing: border-box;
`;

export const PopperItem = styled.button`
  border: none;
  background: none;

  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 0.5px solid #d3d3d3;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
  &:active {
    background-color: gray;
  }
  &.color-error {
    color: ${colorPalette.error};
  }
  &.color-info {
    color: ${colorPalette.info};
  }
  &.color-success {
    color: ${colorPalette.success};
  }
`;

export const PopupBackdrop = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
`;