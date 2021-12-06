import styled from "styled-components";
import { ButtonNormal, ButtonPrimary } from "../components/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .profile-avatar {
    & img {
      width: 150px;
      height: 150px;
      border-radius: 100%;
      border: 3px solid white;
    }
  }
  .profile-name {
    text-align: center;
    font-family: "Raleway", Arial, Helvetica, sans-serif;
    font-size: 24px;
    font-weight: bold;
  }
  .profile-desc {
    max-width: 200px;
    text-align: center;
    font-family: "Inter", Arial, Helvetica, sans-serif;
    font-size: 12px;
  }
`;

function Profile(props) {
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
export default Profile;
