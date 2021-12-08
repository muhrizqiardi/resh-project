import Popper from "@mui/material/Popper";
import { useDispatch } from "react-redux";
import supabase from "../../configs/supabase";
import { PopperItem, PopperWrapper } from "./styles";

export default function BookCardPopper({
  anchorEl,
  googleBooksVolumeId,
  username,
}) {
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
              username,
              google_books_volume_id: googleBooksVolumeId,
            })
          }
        >
          Remove from library
        </PopperItem>
        <PopperItem className="color-info">Start Reading</PopperItem>
        <PopperItem>Create Review</PopperItem>
      </PopperWrapper>
    </Popper>
  );
}
