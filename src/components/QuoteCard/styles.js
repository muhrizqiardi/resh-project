import styled from "styled-components";
import colorPalette from "../../constants/colorPalette";
import Color from "color";

export const QuoteCardWrapper = styled.article`
  /* Mobile */
  box-sizing: content-box;
  width: 100%;
  min-height: 120px;
  background-color: white;
  border: 3px solid ${colorPalette.primaryDark.rgb()};
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 60px;
  .card-img {
    padding: 10px 0 10px 10px;
    img {
      height: 100px;
      width: 65px;
      border-radius: 7px;
    }
  }
  .card-quote {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .card-status {
      font-size: 11px;
      font-family: Inter, Arial, Helvetica, sans-serif;
      color: ${colorPalette.secondary.rgb()};
      margin-bottom: 5px;
    }
    .quote-body {
      font-size: 16px;
      font-weight: bold;
      font-family: Raleway, Arial, Helvetica, sans-serif;
      margin-bottom: 5px;
    }
    .quoted-from {
      font-size: 11px;
      font-family: Inter, Arial, Helvetica, sans-serif;
      color: ${colorPalette.secondary.rgb()};
      margin-top: 5px;
      span {
        color: black;
      }
    }
  }
  .card-desc {
    padding: 10px;
    .card-status {
      font-size: 11px;
      font-family: Inter, Arial, Helvetica, sans-serif;
      color: ${colorPalette.secondary.rgb()};
      margin-bottom: 5px;
    }
    .book-title {
      font-size: 16px;
      font-weight: bold;
      font-family: Raleway, Arial, Helvetica, sans-serif;
      margin-bottom: 5px;
    }
    .book-author {
      font-size: 11px;
      font-family: Inter, Arial, Helvetica, sans-serif;
      color: ${colorPalette.secondary.rgb()};
      margin-bottom: 5px;
      span {
        color: black;
      }
    }
    .book-year {
      font-size: 11px;
      font-family: Inter, Arial, Helvetica, sans-serif;
      margin-bottom: 5px;
    }
    .rating {
      margin-top: 4px;
      margin-bottom: 7px;
    }
    .review-body {
      font-size: 11px;
      font-family: Inter, Arial, Helvetica, sans-serif;
    }
  }
  .card-menu {
    height: 120px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    .menu-button,
    .action-button,
    .share-button {
      border: none;

      width: 30px;
      height: 30px;
      background-color: white;
      border-radius: 100%;
      font-size: 12px;
      font-weight: bold;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
      }
      &:active {
        filter: brightness(0.75);
      }
    }
    .menu-button {
      background-color: ${colorPalette.primaryDark.rgb()};
      img {
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
    min-height: 180px;
    border-radius: 30px;
    grid-template-columns: 1fr 60px;
    &:hover {
      background-color: ${Color("#ffffff").darken(0.04).rgb()};
    }
    .card-img {
      padding: 15px 0 15px 15px;
      img {
        height: 150px;
        width: 100px;
        border-radius: 20px;
      }
    }
    .card-quote {
      padding: 20px;
      .card-status {
        font-size: 12px;
        font-family: Inter, Arial, Helvetica, sans-serif;
        color: ${colorPalette.secondary.rgb()};
        margin-bottom: 5px;
      }
      .quote-body {
        font-size: 24px;
        font-weight: bold;
        font-family: Raleway, Arial, Helvetica, sans-serif;
        margin-bottom: 5px;
      }
      .quoted-from {
        font-size: 14px;
        font-family: Inter, Arial, Helvetica, sans-serif;
        color: ${colorPalette.secondary.rgb()};
        margin-bottom: 5px;
        span {
          color: black;
        }
      }
    }
    .card-desc {
      padding: 15px;
      .card-status {
        font-size: 12px;
        font-family: Inter, Arial, Helvetica, sans-serif;
        color: ${colorPalette.secondary.rgb()};
        margin-bottom: 5px;
      }
      .book-title a {
        text-decoration: none;
        color: inherit;
        font-size: 36px;
        font-weight: bold;
        font-family: Raleway, Arial, Helvetica, sans-serif;
        margin-bottom: 5px;
        &:hover {
          text-decoration: underline;
        }
      }
      .book-author {
        font-size: 16px;
        font-family: Inter, Arial, Helvetica, sans-serif;
        color: ${colorPalette.secondary.rgb()};
        margin-bottom: 5px;
        span {
          color: black;
        }
      }
      .book-year {
        font-size: 16px;
        font-family: Inter, Arial, Helvetica, sans-serif;
        margin-bottom: 5px;
      }
      .rating {
        margin-top: 4px;
        margin-bottom: 7px;
      }
      .review-body {
        font-size: 16px;
        font-family: Inter, Arial, Helvetica, sans-serif;
      }
    }
    .card-menu {
      height: 180px;
      padding: 15px 15px 15px 0;
      .menu-button,
      .action-button,
      .share-button {
        width: 40px;
        height: 40px;
      }
    }
  }
`;

