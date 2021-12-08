import dotsMenu from "../../assets/dots-menu.svg";
import addToLibraryIcon from "../../assets/add-to-library.svg";
import startReadingIcon from "../../assets/start-reading.svg";
import share from "../../assets/share.svg";
import moment from "moment";
import { BookCardSkeletonWrapper, BookCardWrapper } from "./styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { library } from "../../store/models";
import { find } from "lodash";
import BookCardPopper from "./BookCardPopper";

export function BookCard({
  user,
  googleBooksVolumeId,
  activity,
  time,
  review,
  quote,
}) {
  const [book, setBook] = useState();
  const { auth, library } = useSelector((state) => ({
    auth: state.auth,
    library: state.library,
  }));
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const libraryData = find(library.library, {
    google_books_volume_id: googleBooksVolumeId,
  });

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
            <img src={addToLibraryIcon} alt="" />
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
          <button
            className="menu-button"
            onClick={(event) => {
              setAnchorEl(anchorEl ? null : event.currentTarget);
            }}
          >
            <img src={dotsMenu} alt="" />
          </button>
          <BookCardPopper anchorEl={anchorEl} googleBooksVolumeId={googleBooksVolumeId} username={auth.user.username} />
          <div
            className="action-button"
            onClick={() => {
              dispatch.library.addToLibrary({
                username: auth.user.username,
                google_books_volume_id: googleBooksVolumeId,
              });
            }}
          >
            {libraryData ? (
              <img src={startReadingIcon} />
            ) : (
              <img src={addToLibraryIcon} alt="" />
            )}
          </div>
          <div className="share-button">
            <img src={share} alt="" />
          </div>
        </div>
      </BookCardWrapper>
    ) : (
      <BookCardSkeleton />
    );
  }
}

export const BookCardSkeleton = () => (
  <BookCardSkeletonWrapper>
    <div className="card-img">
      <div className="img-placeholder"></div>
    </div>
    <div className="card-desc">
      <div className="card-status">
        <span className="card-status-placeholder"></span>
      </div>
      <div className="book-title">
        <span className="book-title-placeholder"></span>
      </div>
      <div className="book-author">
        <span className="book-author-placeholder"></span>
      </div>
      <div className="book-year">
        <span className="book-year-placeholder"></span>
      </div>
    </div>
    <div className="card-menu">
      <div className="menu-button"></div>
      <div className="action-button"></div>
      <div className="share-button"></div>
    </div>
  </BookCardSkeletonWrapper>
);
