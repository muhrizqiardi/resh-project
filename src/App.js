import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Menu from "./components/Menu";
import Feed from "./pages/Feed";
import Header from "./components/Header";
import { useHistory } from "react-router";

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
    height: 100vh;
  }
`;

const Content = styled.div`
  height: calc(100% - 56px);
  padding: 10px 13px 10px 10px;
  overflow-y: scroll;
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
        feedMenuOnClick={() => history.push('/feed')}
        searchMenuOnClick={() => history.push('/search')}
        libraryMenuOnClick={() => history.push('/library')}
        profileMenuOnClick={() => history.push('/me')}
      />
      <Switch>
        <Route path="/feed">
          <Main>
            <Container>
              <Header
                title="Feed"
                rightIcon={<i className="bx bx-search"></i>}
                rightAction={() => (window.location = "#")}
              />
            </Container>
            <Content>
              <Container>
                <Feed />
              </Container>
            </Content>
          </Main>
        </Route>
        <Route path="/me">
          <Main>
            <Container>
              <Header
                title="Your Profile"
                leftIcon={<i className="bx bx-chevron-left"></i>}
                leftAction={() => (window.location = "#")}
              />
            </Container>
            <Content>
              <Container>
                <Feed />
              </Container>
            </Content>
          </Main>
        </Route>
        <Route path="/user"></Route>
        <Route path="/search"></Route>
      </Switch>
    </Wrapper>
  );
}

export default App;
