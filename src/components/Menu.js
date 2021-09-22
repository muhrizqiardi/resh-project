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
  & .nav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    height: 56px;
  }
  & .nav div {
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
  }
  & .profile-menu img {
    border-radius: 100%;
    border: 2px solid #ffffff;
  }

  /* Desktop */
  @media (min-width: 768px) {
    width: 256px;
    height: 100vh;
    background-color: ${colorPalette.primaryDark.rgb()};
    border-radius: 0px 30px 30px 0px;
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
    & .nav {
      width: 100%;
      height: 70%;
      display: flex;
      flex-direction: column;
      & .menu-item {
        
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
        &.active {
          background-color: ${colorPalette.primary.rgb()};
        }
      }
    }
    & .profile-menu {
      width: 100%;
      height: 56px;
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
    }
  }
`;

function Menu(props) {
  return (
    <Wrapper>
      <div className="toggler">
        <div className="toggler-icon"><i className="bx bx-menu"></i></div>
      </div>
      <div className="nav">
        <div className="feed-menu menu-item">
          <div className="feed-icon menu-icon"><i className="bx bx-compass"></i></div>
          <div className="feed-text menu-text">Feed</div>
        </div>
        <div className="search-menu menu-item">
          <div className="search-icon menu-icon"><i className="bx bx-search"></i></div>
          <div className="search-text menu-text">Search</div>
        </div>
        <div className="library-menu menu-item">
          <div className="library-icon menu-icon"><i className="bx bx-library"></i></div>
          <div className="library-text menu-text">Library</div>
        </div>
      </div>
      <div className="profile-menu">
        <img
          src="https://thispersondoesnotexist.com/image"
          width={25}
          height={25}
          alt=""
        />
      </div>
    </Wrapper>
  );
}
export default Menu;
