import Menu from "../../components/Menu";
import Header from "../../components/Header";
import { Wrapper, Main, Content, Container } from "./styles";
import { FeedModule } from "../../modules/FeedModule";
import { useHistory } from "react-router";

export default function Feed(props) {
  const history = useHistory();

  return (
    <>
      <Wrapper>
        <Menu
          feedMenuOnClick={() => history.push("/feed")}
          searchMenuOnClick={() => history.push("/search")}
          libraryMenuOnClick={() => history.push("/library")}
          profileMenuOnClick={() => history.push("/me")}
        />
        <Main>
          <Header title="Feed" />
          <Content>
            <Container>
              <FeedModule />
            </Container>
          </Content>
        </Main>
      </Wrapper>
    </>
  );
}
