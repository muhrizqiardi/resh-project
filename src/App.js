import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import Menu from "./components/Menu";
import Feed from "./pages/Feed";
import Header from "./components/Header";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Library from "./pages/Library";
import Details from "./pages/Details";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import { AuthContext } from "./contexts/AuthContext";

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
  const { user, loading, session } = useContext(AuthContext);

  useEffect(() => {
    if (!session) history.push("/login");
  }, []);
  
  return loading ? (
    <></>
  ) : (
    <Wrapper>
      <Switch>
        <Route exact path="/">
          {session ? (
            // if user already created
            user ? (
              <Redirect to="/feed" />
            ) : (
              <Redirect to="/createaccount" />
            )
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route exact path="/feed">
          <Menu
            feedMenuOnClick={() => history.push("/feed")}
            searchMenuOnClick={() => history.push("/search")}
            libraryMenuOnClick={() => history.push("/library")}
            profileMenuOnClick={() => history.push("/me")}
          />
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

        <Route exact path="/search">
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

        <Route exact path="/library">
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
                <Library />
              </Container>
            </Content>
          </Main>
        </Route>

        <Route exact path="/me">
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

        <Route exact path="/details">
          <Menu
            feedMenuOnClick={() => history.push("/feed")}
            searchMenuOnClick={() => history.push("/search")}
            libraryMenuOnClick={() => history.push("/library")}
            profileMenuOnClick={() => history.push("/me")}
          />
          <Main>
            <Header
              title="Details"
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
            <Content style={{ padding: 0 }}>
              <Details />
            </Content>
          </Main>
        </Route>

        <Route exact path="/createaccount">
          <CreateAccount />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Wrapper>
  );
}

export default App;
