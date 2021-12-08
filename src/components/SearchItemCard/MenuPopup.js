import Popper from "@mui/material/Popper";
import { useDispatch } from "react-redux";
import { PopperItem, PopperWrapper } from "./styles";

export default function MenuPopup({ anchorEl, library_item_id }) {
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const dispatch = useDispatch();

  return (
    <Popper id={id} open={open} placement="left-start" anchorEl={anchorEl}>
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
      </PopperWrapper>
    </Popper>
  );
}
