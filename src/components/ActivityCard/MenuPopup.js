import Popper from "@mui/material/Popper";
import { useDispatch } from "react-redux";
import { PopperItem, PopperWrapper } from "./styles";

export default function MenuPopup({
  anchorEl,
  library_item_id,
  username,
  googleBooksVolumeId,
}) {
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const dispatch = useDispatch();

  return (
    <>
      <Popper id={id} open={open} placement="left-start" anchorEl={anchorEl}>
        {library_item_id ? (
          <PopperWrapper className="">
            <PopperItem
              className="color-error"
              onClick={() =>
                dispatch.library.removeFromLibrary({
                  library_item_id,
                })
              }
            >
              Remove from library
            </PopperItem>
            <PopperItem
              className="color-info"
              onClick={() =>
                dispatch.library.startReading({
                  library_item_id,
                })
              }
            >
              Start Reading
            </PopperItem>
            <PopperItem>Create Review</PopperItem>
            <PopperItem>Quote this Book</PopperItem>
          </PopperWrapper>
        ) : (
          <PopperWrapper className="">
            <PopperItem
              className="color-info"
              onClick={() => {
                dispatch.library.addToLibrary({
                  username,
                  google_books_volume_id: googleBooksVolumeId,
                });
              }}
            >
              Add to library
            </PopperItem>
            <PopperItem>Create Review</PopperItem>
            <PopperItem>Quote this Book</PopperItem>
          </PopperWrapper>
        )}
      </Popper>
      <div className="popup-backdrop">

      </div>
    </>
  );
}
