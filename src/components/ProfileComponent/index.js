import { ButtonNormal, ButtonPrimary } from "../Button";
import { Wrapper } from "./styles";

export default function ProfileComponent(props) {
  return (
    <Wrapper>
      <div className="profile-avatar">
        <img
          src="https://thispersondoesnotexist.com/image"
          alt="Avatar of user"
        />
      </div>
      <p className="profile-name">My Name</p>
      <p className="profile-desc">
        Fusce sed ullamcorper tellus, nec dictum mauris. Integer a facilisis
        tellus, eget aliquam turpis. Etiam nunc quam, mollis sed mauris ut,
        venenatis lobortis mi.
      </p>
      <ButtonPrimary>Profile Settings</ButtonPrimary>
      <ButtonNormal style={{ margin: "10px 0" }}>Log Out</ButtonNormal>
    </Wrapper>
  );
}
