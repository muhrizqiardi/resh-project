import { useState } from "react";
import { useLocation } from "react-router";
import { MenuWrapper } from "./styles";
import { useSelector } from "react-redux";
import emptyProfilePicture from "../../assets/empty-profile-picture.png";

export function Menu({
  closed,
  feedMenuOnClick,
  searchMenuOnClick,
  libraryMenuOnClick,
  profileMenuOnClick,
}) {
  const auth = useSelector(({ auth }) => auth);
  const location = useLocation();
  const [isClosed, setIsClosed] = useState(closed);
  return (
    <MenuWrapper closed={isClosed}>
      <div className="toggler">
        <div className="toggler-icon" onClick={() => setIsClosed((x) => !x)}>
          {isClosed ? (
            <i className="bx bx-menu"></i>
          ) : (
            <i className="bx bx-chevrons-left"></i>
          )}
        </div>
      </div>
      <div className="nav">
        <div
          onClick={feedMenuOnClick}
          className={`feed-menu menu-item ${
            location.pathname === "/feed" ? "active" : ""
          }`}
        >
          <div className="feed-icon menu-icon">
            <i className="bx bx-compass"></i>
          </div>
          <p className="feed-text menu-text">Feed</p>
        </div>
        <div
          onClick={searchMenuOnClick}
          className={`search-menu menu-item ${
            location.pathname === "/search" ? "active" : ""
          }`}
        >
          <div className="search-icon menu-icon">
            <i className="bx bx-search"></i>
          </div>
          <p className="search-text menu-text">Search</p>
        </div>
        <div
          onClick={libraryMenuOnClick}
          className={`library-menu menu-item ${
            location.pathname === "/library" ? "active" : ""
          }`}
        >
          <div className="library-icon menu-icon">
            <i className="bx bx-library"></i>
          </div>
          <p className="library-text menu-text">Library</p>
        </div>
      </div>
      <div
        onClick={profileMenuOnClick}
        className={`profile-menu ${
          location.pathname === "/me" ? "active" : ""
        }`}
      >
        <div className="profile-avatar">
          <img
            src={auth.user?.avatar_url ?? emptyProfilePicture}
            width={25}
            height={25}
            alt=""
          />
        </div>
        <p className="profile-name">
          {auth.user.first_name} {auth.user.last_name}
        </p>
      </div>
    </MenuWrapper>
  );
}
