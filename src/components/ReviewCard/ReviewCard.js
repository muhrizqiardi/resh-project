import axios from "axios";
import moment from "moment";
import { find } from "lodash";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuPopup from "./MenuPopup";
import { ReviewCardSkeletonWrapper, ReviewCardWrapper } from "./styles";
import share from "../../assets/share.svg";
import dotsMenu from "../../assets/dots-menu.svg";
import startReadingIcon from "../../assets/start-reading.svg";
import addToLibraryIcon from "../../assets/add-to-library.svg";

export function ReviewCard({ googleBooksVolumeId, activityData }) {
  const [bookData, setBookData] = useState();
  const dispatch = useDispatch();
  const { library } = useSelector(({ library }) => ({ library }));
  const libraryData =
    find(library.library, { google_books_volume_id: googleBooksVolumeId }) ??
    false;
  const readingProgress = libraryData.started_reading
    ? Math.round(bookData.volumeInfo.pageCount / libraryData.current_page)
    : false;

  console.log(googleBooksVolumeId, libraryData);

  const [anchorEl, setAnchorEl] = useState(null);

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
    <ReviewCardWrapper>
      <div className="card-img">
        <img
          src={bookData.volumeInfo.imageLinks?.thumbnail ?? ""}
          alt={`Cover of ${bookData?.volumeInfo.title ?? "a book"}`}
          height="100%"
          width="100%"
        />
      </div>
      <div className="card-desc">
        <div className="card-status">
          {activityData.username} {activityData.activity_type}{" "}
          {moment(activityData.occured_at).fromNow()}
        </div>
        <div className="book-title">
          <Link to={`/books/${bookData.id}`}>{bookData.volumeInfo.title}</Link>
        </div>
        <div className="rating">
          {activityData.activity_attribute.review.rating >= 0.2 ? (
            <i className="bx bxs-star"></i>
          ) : (<i className="bx bx-star"></i>)}
          {activityData.activity_attribute.review.rating >= 0.4 ? (
            <i className="bx bxs-star"></i>
          ) : (<i className="bx bx-star"></i>)}
          {activityData.activity_attribute.review.rating >= 0.6 ? (
            <i className="bx bxs-star"></i>
          ) : (<i className="bx bx-star"></i>)}
          {activityData.activity_attribute.review.rating >= 0.8 ? (
            <i className="bx bxs-star"></i>
          ) : (<i className="bx bx-star"></i>)}
          {activityData.activity_attribute.review.rating === 1 ? (
            <i className="bx bxs-star"></i>
          ) : (<i className="bx bx-star"></i>)}
        </div>
        <div className="review-body">
          {activityData.activity_attribute.review.body}
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
        <MenuPopup
          anchorEl={anchorEl}
          library_item_id={libraryData.library_item_id}
        />
        <button
          className="action-button"
          onClick={() => {
            dispatch.library.addToLibrary({
              username: activityData.username,
              google_books_volume_id: googleBooksVolumeId,
            });
          }}
        >
          {libraryData && libraryData.started_reading && readingProgress * 100}
          {libraryData && !libraryData.started_reading && (
            <img src={startReadingIcon} />
          )}
          {!libraryData && <img src={addToLibraryIcon} />}
        </button>
        <button className="share-button">
          <img src={share} alt="" />
        </button>
      </div>
    </ReviewCardWrapper>
  ) : (
    <ReviewCardSkeleton />
  );
}

export const ReviewCardSkeleton = () => (
  <ReviewCardSkeletonWrapper>
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
      <div className="rating">
        <span className="rating-placeholder"></span>
        <span className="rating-placeholder"></span>
        <span className="rating-placeholder"></span>
        <span className="rating-placeholder"></span>
        <span className="rating-placeholder"></span>
      </div>
      <div className="review-body">
        <span className="review-body-placeholder"></span>
        <span className="review-body-placeholder"></span>
        <span className="review-body-placeholder"></span>
        <span className="review-body-placeholder"></span>
        <span className="review-body-placeholder"></span>
      </div>
    </div>
    <div className="card-menu">
      <div className="menu-button"></div>
      <div className="action-button"></div>
      <div className="share-button"></div>
    </div>
  </ReviewCardSkeletonWrapper>
);
