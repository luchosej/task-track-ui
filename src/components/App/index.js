import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from 'components/PrivateRoute'
import LandingPage from 'components/LandingPage'
import Login from 'components/Login'
import Signup from 'components/Signup'
import './App.scss';
import Dashboard from 'components/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
        </Switch>
    </Router>
      
    </div>
  );
}

export default App;
