import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthenticationService } from 'services'
import NavBar from 'components/NavBar'
export default function PrivateRoute({ children, ...rest }) {
  const isAuthenticated = AuthenticationService.getToken()
  return (
    <Route
      {...rest}
      render={({ match, location }) =>
        isAuthenticated ? (
          <>
            <NavBar />
            {React.cloneElement(children, { match })}
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