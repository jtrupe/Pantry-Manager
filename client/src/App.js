import React, { useState, useeffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './Pages/index';
import Favorites from './Pages/favorites';
import UserPage from './Pages/user';
import Pantry from './Pages/pantry';

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
}

export default App;