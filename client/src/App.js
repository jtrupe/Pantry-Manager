import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utilities/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./Components/layout/Nav";
import Landing from "./Components/layout/Landing";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import PrivateRoute from "./Components/private-route/PrivateRoute";
import Dashboard from "./Components/dashboard/Dashboard";

import Homepage from './Pages/index';
import Favorites from './Pages/favorites';
import UserPage from './Pages/user';
import Pantry from './Pages/pantry';

<<<<<<< Updated upstream
function App(){

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Homepage
          />
        </Route>
        <Route exact path='/user'>
          <UserPage />
        </Route>
        <Route exact path='/pantry'>
          <Pantry />
        </Route>
        <Route exact path='/favorites'>
          <Favorites /> 
        </Route>
      </Switch>
    </Router>
  );
=======
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  // const [spoonSearch, setSpoonSearch] = useState();
  // useEffect

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
>>>>>>> Stashed changes
}

export default App;