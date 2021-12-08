import Popper from "@mui/material/Popper";
import { PopperItem, PopperWrapper } from "./styles";

export default function BookCardPopper({ anchorEl }) {
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <Popper id={id} open={open} placement="left-start" anchorEl={anchorEl}>
      <PopperWrapper className="">
        <PopperItem className="color-error">Remove from library</PopperItem>
        <PopperItem className="color-info">Start Reading</PopperItem>
        <PopperItem>Create Review</PopperItem>
      </PopperWrapper>
    </Popper>
  );
}
