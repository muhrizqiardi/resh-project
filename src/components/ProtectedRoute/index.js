import { Redirect, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

/* 
  Credit goes to @OlumideSamuel on https://dev.to/olumidesamuel_/implementing-protected-route-and-authentication-in-react-js-3cl4
*/

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const auth = useSelector(({ auth }) => auth);

  useEffect(() => {
    console.log("redirect or not:",
      auth.session ? "not redirect" : "redirect"
    );
  }, []);


  return (
    <Route
      {...restOfProps}
      render={(props) =>
        auth.session ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
}

export default ProtectedRoute;
