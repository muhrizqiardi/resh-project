import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { Redirect } from "react-router";
import Feed from "./pages/feed";
import Search from "./pages/search";
import Library from "./pages/library";
import Profile from "./pages/profile";
import SignIn from "./pages/signin";
import CreateAccount from "./pages/createaccount";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import supabase from "./configs/supabase";
import Books from "./pages/books";

function App() {
  const auth = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.auth.handleSession();
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        dispatch.auth.handleSession();
      }
      );
      dispatch.library.getLibrary();
  }, []);

  return auth.loading ? (
    <></>
  ) : (
    <Switch>
      <Route
        path="/createaccount"
        render={(props) =>
          auth.accountCreated ? <Redirect to="/feed" /> : <CreateAccount />
        }
      />
      <Route
        exact
        path="/"
        render={(props) =>
          auth.session !== null ? (
            auth.accountCreated ? (
              <Redirect to="/feed" />
            ) : (
              <Redirect to="/createaccount" />
            )
          ) : (
            <Redirect to="/signin" />
          )
        }
      />
      <Route
        path="/feed"
        render={(props) =>
          auth.session !== null ? (
            auth.accountCreated ? (
              <Feed />
            ) : (
              <Redirect to="/createaccount" />
            )
          ) : (
            <Redirect to="/signin" />
          )
        }
      />
      <Route
        path="/search"
        render={(props) =>
          auth.session !== null ? (
            auth.accountCreated ? (
              <Search />
            ) : (
              <Redirect to="/createaccount" />
            )
          ) : (
            <Redirect to="/signin" />
          )
        }
      />
      <Route
        path="/library"
        render={(props) =>
          auth.session !== null ? (
            auth.accountCreated ? (
              <Library />
            ) : (
              <Redirect to="/createaccount" />
            )
          ) : (
            <Redirect to="/signin" />
          )
        }
      />
      <Route
        path="/books/:googleBooksVolumeId"
        render={(props) =>
          auth.session !== null ? (
            auth.accountCreated ? (
              <Books
                googleBooksVolumeId={props.match.params.googleBooksVolumeId}
              />
            ) : (
              <Redirect to="/createaccount" />
            )
          ) : (
            <Redirect to="/signin" />
          )
        }
      />
      <Route
        path="/me"
        render={(props) =>
          auth.session !== null ? (
            auth.accountCreated ? (
              <Profile />
            ) : (
              <Redirect to="/createaccount" />
            )
          ) : (
            <Redirect to="/signin" />
          )
        }
      />
      <Route
        path="/signin"
        render={(props) =>
          auth.session !== null ? (
            auth.accountCreated ? (
              <Redirect to="/feed" />
            ) : (
              <Redirect to="/createaccount" />
            )
          ) : (
            <SignIn />
          )
        }
      />
      {/* <Route path="/signin" component={SignIn} /> */}
    </Switch>
  );
}

export default App;
