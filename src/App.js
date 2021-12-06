import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";
import Feed from "./pages/feed";
import Search from "./pages/search";
import Library from "./pages/library"
import Profile from "./pages/profile";

function App() {
  const history = useHistory();
  return (
    <Switch>
      <Route path="/feed">
        <Feed />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/library">
        <Library />
      </Route>
      <Route path="/me">
        <Profile />
      </Route>
    </Switch>
  );
}

export default App;
