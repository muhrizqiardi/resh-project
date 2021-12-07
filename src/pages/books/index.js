import BookDetailModule from "../../modules/BookDetailModule";
import { Wrapper, Main, Content, Container } from "./styles";
import { useHistory } from "react-router";
import Menu from "../../components/Menu";
import Header from "../../components/Header";

function Books({ googleBooksVolumeId }) {
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
          <Header title="Details" />
          <Content>
            <Container>
              <BookDetailModule googleBooksVolumeId={googleBooksVolumeId} />
            </Container>
          </Content>
        </Main>
      </Wrapper>
    </>
  );
}
export default Books;
