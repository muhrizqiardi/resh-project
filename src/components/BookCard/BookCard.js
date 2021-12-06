import dotsMenu from "../../assets/dots-menu.svg";
import addToLibrary from "../../assets/add-to-library.svg";
import share from "../../assets/share.svg";
import moment from "moment";
import { BookCardWrapper } from "./styles";

export function BookCard({ user, book, activity, time, review, quote }) {
  return (
    <BookCardWrapper isQuote={quote}>
      {!quote && (
        <div className="card-img">
          <img src={book.img} alt="placeholder" height="100%" width="100%" />
        </div>
      )}
      {quote ? (
        <div className="card-quote">
          <div className="card-status">
            {user.username} {activity} {moment(time).fromNow()}
          </div>
          <div className="quote-body">{quote.body}</div>
          <div className="quoted-from">
            From <span>{book.title}</span>
          </div>
        </div>
      ) : (
        <div className="card-desc">
          <div className="card-status">
            {user.username} {activity} {moment(time).fromNow()}
          </div>
          <div className="book-title">{book.title}</div>
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
                by <span>{book.author}</span>
              </div>
              <div className="book-year">{book.year}</div>
            </>
          )}
        </div>
      )}
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
  );
}
