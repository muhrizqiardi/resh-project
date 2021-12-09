import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MenuPopup from "./MenuPopup";
import { BookCardSkeletonWrapper, LibraryItemCardWrapper } from "./styles";
import share from "../../assets/share.svg";
import dotsMenu from "../../assets/dots-menu.svg";
import startReadingIcon from "../../assets/start-reading.svg";
import CardMenuPopup from "../CardMenuPopup";
import ProgressUpdater from "../ProgressUpdater";

export function LibraryItemCard({ googleBooksVolumeId, libraryData }) {
  const [bookData, setBookData] = useState();
  const dispatch = useDispatch();
  const { auth, library } = useSelector(({ auth, library }) => ({
    auth,
    library,
  }));

  const readingProgress = libraryData.started_reading
    ? libraryData.current_page / libraryData.page_count
    : false;

  // States for MenuPopup
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
    console.log(bookData);
  }, []);

  return bookData ? (
    <LibraryItemCardWrapper>
      <div className="card-img">
        <img
          src={bookData.volumeInfo.imageLinks?.thumbnail ?? ""}
          alt={`Cover of ${bookData?.volumeInfo.title ?? "a book"}`}
          height="100%"
          width="100%"
        />
      </div>
      <div className="card-desc">
        <div className="book-title">
          <Link to={`/books/${bookData.id}`}>{bookData.volumeInfo.title}</Link>
        </div>
        <div className="book-author">
          by <span>{bookData.volumeInfo.authors ?? "-"}</span>
        </div>
        <div className="book-year">{bookData.year}</div>
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
            <img src={startReadingIcon} />
          )}
        </button>
        <button className="share-button">
          <img src={share} alt="" />
        </button>
      </div>
    </LibraryItemCardWrapper>
  ) : (
    <BookCardSkeleton />
  );
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
