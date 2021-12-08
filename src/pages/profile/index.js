import Header from "../../components/Header";
import Menu from "../../components/Menu";
import ProfileComponent from "../../components/ProfileComponent"
import { Wrapper, Content, Container, Main } from "./styles";
import { useHistory } from "react-router";
import { Helmet } from "react-helmet";

function Profile(props) {
  const history = useHistory();
  return (
    <Wrapper>
      <Helmet>
        <title>Profile | RESH</title>
      </Helmet>
      <Menu
        feedMenuOnClick={() => history.push("/feed")}
        searchMenuOnClick={() => history.push("/search")}
        libraryMenuOnClick={() => history.push("/library")}
        profileMenuOnClick={() => history.push("/me")}
      />
      <Main>
        <Header
          title="Your Profile"
          leftIcon={
            history.length > 1 ? <i className="bx bx-chevron-left"></i> : <></>
          }
          leftAction={
            history.length > 1 ? () => history.push("/feed") : () => {}
          }
        />
        <Content>
          <Container>
            <ProfileComponent />
          </Container>
        </Content>
      </Main>
    </Wrapper>
  );
}
export default Profile;
