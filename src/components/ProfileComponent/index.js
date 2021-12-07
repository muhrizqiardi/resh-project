import { ButtonNormal, ButtonPrimary } from "../Button";
import { useDispatch } from "react-redux";
import { Wrapper } from "./styles";
import { useSelector } from "react-redux";
import supabase from "../../configs/supabase";
import emptyProfilePicture from "../../assets/empty-profile-picture.png";

export default function ProfileComponent(props) {
  const auth = useSelector(({ auth }) => auth);
  return (
    <Wrapper>
      <div className="profile-avatar">
        <img
          src={auth.user?.avatar_url ?? emptyProfilePicture}
          alt="Avatar of user"
        />
      </div>
      <p className="profile-name">
        {auth.user.first_name} {auth.user.last_name}
      </p>
      {auth.user.description ? (
        <p className="profile-desc">{auth.user?.description ?? ""}</p>
      ) : (
        ""
      )}
      <ButtonPrimary>Profile Settings</ButtonPrimary>
      <ButtonNormal
        style={{ margin: "10px 0" }}
        onClick={() => supabase.auth.signOut()}
      >
        Log Out
      </ButtonNormal>
    </Wrapper>
  );
}
