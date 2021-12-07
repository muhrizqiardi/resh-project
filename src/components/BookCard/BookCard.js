import dotsMenu from "../../assets/dots-menu.svg";
import addToLibrary from "../../assets/add-to-library.svg";
import share from "../../assets/share.svg";
import moment from "moment";
import { BookCardWrapper } from "./styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function BookCard({ user, googleBooksVolumeId, activity, time, review, quote }) {
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
    if (!quote) getBookData();
  }, []);

  if (quote) {
    return book ? (
      <BookCardWrapper isQuote={quote}>
        <div className="card-quote">
          <div className="card-status">
            {user.username} {activity} {moment(time).fromNow()}
          </div>
          <div className="quote-body">{quote.body}</div>
          <div className="quoted-from">
            From <span>{book.title}</span>
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
      </BookCardWrapper>
    ) : (
      <></>
    );
  } else {
    return book ? (
      <BookCardWrapper isQuote={quote}>
        <div className="card-img">
          <img
            src={book.volumeInfo.imageLinks.thumbnail ?? ""}
            alt="placeholder"
            height="100%"
            width="100%"
          />
        </div>
        <div className="card-desc">
          <div className="card-status">
            {user.username} {activity} {moment(time).fromNow()}
          </div>
          <div className="book-title">
            <Link to={`/books/${book.id}`}>{book.volumeInfo.title}</Link>
          </div>
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
                by <span>{book.volumeInfo.authors ?? "-"}</span>
              </div>
              <div className="book-year">{book.year}</div>
            </>
          )}
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
      </BookCardWrapper>
    ) : (
      <></>
    );
  }
}
