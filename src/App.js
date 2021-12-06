import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { Redirect } from "react-router";
import Feed from "./pages/feed";
import Search from "./pages/search";
import Library from "./pages/library";
import Profile from "./pages/profile";
import SignIn from "./pages/signin";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import supabase from "./configs/supabase";

function App() {
  const auth = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const session = supabase.auth.session();

    dispatch.auth.setSession(session);

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        dispatch.auth.setSession(session);
      }
    );

    return () => {
      listener.unsubscribe();
    };
  }, []);

  console.log("why isnt it working!?!!?!?!?!?", auth.session);

  return (
    <Switch>
      {/* {auth.session ? <></> : <Redirect to="/signin" />} */}
      {/* <ProtectedRoute exact path="/" component={<Redirect to="/feed" />} />
      <ProtectedRoute path="/feed" component={Feed} />
      <ProtectedRoute path="/search" component={Search} />
      <ProtectedRoute path="/library" component={Library} />
      <ProtectedRoute path="/me" component={Profile} /> */}
      <Route
        exact
        path="/"
        render={(props) =>
          auth.session !== null ? (
            <Redirect to="/feed" />
          ) : (
            <Redirect to="/signin" />
          )
        }
      />
      <Route
        path="/feed"
        render={(props) =>
          auth.session !== null ? <Feed /> : <Redirect to="/signin" />
        }
      />
      <Route
        path="/search"
        render={(props) =>
          auth.session !== null ? <Search /> : <Redirect to="/signin" />
        }
      />
      <Route
        path="/library"
        render={(props) =>
          auth.session !== null ? <Library /> : <Redirect to="/signin" />
        }
      />
      <Route
        path="/me"
        render={(props) =>
          auth.session !== null ? <Profile /> : <Redirect to="/signin" />
        }
      />
      <Route
        path="/signin"
        render={(props) =>
          auth.session !== null ? <Redirect to="/feed" /> : <SignIn />
        }
      />
      {/* <Route path="/signin" component={SignIn} /> */}
    </Switch>
  );
}

export default App;
