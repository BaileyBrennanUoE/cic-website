import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import Home from './components/Home';
import CPU from './components/CPU'

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink 
                exact to="/" 
                activeClassName="selected">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/CPU" 
                activeClassName="selected">
                CPU
              </NavLink>
            </li>
          </ul>
        </nav>        <Switch>
          <Route path="/CPU">
            <CPU />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;