import React, { Component } from "react";
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
import Search from "./Pages/search";
import Favorites from "./Pages/favorites";
import Dashboard from "./Components/dashboard/Dashboard";

import "./style.css";
import BasicCardExample from "./Components/layout/Card";


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

  state = {
    recipes: [],
    
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
   
    
    const api_call = await fetch(`https://api.spoonacular.com/recipes/search?query=${recipeName}?&number=3&apiKey=${process
      .env.REACT_APP_SPOONACULAR_KEY}`);

    const data = await api_call.json();
    this.setState({ recipes: data.results });
    console.log(this.state.recipes);
  }
 
  render() {
    return (
      <div className="container">
        <div className="body">
          <Provider store={store}>
            <Router>
              <div className="App">
                <Navbar />

                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/search" render={(props) => <Search {...props} getRecipe={this.getRecipe} recipes={this.state.recipes} />} />
                <Route exact path="/favorites" component={Favorites} />
                <Switch>
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                </Switch>
              </div>
            </Router>
          </Provider>
        </div>
      </div>
    );
  }
}
export default App;