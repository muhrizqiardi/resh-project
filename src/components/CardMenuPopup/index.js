import Popper from "@mui/material/Popper";
import { useDispatch } from "react-redux";
import { PopperItem, PopperWrapper, PopupBackdrop } from "./styles";

export default function CardMenuPopup({
  anchorEl,
  setAnchorEl,
  library_item_id,
  username,
  page_count,
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
              onClick={(event) => {
                dispatch.library.removeFromLibrary({
                  library_item_id,
                });
                setAnchorEl(anchorEl ? null : event.currentTarget);
              }}
            >
              Remove from library
            </PopperItem>
            <PopperItem
              className="color-info"
              onClick={(event) =>{
                dispatch.library.startReading({
                  library_item_id,
                  google_books_volume_id: googleBooksVolumeId,
                });
                setAnchorEl(anchorEl ? null : event.currentTarget);
              }}
            >
              Start Reading
            </PopperItem>
            <PopperItem onClick={(event) => {
              setAnchorEl(anchorEl ? null : event.currentTarget)
            }}>Create Review</PopperItem>
            <PopperItem onClick={(event) => {
              setAnchorEl(anchorEl ? null : event.currentTarget)
            }}>Quote this Book</PopperItem>
          </PopperWrapper>
        ) : (
          <PopperWrapper className="">
            <PopperItem
              className="color-info"
              onClick={(event) => {
                dispatch.library.addToLibrary({
                  username,
                  google_books_volume_id: googleBooksVolumeId,
                  page_count: page_count
                });
                setAnchorEl(anchorEl ? null : event.currentTarget);
              }}
            >
              Add to library
            </PopperItem>
            <PopperItem onClick={(event) => {
              setAnchorEl(anchorEl ? null : event.currentTarget)
            }}>Create Review</PopperItem>
            <PopperItem onClick={(event) => {
              setAnchorEl(anchorEl ? null : event.currentTarget)
            }}>Quote this Book</PopperItem>
          </PopperWrapper>
        )}
      </Popper>
      {open && (
        <PopupBackdrop
          onClick={(event) =>
            setAnchorEl(anchorEl ? null : event.currentTarget)
          }
        />
      )}
    </>
  );
}
