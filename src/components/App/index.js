import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from 'components/PrivateRoute'
import Login from 'components/Login'
import Signup from 'components/Signup'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <PrivateRoute path="/dashboard">
            <div>dashboard</div>
          </PrivateRoute>
        </Switch>
    </Router>
      
    </div>
  );
}

export default App;
