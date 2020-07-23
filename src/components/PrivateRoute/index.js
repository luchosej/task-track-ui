import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthenticationService } from 'services'
import NavBar from 'components/NavBar'
export default function PrivateRoute({ children, ...rest }) {
  const isAuthenticated = AuthenticationService.getToken()
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          <>
            <NavBar />
            {children}
          </>
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