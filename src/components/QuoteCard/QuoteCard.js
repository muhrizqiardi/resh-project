import axios from "axios";
import moment from "moment";
import { find } from "lodash";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuPopup from "./MenuPopup";
import { QuoteCardSkeletonWrapper, QuoteCardWrapper } from "./styles";
import share from "../../assets/share.svg";
import dotsMenu from "../../assets/dots-menu.svg";
import startReadingIcon from "../../assets/start-reading.svg";
import addToLibraryIcon from "../../assets/add-to-library.svg";
import CardMenuPopup from "../CardMenuPopup";
import ProgressUpdater from "../ProgressUpdater";

export function QuoteCard({ googleBooksVolumeId, activityData }) {
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
      console.log("response for book", response.data);
      setBookData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getBookData();
  }, []);

  return bookData ? (
    <QuoteCardWrapper>
      <div className="card-quote">
        <div className="card-status">
          {activityData.username} {activityData.activity_type}{" "}
          {moment(activityData.occured_at).fromNow()}
        </div>
        <div className="quote-body">
          {activityData.activity_attribute.quote.body}
        </div>
        <div className="quoted-from">
          From <span>{bookData.volumeInfo.title}</span>
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
          username={activityData.username}
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
          {!libraryData && <img src={addToLibraryIcon} />}
        </button>
        <button className="share-button">
          <img src={share} alt="" />
        </button>
      </div>
    </QuoteCardWrapper>
  ) : (
    <QuoteCardSkeleton />
  );
}

export const QuoteCardSkeleton = () => (
  <QuoteCardSkeletonWrapper>
    <div className="card-quote">
      <div className="card-status">
        <span className="card-status-placeholder"></span>
      </div>
      <div className="quote-body">
        <span className="quote-body-placeholder"></span>
        <span className="quote-body-placeholder"></span>
        <span className="quote-body-placeholder"></span>
        <span className="quote-body-placeholder"></span>
        <span className="quote-body-placeholder"></span>
        <span className="quote-body-placeholder"></span>
      </div>
      <div className="quoted-from">
        <span className="quoted-from-placeholder"></span>
      </div>
    </div>
    <div className="card-menu">
      <div className="menu-button"></div>
      <div className="action-button"></div>
      <div className="share-button"></div>
    </div>
  </QuoteCardSkeletonWrapper>
);
