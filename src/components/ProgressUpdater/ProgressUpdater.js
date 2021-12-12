import {
  BookImage,
  ProgressUpdaterWrapper,
  Title,
  Text,
  Backdrop,
} from "./styles";
import TextBox from "../TextBox";
import { ButtonPrimary } from "../Button";
import bookImg from "../../assets/book-img.png";
import { useState } from "react";
import { useDispatch } from "react-redux";

function ProgressUpdater({
  setProgressUpdaterOpened,
  title,
  username,
  library_item_id,
  current_page,
  page_count,
  google_books_volume_id,
}) {
  const [newCurrentPage, setNewCurrentPage] = useState(current_page);
  const dispatch = useDispatch();

  const handleUpdateButton = async () => {
    await dispatch.library.updateReadingProgress({
      username,
      library_item_id,
      current_page: newCurrentPage,
      page_count,
      google_books_volume_id,
    });
    setProgressUpdaterOpened(false);
  };

  return (
    <>
      <ProgressUpdaterWrapper>
        <BookImage>
          <img src={bookImg} alt="" />
        </BookImage>
        <Title>Update Your Book Reading Progress </Title>
        <Text>for "{title}"</Text>
        <TextBox
          style={{
            width: 120,
            textAlign: "center",
            marginBottom: 24,
            marginTop: 24,
          }}
          type="number"
          onChange={(e) => setNewCurrentPage(parseInt(e.target.value))}
          value={newCurrentPage}
        ></TextBox>
        <Text>of {page_count}</Text>
        <ButtonPrimary
          style={{ marginTop: 24 }}
          onClick={handleUpdateButton}
          disabled={
            newCurrentPage > page_count ||
            newCurrentPage === null ||
            newCurrentPage === undefined ||
            newCurrentPage === ""
          }
        >
          Update
        </ButtonPrimary>
      </ProgressUpdaterWrapper>
      <Backdrop onClick={() => setProgressUpdaterOpened(false)} />
    </>
  );
}
export default ProgressUpdater;
