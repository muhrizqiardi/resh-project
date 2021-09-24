import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Menu from "./components/Menu";
import Feed from "./pages/Feed";
import Header from "./components/Header";
import { useHistory } from "react-router";
import Search from "./pages/Search";
import Profile from "./pages/Profile";

const Wrapper = styled.div`
  /* Mobile */
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;

  /* Desktop */
  @media (min-width: 768px) {
    justify-self: stretch;
    flex-direction: row;
  }
`;

const Main = styled.div`
  width: 100%;
  height: calc(100vh - 56px);
  margin: 0 auto;
  /* Desktop */
  @media (min-width: 768px) {
    height: unset;
    overflow-y: auto;
  }
`;

const Content = styled.div`
  height: calc(100% - 56px);
  padding: 10px 13px 10px 10px;
  overflow-y: scroll;
  @media (min-width: 768px) {
    height: unset;
    overflow-y: unset;
    padding: 10px 0;
  }
`;

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  display: grid;
  row-gap: 10px;
`;

function App() {
  const history = useHistory();
  return (
    <Wrapper>
      <Menu
        feedMenuOnClick={() => history.push("/feed")}
        searchMenuOnClick={() => history.push("/search")}
        libraryMenuOnClick={() => history.push("/library")}
        profileMenuOnClick={() => history.push("/me")}
      />
      <Switch>
        <Route path="/feed">
          {/* Feed */}
          <Main>
            <Header title="Feed" />
            <Content>
              <Container>
                <Feed />
              </Container>
            </Content>
          </Main>
        </Route>

        <Route path="/search">
          <Main>
            <Header
              title="Search"
              leftIcon={
                history.length > 1 ? (
                  <i className="bx bx-chevron-left"></i>
                ) : (
                  <></>
                )
              }
              leftAction={
                history.length > 1 ? () => history.push("/feed") : () => {}
              }
            />
            <Content>
              <Container>
                <Search />
              </Container>
            </Content>
          </Main>
        </Route>

        <Route path="/library">
          <Main>
            <Header
              title="Library"
              leftIcon={
                history.length > 1 ? (
                  <i className="bx bx-chevron-left"></i>
                ) : (
                  <></>
                )
              }
              leftAction={
                history.length > 1 ? () => history.push("/feed") : () => {}
              }
            />
            <Content>
              <Container>
                <Feed />
              </Container>
            </Content>
          </Main>
        </Route>

        <Route path="/me">
          <Main>
            <Header
              title="Your Profile"
              leftIcon={
                history.length > 1 ? (
                  <i className="bx bx-chevron-left"></i>
                ) : (
                  <></>
                )
              }
              leftAction={
                history.length > 1 ? () => history.push("/feed") : () => {}
              }
            />
            <Content>
              <Container>
                <Profile />
              </Container>
            </Content>
          </Main>
        </Route>
      </Switch>
    </Wrapper>
  );
}

export default App;
