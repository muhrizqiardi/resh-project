import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MenuPopup from "./MenuPopup";
import { BookCardSkeletonWrapper, LibraryItemCardWrapper } from "./styles";
import share from "../../assets/share.svg";
import dotsMenu from "../../assets/dots-menu.svg";
import startReadingIcon from "../../assets/start-reading.svg";

export function LibraryItemCard({ googleBooksVolumeId, libraryData }) {
  const [googleBooksData, setGoogleBooksData] = useState();
  const dispatch = useDispatch();
  const { auth, library } = useSelector(({ auth, library }) => ({
    auth,
    library,
  }));

  const readingProgress = libraryData.started_reading
    ? Math.round(
        googleBooksData.volumeInfo.pageCount / libraryData.current_page
      )
    : false;

  // States for MenuPopup
  const [anchorEl, setAnchorEl] = useState(null);

  async function getBookData() {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${googleBooksVolumeId}`
      );
      console.log("response for book", response.data);
      setGoogleBooksData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getBookData();
  }, []);

  return googleBooksData ? (
    <LibraryItemCardWrapper>
      <div className="card-img">
        <img
          src={googleBooksData.volumeInfo.imageLinks.thumbnail ?? ""}
          alt="placeholder"
          height="100%"
          width="100%"
        />
      </div>
      <div className="card-desc">
        <div className="book-title">
          <Link to={`/books/${googleBooksData.id}`}>
            {googleBooksData.volumeInfo.title}
          </Link>
        </div>
        <div className="book-author">
          by <span>{googleBooksData.volumeInfo.authors ?? "-"}</span>
        </div>
        <div className="book-year">{googleBooksData.year}</div>
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
        <MenuPopup
          anchorEl={anchorEl}
          library_item_id={libraryData.library_item_id}
        />
        <button
          className="action-button"
          onClick={() => {
            dispatch.library.addToLibrary({
              username: auth.user.username,
              google_books_volume_id: googleBooksVolumeId,
            });
          }}
        >
          {readingProgress ? (
            `${readingProgress * 100}%`
          ) : (
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
