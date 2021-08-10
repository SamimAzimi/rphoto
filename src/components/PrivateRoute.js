import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Authcontext } from "./Authcontext";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(Authcontext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/coupleloginpage"} />
        )
      }
    />
  );
};

export default PrivateRoute;
