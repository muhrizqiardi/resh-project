import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Wrapper } from "./styles";
import dotsMenu from "../../assets/dots-menu.svg";
import addToLibrary from "../../assets/add-to-library.svg";
import share from "../../assets/share.svg";
import { find } from "lodash";
import DOMPurify from 'dompurify'

function BookDetail({googleBooksVolumeId}) {
  const [book, setBook] = useState();

  async function getBookData() {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${googleBooksVolumeId}`
      );
      console.log("response for book", response.data);
      setBook(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getBookData();
  }, []);

  return book ? (
    <Wrapper>
      <div className="disclaimer">
        This page is fetched from Google Books API
      </div>
      <div className="book-info">
        <div className="card-img">
          <img
            src={book.volumeInfo.imageLinks.thumbnail}
            alt="placeholder"
            height="100%"
            width="100%"
          />
        </div>
        <div className="card-desc">
          <div className="card-status">
            muhrizqiardi added this book to library 7 hours ago
          </div>
          <div className="book-title">{book.volumeInfo.title}</div>
          <div className="book-author">
            by <span>{book.volumeInfo.authors[0]}</span>
          </div>
          <div className="book-year">
            {moment(book.volumeInfo.publishedDate.year).year()}
          </div>
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
      </div>
      <div className="book-info-detail">
        <div className="info-item">
          <div className="info-name">ISBN 10</div>
          <div className="info-value">
            {find(book.volumeInfo.industryIdentifiers, { type: "ISBN_10" })
              .identifier || "-"}
          </div>
        </div>
        <div className="info-item">
          <div className="info-name">ISBN 13</div>
          <div className="info-value">
            {find(book.volumeInfo.industryIdentifiers, { type: "ISBN_13" })
              .identifier || "-"}
          </div>
        </div>
        <div className="info-item">
          <div className="info-name">Published Date</div>
          <div className="info-value">
            {moment(book.volumeInfo.publishedDate).format("MMMM DD, YYYY")}
          </div>
        </div>
        <div className="info-item">
          <div className="info-name">Publisher</div>
          <div className="info-value">{book.volumeInfo.publisher}</div>
        </div>
      </div>
      <article
        className="book-description"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(book.volumeInfo.description),
        }}
      ></article>
      <div className="reviews">
        <h4 className="review-section-title">Reviews</h4>
        <article className="review-item">
          <div className="reviewer-name"><span className="name-highlight">Name</span> reviewed</div>
          <div className="ratings">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
          </div>
          <div className="rating-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, hic natus. Necessitatibus reprehenderit repudiandae nesciunt explicabo voluptatem quisquam nobis ducimus culpa quis dolores magnam ratione, saepe deleniti magni at praesentium.
          </div>
        </article>
      </div>
    </Wrapper>
  ) : (
    <></>
  );
}
export default BookDetail;
