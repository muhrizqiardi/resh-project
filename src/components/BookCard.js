import styled from "styled-components";
import colorPalette from "../variables/colorPalette";

const Wrapper = styled.div`
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
      font-family: Inter, Arial, Helvetica, sans-serif;
      margin-bottom: 5px;
    }
    & .book-author {
      font-size: 11px;
      font-family: Inter, Arial, Helvetica, sans-serif;
      color: ${colorPalette.secondary.rgb()};
      margin-bottom: 5px;
      & span {
        color: black
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
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    & .menu-button,  
    & .love-button,
    & .share-button
    {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
`;

function BookCard(props) {
  return (
    <Wrapper>
      <div className="card-img">
        <img src="https://dummyimage.com/100x150.png" alt="placeholder" height="100%" width="100%" />
      </div>
      <div className="card-desc">
        <div className="book-status">
          Added to library last month
        </div>
        <div className="book-title">
          Book Title
        </div>
        <div className="book-author">
          by <span>Author McAuthor</span>
        </div>
        <div className="book-year">
          1980
        </div>
      </div>
      <div className="card-menu">
        <div className="menu-button"><i className="bx bx-dots-horizontal-rounded"></i></div>
        <div className="love-button"><i className="bx bx-heart" /></div>
        <div className="share-button"><i className='bx bxs-share-alt' ></i></div>
      </div>
    </Wrapper>
  );
}

export default BookCard;