import { HeaderWrapper } from "./styles";

export function Header({
  title,
  leftIcon,
  leftAction,
  rightIcon,
  rightAction,
}) {
  return (
    <HeaderWrapper
      leftActionAvailable={Boolean(leftAction)}
      rightActionAvailable={Boolean(rightAction)}
    >
      <div onClick={leftAction} className="left-action">
        <div className="left-action-icon">{leftIcon}</div>
      </div>
      <div className="header-content">
        <h1>{title}</h1>
      </div>
      <div onClick={rightAction} className="right-action">
        <div className="left-action-icon">{rightIcon}</div>
      </div>
    </HeaderWrapper>
  );
}
