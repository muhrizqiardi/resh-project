import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Wrapper } from "./styles";
import dotsMenu from "../../assets/dots-menu.svg";
import addToLibraryIcon from "../../assets/add-to-library.svg";
import share from "../../assets/share.svg";
import { find } from "lodash";
import DOMPurify from "dompurify";
import { Helmet } from "react-helmet";
import startReadingIcon from "../../assets/start-reading.svg";
import CardMenuPopup from "../CardMenuPopup";
import ProgressUpdater from "../ProgressUpdater/ProgressUpdater";
import { useDispatch, useSelector } from "react-redux";

function BookDetail({ googleBooksVolumeId }) {
  const [bookData, setBookData] = useState();
  const dispatch = useDispatch();
  const { library, auth } = useSelector(({ library, auth }) => ({
    library,
    auth,
  }));
  const libraryData =
    find(library.library, { google_books_volume_id: googleBooksVolumeId }) ??
    false;
  const readingProgress = libraryData.started_reading
    ? libraryData.current_page / libraryData.page_count
    : false;

  const [anchorEl, setAnchorEl] = useState(null);
  const [progressUpdaterOpened, setProgressUpdaterOpened] = useState(false);

  const actionButtonHandler = () => {
    console.log({ libraryData });
    if (libraryData) {
      if (libraryData.started_reading) {
        // TODO: progress updater
        setProgressUpdaterOpened(true);
      } else {
        dispatch.library.startReading({
          library_item_id: libraryData.library_item_id,
          google_books_volume_id: googleBooksVolumeId,
        });
      }
    } else {
      dispatch.library.addToLibrary({
        username: auth.user.username,
        page_count:
          bookData.volumeInfo.pageCount ??
          prompt(
            "Unfortunately, we don't have an information of the page count of this book. Please enter the page count of this book yourself.",
            "Page count"
          ),
        google_books_volume_id: googleBooksVolumeId,
      });
    }
  };

  async function getBookData() {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${googleBooksVolumeId}`
      );
      setBookData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getBookData();
  }, []);

  return bookData ? (
    <Wrapper>
      <Helmet>
        <title>{bookData.volumeInfo.title} | RESH</title>
      </Helmet>
      <div className="disclaimer">
        This page is fetched from Google Books API
      </div>
      <div className="book-info">
        <div className="card-img">
          <img
            src={bookData.volumeInfo.imageLinks.thumbnail}
            alt="placeholder"
            height="100%"
            width="100%"
          />
        </div>
        <div className="card-desc">
          <div className="card-status">
            muhrizqiardi added this book to library 7 hours ago
          </div>
          <div className="book-title">{bookData.volumeInfo.title}</div>
          <div className="book-author">
            by <span>{bookData.volumeInfo.authors[0]}</span>
          </div>
          <div className="book-year">
            {moment(bookData.volumeInfo.publishedDate.year).year()}
          </div>
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
          <CardMenuPopup
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            library_item_id={libraryData.library_item_id}
            username={auth.user.username}
            page_count={libraryData.page_count}
            googleBooksVolumeId={googleBooksVolumeId}
          />
          {progressUpdaterOpened && (
            <ProgressUpdater
              progressUpdaterOpened={progressUpdaterOpened}
              setProgressUpdaterOpened={setProgressUpdaterOpened}
              username={auth.user.username}
              library_item_id={libraryData.library_item_id}
              title={bookData.volumeInfo.title}
              current_page={libraryData.current_page}
              page_count={libraryData.page_count}
              google_books_volume_id={googleBooksVolumeId}
            />
          )}
          <button
            className="action-button"
            onClick={() => actionButtonHandler(libraryData)}
          >
            {libraryData &&
              libraryData.started_reading &&
              Math.round(readingProgress * 100) + "%"}
            {libraryData && !libraryData.started_reading && (
              <span style={{ fontSize: 9 }}>START</span>
            )}
            {!libraryData && <img src={addToLibraryIcon} />}
          </button>
          <button className="share-button">
            <img src={share} alt="" />
          </button>
        </div>
      </div>
      <div className="book-info-detail">
        <div className="info-item">
          <div className="info-name">ISBN 10</div>
          <div className="info-value">
            {find(bookData.volumeInfo.industryIdentifiers, { type: "ISBN_10" })
              .identifier || "-"}
          </div>
        </div>
        <div className="info-item">
          <div className="info-name">ISBN 13</div>
          <div className="info-value">
            {find(bookData.volumeInfo.industryIdentifiers, { type: "ISBN_13" })
              .identifier || "-"}
          </div>
        </div>
        <div className="info-item">
          <div className="info-name">Published Date</div>
          <div className="info-value">
            {moment(bookData.volumeInfo.publishedDate).format("MMMM DD, YYYY")}
          </div>
        </div>
        <div className="info-item">
          <div className="info-name">Publisher</div>
          <div className="info-value">{bookData.volumeInfo.publisher}</div>
        </div>
        <div className="info-item">
          <div className="info-name">Page Count</div>
          <div className="info-value">{bookData.volumeInfo.pageCount}</div>
        </div>
        <div className="info-item">
          <div className="info-name">Authors</div>
          <div className="info-value">{Array(bookData.volumeInfo.authors)}</div>
        </div>
      </div>
      <article
        className="book-description"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(bookData.volumeInfo.description),
        }}
      ></article>
      <div className="reviews">
        <h4 className="review-section-title">Reviews</h4>
        <article className="review-item">
          <div className="reviewer-name">
            <span className="name-highlight">Name</span> reviewed
          </div>
          <div className="ratings">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
          </div>
          <div className="rating-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, hic
            natus. Necessitatibus reprehenderit repudiandae nesciunt explicabo
            voluptatem quisquam nobis ducimus culpa quis dolores magnam ratione,
            saepe deleniti magni at praesentium.
          </div>
        </article>
      </div>
    </Wrapper>
  ) : (
    <></>
  );
}
export default BookDetail;
