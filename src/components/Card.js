import styled from "styled-components";
import colorPalette from "../variables/colorPalette";
import dotsMenu from "../assets/dots-menu.svg";
import addToLibrary from "../assets/add-to-library.svg";
import share from "../assets/share.svg";
import moment from "moment";
import Color from "color";
const Wrapper = styled.div`
  /* Mobile */
  box-sizing: content-box;
  width: 100%;
  min-height: 120px;
  /* ${(props) => (props.isQuote ? "" : "height: 120px;")} */
  background-color: white;
  border: 3px solid ${colorPalette.primaryDark.rgb()};
  border-radius: 15px;
  display: grid;
  grid-template-columns: ${(props) => (!props.isQuote ? "80px" : "")} 1fr 60px;
  & .card-img {
    padding: 10px 0 10px 10px;
    & img {
      height: 100px;
      width: 65px;
      border-radius: 7px;
    }
  }
  & .card-quote {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & .card-status {
      font-size: 11px;
      font-family: Inter, Arial, Helvetica, sans-serif;
      color: ${colorPalette.secondary.rgb()};
      margin-bottom: 5px;
    }
    & .quote-body {
      font-size: 16px;
      font-weight: bold;
      font-family: Raleway, Arial, Helvetica, sans-serif;
      margin-bottom: 5px;
    }
    & .quoted-from {
      font-size: 11px;
      font-family: Inter, Arial, Helvetica, sans-serif;
      color: ${colorPalette.secondary.rgb()};
      margin-top: 5px;
      & span {
        color: black;
      }
    }
  }
  & .card-desc {
    padding: 10px;
    & .card-status {
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
    & .book-progress {
      font-family: Inter, Arial, Helvetica, sans-serif;
      font-size: 11px;
      margin-top: 10px;
    }

    & .rating {
      margin-top: 4px;
      margin-bottom: 7px;
    }
    & .review-body {
      font-size: 11px;
      font-family: Inter, Arial, Helvetica, sans-serif;
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
  @media (min-width: 768px) {
    max-width: 765px;
    /* ${(props) =>
      props.isQuote ? "min-height: 180px;" : "height: 180px;"} */
    min-height: 180px;
    border-radius: 30px;
    grid-template-columns: ${(props) => (!props.isQuote ? "115px" : "")} 1fr 60px;
    &:hover {
      background-color: ${Color("#ffffff").darken(0.04).rgb()};
    }
    & .card-img {
      padding: 15px 0 15px 15px;
      & img {
        height: 150px;
        width: 100px;
        border-radius: 20px;
      }
    }
    & .card-quote {
      padding: 20px;
      & .card-status {
        font-size: 12px;
        font-family: Inter, Arial, Helvetica, sans-serif;
        color: ${colorPalette.secondary.rgb()};
        margin-bottom: 5px;
      }
      & .quote-body {
        font-size: 24px;
        font-weight: bold;
        font-family: Raleway, Arial, Helvetica, sans-serif;
        margin-bottom: 5px;
      }
      & .quoted-from {
        font-size: 14px;
        font-family: Inter, Arial, Helvetica, sans-serif;
        color: ${colorPalette.secondary.rgb()};
        margin-bottom: 5px;
        & span {
          color: black;
        }
      }
    }
    & .card-desc {
      padding: 15px;
      & .card-status {
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
      & .rating {
        margin-top: 4px;
        margin-bottom: 7px;
      }
      & .review-body {
        font-size: 16px;
        font-family: Inter, Arial, Helvetica, sans-serif;
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

function BookCard({ user, book, activity, time, review, quote, progress }) {
  return (
    <Wrapper isQuote={quote}>
      {!quote && (
        <div className="card-img">
          <img src={book.img} alt="placeholder" height="100%" width="100%" />
        </div>
      )}
      {quote ? (
        <div className="card-quote">
          <div className="card-status">
            {user.username} {activity} {moment(time).fromNow()}
          </div>
          <div className="quote-body">{quote.body}</div>
          <div className="quoted-from">
            From <span>{book.title}</span>
          </div>
        </div>
      ) : (
        <div className="card-desc">
          <div className="card-status">
            {user.username} {activity} {moment(time).fromNow()}
          </div>
          <div className="book-title">{book.title}</div>
          {review ? (
            <>
              <div className="rating">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bx-star"></i>
                <i className="bx bx-star"></i>
              </div>
              <div className="review-body">{review.body}</div>
            </>
          ) : (
            <>
              <div className="book-author">
                by <span>{book.author}</span> ·
                <span className="book-year"> {book.year}</span>
              </div>
              {<div className="book-progress">35 out of 107 pages</div>}
            </>
          )}
        </div>
      )}
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
