import { useState } from "react";
import styled from "styled-components";
import colorPalette from "../variables/colorPalette";

const Wrapper = styled.div`
  /* Mobile */
  width: 100vw;
  height: 56px;
  position: fixed;
  bottom: 0;
  background-color: ${colorPalette.primaryDark.rgb()};
  color: white;
  font-size: 25px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  & .toggler {
    display: none;
  }
  & .nav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 56px;
    & .menu-item {
      background-color: ${colorPalette.primaryDark.rgb()};
      display: flex;
      justify-content: center;
      align-items: center;
      & .menu-text {
        display: none;
      }
    }
  }
  & .profile-menu {
    & .profile-avatar {
      height: 56px;
      display: flex;
      justify-content: center;
      align-items: center;
      & img {
        border-radius: 100%;
        border: 2px solid #ffffff;
      }
    }
  }
  /* Desktop */
  @media (min-width: 768px) {
    width: ${(props) => (props.closed ? "56px" : "256px")};
    height: 100vh;
    background-color: ${colorPalette.primaryDark.rgb()};
    border-radius: 0px 30px 30px 0px;
    ${(props) => (props.closed ? "transition: width 0.5s;" : "")};
    display: flex;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0;
    color: white;
    font-size: 25px;
    & .toggler {
      width: 100%;
      height: 56px;
      background-color: ${colorPalette.primaryDark.rgb()};
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      & .toggler-icon {
        width: 56px;
        height: 56px;
        background-color: ${colorPalette.primaryDark.rgb()};
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          filter: brightness(1.3);
        }
        &:active,
        &:focus-visible {
          filter: brightness(1.7);
        }
      }
    }
    & .nav {
      width: 100%;
      height: 70%;
      display: flex;
      flex-direction: column;
      & .menu-item {
        width: 100%;
        height: 56px;
        padding: 0 20px;
        background-color: ${colorPalette.primaryDark.rgb()};
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          filter: brightness(1.3);
        }
        &:active,
        &:focus-visible {
          filter: brightness(1.7);
        }
        &.active {
          background-color: ${colorPalette.primary.rgb()};
        }
        & .menu-icon {
          width: 56px;
          height: 56px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        & .menu-text {
          display: ${(props) => (props.closed ? "none" : "block")};
          font-family: Raleway, Arial, Helvetica, sans-serif;
          font-weight: 700;
          flex: 1;
          text-align: left;
        }
      }
    }
    & .profile-menu {
      width: 100%;
      height: 56px;
      padding: ${(props) => (props.closed ? "0" : "0 20px")};
      margin-bottom: 56px;
      background-color: ${colorPalette.primaryDark.rgb()};
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        filter: brightness(1.3);
      }
      &:active,
      &:focus-visible {
        filter: brightness(1.7);
      }
      &.active {
        background-color: ${colorPalette.primary.rgb()};
      }
      & .profile-avatar {
        width: 56px;
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      & .profile-name {
        display: ${(props) => (props.closed ? "none" : "block")};
        font-family: Raleway, Arial, Helvetica, sans-serif;
        font-size: 16px;
        font-weight: 700;
        flex: 1;
        text-align: left;
      }
    }
  }
`;

function Menu({ closed }) {
  const [isClosed, setIsClosed] = useState(closed)
  return (
    <Wrapper closed={isClosed}>
      <div className="toggler">
        <div className="toggler-icon" onClick={() => setIsClosed(x => !x)}>
          {isClosed ? (
            <i className="bx bx-menu"></i>
          ) : (
            <i className="bx bx-chevrons-left"></i>
          )}
        </div>
      </div>
      <div className="nav">
        <div className="feed-menu menu-item">
          <div className="feed-icon menu-icon">
            <i className="bx bx-compass"></i>
          </div>
          <p className="feed-text menu-text">Feed</p>
        </div>
        <div className="search-menu menu-item">
          <div className="search-icon menu-icon">
            <i className="bx bx-search"></i>
          </div>
          <p className="search-text menu-text">Search</p>
        </div>
        <div className="library-menu menu-item">
          <div className="library-icon menu-icon">
            <i className="bx bx-library"></i>
          </div>
          <p className="library-text menu-text">Library</p>
        </div>
      </div>
      <div className="profile-menu">
        <div className="profile-avatar">
          <img
            src="https://thispersondoesnotexist.com/image"
            width={25}
            height={25}
            alt=""
          />
        </div>
        <p className="profile-name">Name McName</p>
      </div>
    </Wrapper>
  );
}
export default Menu;
