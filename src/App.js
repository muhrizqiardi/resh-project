import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";
import Feed from "./pages/feed";
import Search from "./pages/search";
import Library from "./pages/library";
import Profile from "./pages/profile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const history = useHistory();
  const auth = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch.auth.signInAsync()
    console.log({auth});
  }, []);

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
