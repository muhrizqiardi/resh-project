import Menu from "../../components/Menu";
import Header from "../../components/Header";
import { Main, Content, Container, Wrapper } from "./styles";
import { SearchModule } from "../../modules/SearchModule";
import { useHistory } from "react-router";

function Search(props) {
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
          title="Search"
          leftIcon={
            history.length > 1 ? <i className="bx bx-chevron-left"></i> : <></>
          }
          leftAction={
            history.length > 1 ? () => history.push("/feed") : () => {}
          }
        />
        <Content>
          <Container>
            <SearchModule />
          </Container>
        </Content>
      </Main>
    </Wrapper>
  );
}
export default Search;
