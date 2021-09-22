import styled from "styled-components";
import colorPalette from "../variables/colorPalette";
import dotsMenu from "../assets/dots-menu.svg";
import addToLibrary from "../assets/add-to-library.svg";
import share from "../assets/share.svg";
import moment from "moment";

const Wrapper = styled.div`
  /* Mobile */
  box-sizing: content-box;
  width: 100%;
  height: 120px;
  background-color: white;
  border: 3px solid ${colorPalette.primaryDark.rgb()};
  border-radius: 15px;
  display: grid;
  grid-template-columns: 90px 1fr 60px;
  & .card-img {
    padding: 10px;
    & img {
      height: 100px;
      width: 70px;
      border-radius: 7px;
    }
  }
  & .card-desc {
    padding: 10px 0;
    & .book-status {
      font-size: 11px;
      font-family: Inter, Arial, Helvetica, sans-serif;
      color: ${colorPalette.secondary.rgb()};
      margin-bottom: 5px;
    }
    & .book-title {
      font-size: 16px;
      font-weight: bold;
      font-family: Raleway, Arial, Helvetica, sans-serif;
      margin-bottom: 5px;
    }
    & .book-author {
      font-size: 11px;
      font-family: Inter, Arial, Helvetica, sans-serif;
      color: ${colorPalette.secondary.rgb()};
      margin-bottom: 5px;
      & span {
        color: black;
      }
    }
    & .book-year {
      font-size: 11px;
      font-family: Inter, Arial, Helvetica, sans-serif;
      margin-bottom: 5px;
    }
  }
  & .card-menu {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    & .menu-button,
    & .love-button,
    & .share-button {
      width: 30px;
      height: 30px;
      background-color: white;
      border-radius: 100%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      & img {
        width: 20px;
        height: 20px;
      }
      &:active {
        filter: brightness(0.75);
      }
    }
    & .menu-button {
      background-color: ${colorPalette.primaryDark.rgb()};
      & img {
        filter: invert(100%);
      }
      &:active {
        background-color: ${colorPalette.primaryDark.rgb()};
        filter: brightness(3);
      }
    }
  }

  /* Desktop */
  @media (min-width: 512px) {
    max-width: 768px;
    height: 180px;
    border-radius: 30px;
    grid-template-columns: 130px 1fr 60px;
    &:hover {
      box-shadow: 0px 1px 10px 0px #00000080;
      transform: translateY(-1px);
      transition-duration: 0.1s;
    }
    & .card-desc {
      padding: 15px 0;
    }
    & .card-img {
      padding: 15px;
      & img {
        height: 150px;
        width: 100px;
        border-radius: 20px;
      }
    }
    & .card-desc {
      &:hover {
        cursor: pointer;
      }
      & .book-status {
        font-size: 12px;
        font-family: Inter, Arial, Helvetica, sans-serif;
        color: ${colorPalette.secondary.rgb()};
        margin-bottom: 5px;
      }
      & .book-title {
        font-size: 36px;
        font-weight: bold;
        font-family: Raleway, Arial, Helvetica, sans-serif;
        margin-bottom: 5px;
      }
      & .book-author {
        font-size: 16px;
        font-family: Inter, Arial, Helvetica, sans-serif;
        color: ${colorPalette.secondary.rgb()};
        margin-bottom: 5px;
        & span {
          color: black;
        }
      }
      & .book-year {
        font-size: 16px;
        font-family: Inter, Arial, Helvetica, sans-serif;
        margin-bottom: 5px;
      }
    }
    & .card-menu {
      padding: 15px 15px 15px 0;
      & .menu-button,
      & .love-button,
      & .share-button {
        width: 40px;
        height: 40px;
      }
    }
  }
`;

function BookCard({ bookStatus, bookTitle, bookImg, bookAuthor, bookYear }) {
  return (
    <Wrapper>
      <div className="card-img">
        <img src={bookImg} alt="placeholder" height="100%" width="100%" />
      </div>
      <div className="card-desc">
        <div className="book-status">
          {bookStatus.status} {moment(bookStatus.time).fromNow()}
        </div>
        <div className="book-title">{bookTitle}</div>
        <div className="book-author">
          by <span>{bookAuthor}</span>
        </div>
        <div className="book-year">{bookYear}</div>
      </div>
      <div className="card-menu">
        <div className="menu-button">
          <img src={dotsMenu} alt="" />
        </div>
        <div className="love-button">
          <img src={addToLibrary} alt="" />
        </div>
        <div className="share-button">
          <img src={share} alt="" />
        </div>
      </div>
    </Wrapper>
  );
}

export default BookCard;