export const QuoteCardSkeletonWrapper = styled.div`
  @keyframes pulse {
    from {
      filter: brightness(1);
    }
    to {
      filter: brightness(0.85);
    }
  }
  /* Mobile */
  box-sizing: content-box;
  width: 100%;
  min-height: 120px;
  animation: 0.5s linear 1s infinite alternate pulse;
  border: 3px solid lightgray;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 60px;
  .card-img {
    padding: 10px 0 10px 10px;
    .img-placeholder {
      background-color: lightgray;
      height: 100px;
      width: 65px;
      border-radius: 7px;
    }
  }
  .card-quote {
    padding: 10px;
    display: flex;
    flex-direction: column;
    .card-status {
      font-size: 11px;
      font-family: Inter, Arial, Helvetica, sans-serif;
      color: ${colorPalette.secondary.rgb()};
      margin-bottom: 5px;
      .card-status-placeholder {
        display: inline-block;
        height: 11px;
        width: 100px;
        border-radius: 16px;
        margin-bottom: 8px;
        background-color: lightgray;
      }
    }
    .quote-body {
      font-size: 16px;
      font-weight: bold;
      font-family: Raleway, Arial, Helvetica, sans-serif;
      margin-bottom: 5px;
      .quote-body-placeholder {
        display: inline-block;
        height: 16px;
        width: 100%;
        border-radius: 16px;
        margin-bottom: 8px;
        background-color: lightgray;
      }
    }
    .quoted-from {
      font-size: 11px;
      font-family: Inter, Arial, Helvetica, sans-serif;
      color: ${colorPalette.secondary.rgb()};
      margin-top: 5px;
      span.quoted-from-placeholder {
        display: inline-block;
        height: 11px;
        width: 100px;
        border-radius: 16px;
        margin-bottom: 8px;
        background-color: lightgray;
      }
      span {
        color: black;
      }
    }
  }
  .card-menu {
    padding: 10px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    .menu-button,
    .action-button,
    .share-button {
      width: 30px;
      height: 30px;
      background-color: lightgray;
      border-radius: 100%;
      font-size: 12px;
      font-weight: bold;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
      }
      &:active {
        filter: brightness(0.75);
      }
    }
  }

  /* Desktop */
  @media (min-width: 768px) {
    max-width: 765px;
    min-height: 180px;
    border-radius: 30px;
    grid-template-columns: 1fr 60px;
    .card-img {
      padding: 15px 0 15px 15px;
      .img-placeholder {
        height: 150px;
        width: 100px;
        border-radius: 20px;
      }
    }
    .card-quote {
      padding: 20px;
      .card-status {
        font-size: 12px;
        font-family: Inter, Arial, Helvetica, sans-serif;
        color: ${colorPalette.secondary.rgb()};
        margin-bottom: 5px;
        .card-status-placeholder {
          display: inline-block;
          height: 12px;
          width: 220px;
          border-radius: 16px;
          margin-bottom: 8px;
          background-color: lightgray;
        }
      }
      .quote-body {
        font-size: 24px;
        font-weight: bold;
        font-family: Raleway, Arial, Helvetica, sans-serif;
        margin-bottom: 5px;
        .quote-body-placeholder {
          display: inline-block;
          height: 24px;
          width: 100%;
          border-radius: 16px;
          margin-bottom: 8px;
          background-color: lightgray;
        }
      }
      .quoted-from {
        font-size: 14px;
        font-family: Inter, Arial, Helvetica, sans-serif;
        color: ${colorPalette.secondary.rgb()};
        margin-bottom: 5px;
        span.quoted-from-placeholder {
          display: inline-block;
          height: 14px;
          width: 100px;
          border-radius: 16px;
          margin-bottom: 8px;
          background-color: lightgray;
        }
        span {
          color: black;
        }
      }
    }
    .card-desc {
      padding: 15px;
      .card-status {
        font-size: 12px;
        font-family: Inter, Arial, Helvetica, sans-serif;
        color: ${colorPalette.secondary.rgb()};
        margin-bottom: 5px;
      }
      .book-title {
        text-decoration: none;
        color: inherit;
        font-size: 36px;
        font-weight: bold;
        font-family: Raleway, Arial, Helvetica, sans-serif;
        margin-bottom: 5px;
        &:hover {
          text-decoration: underline;
        }
        span {
          width: 100%;
          height: 24px;
          display: inline-block;
          background: lightgray;
          border-radius: 36px;
        }
      }
      .book-author {
        font-size: 16px;
        font-family: Inter, Arial, Helvetica, sans-serif;
        color: ${colorPalette.secondary.rgb()};
        margin-bottom: 5px;
        span {
          color: black;
        }
        span.book-author-placeholder {
          height: 16px;
          display: inline-block;
          background: lightgray;
          border-radius: 10px;
        }
      }
      .book-year {
        font-size: 16px;
        font-family: Inter, Arial, Helvetica, sans-serif;
        margin-bottom: 5px;
        span {
          height: 16px;
          display: inline-block;
          background: lightgray;
          border-radius: 10px;
        }
      }
      .rating {
        margin-top: 4px;
        margin-bottom: 7px;
      }
      .review-body {
        font-size: 16px;
        font-family: Inter, Arial, Helvetica, sans-serif;
      }
    }
    .card-menu {
      padding: 15px 15px 15px 0;
      height: 180px;
      .menu-button,
      .action-button,
      .share-button {
        width: 40px;
        height: 40px;
      }
    }
  }
`;

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