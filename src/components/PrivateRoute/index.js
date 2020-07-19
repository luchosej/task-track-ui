import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {
  const isAuthenticated = sessionStorage.getItem('token')
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}