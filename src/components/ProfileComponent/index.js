import { ButtonNormal, ButtonPrimary } from "../Button";
import { useDispatch } from "react-redux";
import { Wrapper } from "./styles";
import supabase from "../../configs/supabase";

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
      <ButtonNormal style={{ margin: "10px 0" }} onClick={() => supabase.auth.signOut()}>Log Out</ButtonNormal>
    </Wrapper>
  );
}
