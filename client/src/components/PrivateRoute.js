import React from "react";
import { Route, Redirect } from "react-router-dom";

export function PrivateRoute(props) {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(renderprops) => {
        if (localStorage.getItem("token")) {
          return <Component {...renderprops} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}
