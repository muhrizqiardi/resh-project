import styled from "styled-components";
import colorPalette from "../../constants/colorPalette";

export const Wrapper = styled.article`
  .disclaimer {
    padding: 15px;
    text-align: center;
    text-transform: uppercase;
    font-family: Raleway, Arial, Helvetica, sans-serif;
    color: white;
    background-color: ${colorPalette.primaryDark};
  }

  .book-info {
    display: grid;
    grid-template-columns: 80px 1fr 60px;
    .card-img {
      padding: 10px 0 10px 10px;
      img {
        height: 100px;
        width: 65px;
        border-radius: 7px;
        background-color: #dbdedf;
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
  }

  .book-info-detail {
    padding: 10px 10px;
    font-size: 12px;
    display: grid;
    row-gap: 3px;
    .info-item {
      display: grid;
      grid-template-columns: 150px 1fr;
      .info-name {
        color: #566063;
      }
    }
  }

  article.book-description {
    padding: 10px 10px;
    font-size: 12px;
  }

  .reviews {
    padding: 10px 10px;
    font-size: 12px;
    h4.review-section-title {
      margin-bottom: 15px;
      font-size: 16px;
      font-family: "Raleway", Arial, Helvetica, sans-serif;
    }
    .reviewer-name {
      margin-bottom: 5px;
      color: #515151;
      span.name-highlight {
        color: black;
      }
    }
    .ratings {
      margin-bottom: 5px;
    }
    .rating-content {
      color: #515151;
    }
  }

  @media (min-width: 768px) {
    .book-info {
      grid-template-columns: 115px 1fr 60px;
      .card-img {
        padding: 15px 0 15px 15px;
        img {
          height: 150px;
          width: 100px;
          border-radius: 20px;
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
          font-size: 36px;
          font-weight: bold;
          font-family: Raleway, Arial, Helvetica, sans-serif;
          margin-bottom: 5px;
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
    .book-info-detail {
      padding: 15px 15px;
      font-size: 14px;
      display: grid;
      row-gap: 3px;
      .info-item {
        display: grid;
        grid-template-columns: 150px 1fr;
        .info-name {
          color: #566063;
        }
      }
    }
    article.book-description {
      padding: 15px 15px;
      font-size: 14px;
    }
    .reviews {
      padding: 15px 15px;
      font-size: 14px;
    }
  }
`;
