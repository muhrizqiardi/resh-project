import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { Wrapper, Content, Container, Main } from "./styles";
import { useHistory } from "react-router";
import LibraryModule from "../../modules/LibraryModule";

function Library(props) {
  const history = useHistory();

  return (
    <Wrapper>
      <Menu
        feedMenuOnClick={() => history.push("/feed")}
        searchMenuOnClick={() => history.push("/search")}
        libraryMenuOnClick={() => history.push("/library")}
        profileMenuOnClick={() => history.push("/me")}
      />
      <Main>
        <Header
          title="Library"
          leftIcon={
            history.length > 1 ? <i className="bx bx-chevron-left"></i> : <></>
          }
          leftAction={
            history.length > 1 ? () => history.push("/feed") : () => {}
          }
        />
        <Content>
          <Container>
            <LibraryModule />
          </Container>
        </Content>
      </Main>
    </Wrapper>
  );
}
export default Library;
